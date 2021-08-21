import { TypeTags } from './TypeTags'
import { ALL_TYPES } from '../constants'
import { toString, getProps, comparer, generateTypeTags } from '../utils'

describe('TypeTags', () => {
  it('Should be defined', () => {
    expect(TypeTags).toBeDefined()
  })

  it('Should be immutable', () => {
    expect(TypeTags).toBeFrozen()
    expect(() => (TypeTags.Array = '')).toThrow()
  })

  it('Should have its own type tag', () => {
    expect(toString(TypeTags)).toEqual('[object TypeTags]')
  })

  describe('Types', () => {
    it('Should have methods attached to its prototype', () => {
      expect(getProps(TypeTags)).toEqual([])
      expect(getProps(TypeTags.constructor.prototype).length).toBeGreaterThan(0)
    })

    it('Should have a property for each type', () => {
      const missing = ALL_TYPES.filter(
        comparer(getProps(TypeTags.constructor.prototype))
      )

      const specialProps = [
        'constructor',
        'assign',
        'get',
        'enhance',
        'has',
        'of',
        'isDefaultTag',
        'isIterator',
        'isTypedArray',
      ]

      const tags = getProps(TypeTags.constructor.prototype).filter(
        (v) => !v.slice(0, 2).includes('is') && !specialProps.includes(v)
      )

      expect(missing.length).toEqual(0)
      expect(tags.length).toEqual(ALL_TYPES.length)
    })
  })

  describe('Predicates', () => {
    it('Should have a predicate for each type', () => {
      const predicates = getProps(TypeTags.constructor.prototype).filter((v) =>
        v.slice(0, 2).includes('is')
      )

      expect(predicates.length).toEqual(ALL_TYPES.length + 3)
    })

    it('Should be able to test any value', () => {
      expect(TypeTags.isArray([])).toBeTrue()
      expect(TypeTags.isArray('[object Array]')).toBeTrue()
      expect(TypeTags.isArray('')).toBeFalse()

      expect(TypeTags.isString([])).toBeFalse()
      expect(TypeTags.isString('')).toBeTrue()
      expect(TypeTags.isString('[object String]')).toBeTrue()
    })
  })

  describe('Helpers', () => {
    describe('.get()', () => {
      it('Should be defined', () => {
        expect(TypeTags.get).toBeDefined()
      })

      it('Should return the type tag of the received type name', () => {
        const res = ALL_TYPES.map(TypeTags.get)
        const tags = generateTypeTags().map((meta) => meta.tag)
        expect(res).toEqual(tags)
      })

      it('Should return undefined if it cannot find a match or no argument is received', () => {
        expect(TypeTags.get()).toEqual(TypeTags.Undefined)
        expect(TypeTags.get('Bazzinga')).toEqual(TypeTags.String)
      })
    })

    describe('.of()', () => {
      it('Should be defined', () => {
        expect(TypeTags.of).toBeDefined()
      })

      it('Should return undefined if no argument is received', () => {
        expect(TypeTags.of()).toEqual(undefined)
      })

      it('Should accept type names as its input value', () => {
        const tag = TypeTags.of('Set')

        expect(tag).toEqual(TypeTags.Set)
        expect(TypeTags.isSet(tag)).toBeTrue()
        expect(tag).toEqual(TypeTags.get('Set'))
      })

      it('Should return a type tag if receives only one argument or an empty array', () => {
        expect(TypeTags.of([])).toEqual(TypeTags.Array)
        expect(TypeTags.of('Blurb')).toEqual(TypeTags.String)
      })

      it('Should return the type tag of its first argument if receives more than one argument', () => {
        expect(TypeTags.of(12, '', [])).toEqual(TypeTags.Number)
      })

      it('Should return an array of type tags if receives a non-empty array', () => {
        expect(TypeTags.of([''])).toEqual([TypeTags.String])
        expect(TypeTags.of([12, '', []])).toEqual([
          TypeTags.Number,
          TypeTags.String,
          TypeTags.Array,
        ])
      })

      it('Should be able to be used in "point-free" style .map() iterations', () => {
        const myArray = [1, '', []]
        const tags = myArray.map(TypeTags.of)
        expect(tags.every((tag) => typeof tag === 'string')).toBeTrue()
        expect(myArray.map((v) => TypeTags.of(v))).toEqual(tags)
      })
    })

    describe('.enhance()', () => {
      it('Should be defined', () => {
        expect(TypeTags.enhance).toBeDefined()
      })

      it('Should return an enhanced builtin type', () => {
        let enhancedArrayType = TypeTags.enhance('Array')

        expect(enhancedArrayType.instance(1)).toEqual([1])
        expect(enhancedArrayType.getTag()).toEqual(TypeTags.Array)
        expect(enhancedArrayType.hasSpecialArgs()).toBeFalse()
        expect(enhancedArrayType.isGlobal()).toBeTrue()
      })
    })

    describe('.has()', () => {
      it('Should be defined', () => {
        expect(TypeTags.has).toBeDefined()
      })

      it('Should allow us to check if an object has a valid "toString" method', () => {
        expect(TypeTags.has([])).toBeTrue()
      })

      it('Should allow us to check if an object has a "tag" value if receives its second argument is a string type', () => {
        expect(TypeTags.has([], 'Array')).toBeTrue()
        expect(TypeTags.has(0, TypeTags.Number)).toBeTrue()
        expect(TypeTags.has('', TypeTags.String)).toBeTrue()
        expect(TypeTags.has(TypeTags, 'TypeTags')).toBeTrue()
        expect(TypeTags.has(false, TypeTags.Boolean)).toBeTrue()
        expect(TypeTags.has(undefined, TypeTags.Undefined)).toBeFalse()
        expect(TypeTags.has(Object.create(null), 'Object')).toBeFalse()
      })
    })

    describe('.isDefaulTag()', () => {
      it('Should be defined', () => {
        expect(TypeTags.isDefaultTag).toBeDefined()
      })

      it('Should allow us to check if a string if one of the default type tag values', () => {
        expect(TypeTags.isDefaultTag(TypeTags.Array)).toBeTrue()
      })
    })

    describe('.isIterator()', () => {
      it('Should be defined', () => {
        expect(TypeTags.isIterator).toBeDefined()
      })

      it('Should allow us to check if value is an instance of an interator', () => {
        expect(TypeTags.isIterator([])).toBeFalse()
        expect(TypeTags.isIterator(new Map().values())).toBeTrue()
      })
    })

    describe('.isTypedArray()', () => {
      it('Should be defined', () => {
        expect(TypeTags.isTypedArray).toBeDefined()
      })

      it('Should allow us to check if value is an instance of an interator', () => {
        expect(TypeTags.isTypedArray([])).toBeFalse()
        expect(TypeTags.isTypedArray(new Float32Array())).toBeTrue()
        expect(TypeTags.isTypedArray(new Float64Array())).toBeTrue()
        expect(TypeTags.isTypedArray(new Int8Array())).toBeTrue()
        expect(TypeTags.isTypedArray(new Int16Array())).toBeTrue()
        expect(TypeTags.isTypedArray(new Int32Array())).toBeTrue()
        expect(TypeTags.isTypedArray(new Uint8Array())).toBeTrue()
        expect(TypeTags.isTypedArray(new Uint8ClampedArray())).toBeTrue()
        expect(TypeTags.isTypedArray(new Uint16Array())).toBeTrue()
        expect(TypeTags.isTypedArray(new Uint32Array())).toBeTrue()
      })
    })

    describe('.assign()', () => {
      it('Should be defined', () => {
        expect(TypeTags.assign).toBeDefined()
      })

      it('Should assign a "Symbol.toStringTag" prop to the received data type', () => {
        const myObj = { name: 'TypeTags' }
        const beforeTag = myObj.toString()
        const beforeToStringTag = myObj[Symbol.toStringTag]
        expect(beforeTag).toEqual(TypeTags.Object)
        expect(beforeToStringTag).not.toBeDefined()
        expect(TypeTags.get(myObj)).toEqual(TypeTags.Object)

        TypeTags.assign(myObj, 'Hey')
        const afterTag = myObj.toString()
        const afterToStringTag = myObj[Symbol.toStringTag]
        expect(afterTag).toEqual('[object Hey]')
        expect(afterToStringTag).toBeDefined()
        expect(afterToStringTag).toEqual('Hey')
      })

      it("Should define a method toString on the received value's prototype, if there isn't any, then assign a 'Symbol.toStringTag' to it", () => {
        const hasNullProto = Object.create(null)
        expect(hasNullProto.toString).not.toBeDefined()

        TypeTags.assign(hasNullProto, 'Nulo')
        expect(hasNullProto.toString()).toEqual('[object Nulo]')
      })
    })
  })

  describe('Symbols', () => {
    it('Should have a Symbol.species value set', () => {
      expect(TypeTags[Symbol.species]).toBeDefined()
    })

    it('Should have a Symbol.hasInstance method set', () => {
      expect(TypeTags instanceof TypeTags.constructor).toBeTrue()
    })

    it('Should have a Symbol.iterator method set', () => {
      const ofLoop = []
      for (let prop of TypeTags) ofLoop.push(prop)

      expect(ofLoop.length).toBeGreaterThan(1)
      expect(ofLoop.every((v) => v !== 'constructor')).toBeTrue()

      const inLoop = []
      for (let prop in TypeTags) inLoop.push(prop)

      expect(inLoop.length).toBeGreaterThan(1)
      expect(inLoop.every((v) => v !== 'constructor')).toBeTrue()
    })
  })
})
