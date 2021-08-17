import TAGS from '../.internal/data/typetags.json'
import { TType } from './TType'
import { TypeTags } from './TypeTags'
import { getProps, toString } from '../.internal/utils'

const arrayType = TType.create('Array')

describe('TType', () => {
  it('Should be defined', () => {
    expect(TType).toBeDefined()
    expect(TType.create).toBeDefined()
  })

  describe('.type', () => {
    it('Should be defined', () => {
      expect(arrayType.type)
    })

    it('Should return the name of its built-in type', () => {
      expect(arrayType.type).toEqual('Array')
    })
  })

  describe('.tag', () => {
    it('Should be defined', () => {
      expect(arrayType.tag)
    })

    it('Should return the type tag of its type', () => {
      expect(arrayType.tag).toEqual(TypeTags.Array)
    })
  })

  describe('.isAvailable', () => {
    it('Should be defined', () => {
      expect(arrayType.isAvailable)
    })

    it('Should allow us to check if the current built-in type is defined and available on our runtime', () => {
      expect(arrayType.isAvailable()).toBeTrue()
      expect(typeof Array !== 'undefined').toBeTrue()
    })
  })

  describe('.isSyntatic', () => {
    it('Should be defined', () => {
      expect(arrayType.isSyntatic)
    })

    it('Should allow us to check if this is a syntatic type (declared by a keyword or expression)', () => {
      const asyncExpression = TType.create('AsyncFunction')
      expect(arrayType.isSyntatic()).toBeFalse()
      expect(asyncExpression.isSyntatic()).toBeTrue()
    })
  })

  describe('.isTypedArray', () => {
    it('Should be defined', () => {
      expect(arrayType.isTypedArray)
    })

    it('Should allow us to check if the current type is a TypedArray built-in type', () => {
      const typedArrays = [
        'Float32Array',
        'Float64Array',
        'Int8Array',
        'Int16Array',
        'Int32Array',
        'Uint8Array',
        'Uint8ClampedArray',
        'Uint16Array',
        'Uint32Array',
      ]
      const enhancedTypedArrays = typedArrays.map(TType.create)
      expect(arrayType.isTypedArray()).toBeFalse()
      expect(enhancedTypedArrays.every((type) => type.isTypedArray() === true))
    })
  })

  describe('.isPrimitive', () => {
    it('Should be defined', () => {
      expect(arrayType.isPrimitive)
    })

    it('Should allow us to check if the current type is an "immutable datum" primitive type', () => {
      const primitiveTypes = [
        'BigInt',
        'Boolean',
        'Null',
        'Number',
        'Undefined',
        'String',
        'Symbol',
      ]
      const enhancedPrimitives = primitiveTypes.map(TType.create)
      const objectType = TType.create('Object')
      expect(arrayType.isPrimitive()).toBeFalse()
      expect(objectType.isPrimitive()).toBeFalse()
      expect(enhancedPrimitives.every((type) => type.isPrimitive() === true))
    })
  })

  describe('.isConstructor', () => {
    it('Should be defined', () => {
      expect(arrayType.isConstructor)
    })

    it('Should allow us to determine if the current built-in type is a constructor function', () => {
      const consoleType = TType.create('Console')
      expect(() => new console()).toThrow()
      expect(arrayType.isConstructor()).toBeTrue()
      expect(() => new Array(1, 2, 3)).not.toThrow()
      expect(consoleType.isConstructor()).toBeFalse()
    })
  })

  describe('.isFactory', () => {
    it('Should be defined', () => {
      expect(arrayType.isFactory)
    })

    it('Should allow us to determine if the current built-in type is a factory function', () => {
      const mathType = TType.create('Math')
      expect(mathType.isFactory()).toBeFalse()
      expect(() => Math(100)).toThrow()
      expect(arrayType.isFactory()).toBeTrue()
      expect(() => Array(1, 2, 3)).not.toThrow()
    })
  })

  describe('.isObject', () => {
    it('Should be defined', () => {
      expect(arrayType.isObject)
    })

    it('Should allow us to check if the current built-in type is an object', () => {
      const reflectType = TType.create('Reflect')
      expect(arrayType.isObject()).toBeFalse()
      expect(reflectType.isObject()).toBeTrue()
    })
  })

  describe('.isFunction', () => {
    it('Should be defined', () => {
      expect(arrayType.isFunction)
    })

    it('Should allow us to check if the current built-in type is function', () => {
      const intlType = TType.create('Intl')
      expect(intlType.isFunction()).toBeFalse()
      expect(arrayType.isFunction()).toBeTrue()
    })
  })

  describe('.isNested', () => {
    it('Should be defined', () => {
      expect(arrayType.isNested)
    })

    it('Should allow us to check if the current built-in type is a "type.nested" type', () => {
      const intlLocaleType = TType.create('Intl.Locale')
      expect(arrayType.isNested()).toBeFalse()
      expect(intlLocaleType.isNested()).toBeTrue()
    })
  })

  describe('.isIterator', () => {
    it('Should be defined', () => {
      expect(arrayType.isIterator)
    })

    it('Should allow us to check if the current type is an iterator function type', () => {
      const stringIteratorType = TType.create('String.Iterator')
      expect(arrayType.isIterator()).toBeFalse()
      expect(stringIteratorType.isIterator()).toBeTrue()
    })
  })

  describe('.isStringifiable', () => {
    it('Should be defined', () => {
      expect(arrayType.isStringifiable)
    })

    it('Should allow us to check if instances of the current built-in type are stringifiable (using native JSON.stringify)', () => {
      const globalType = TType.create('Global')
      expect(arrayType.isStringifiable()).toBeTrue()
      expect(globalType.isStringifiable()).toBeFalse()
    })
  })

  describe('.hasSpecialArgs', () => {
    it('Should be defined', () => {
      expect(arrayType.hasSpecialArgs)
    })

    it('Should allow us to check if the current built-in needs special parameters in order to be instantiated', () => {
      const wasmModuleType = TType.create('WebAssembly.Module')
      expect(arrayType.hasSpecialArgs()).toBeFalse()
      expect(wasmModuleType.hasSpecialArgs()).toBeTrue()
    })
  })

  describe('.getTag', () => {
    it('Should be defined', () => {
      expect(arrayType.getTag)
    })

    it('Should return the type tag of the current built-in type', () => {
      expect(arrayType.getTag()).toEqual(arrayType.tag)
      expect(arrayType.getTag()).toEqual(TypeTags.Array)
    })
  })

  describe('.typeOf', () => {
    it('Should be defined', () => {
      expect(arrayType.typeOf)
    })

    // TODO: chould be a property instead of a method?
    it('Should allow us to check the typeof of the current built-in type', () => {
      const arrayTypeInstance = arrayType.instance(1, 2, 3)
      expect(arrayType.typeOf()).toEqual('function')
      expect(typeof arrayTypeInstance).toEqual('object')
    })
  })

  describe('.instanceTypeOf', () => {
    it('Should be defined', () => {
      expect(arrayType.instanceTypeOf)
    })

    // TODO: chould be a property instead of a method?
    it('Should allow us to check the typeof of an instance of the current built-in type', () => {
      expect(arrayType.instanceTypeOf()).toEqual(typeof [])
    })
  })

  describe('.toString', () => {
    it('Should be defined', () => {
      expect(arrayType.toString)
    })

    it('Should return a type tag of a TypeTags enhanced type', () => {
      const expectedTypeTag = '[object TypeTags Array]'
      expect(arrayType.toString()).toEqual(expectedTypeTag)
      expect(toString(arrayType)).toEqual(expectedTypeTag)
    })
  })

  describe('.inGlobal', () => {
    it('Should be defined', () => {
      expect(arrayType.inGlobal)
    })

    it('Should allow us to check if the current built-in type is defined on the global object', () => {
      expect(arrayType.inGlobal()).toBeTrue()
    })
  })

  describe('.info', () => {
    it('Should be defined', () => {
      expect(arrayType.info)
    })

    // TODO: improve typeof checks and type/builtin instance
    it('Should return relevant metadata for the current type', () => {
      const meta = arrayType.info()
      expect(meta.hasSpecialArgs).toEqual(arrayType.hasSpecialArgs())
      expect(meta.inGlobal).toEqual(arrayType.inGlobal())
      expect(meta.instanceOf).toEqual('Array')
      expect(meta.instanceTypeOf).toEqual(arrayType.instanceTypeOf())
      expect(meta.isAvailable).toEqual(arrayType.isAvailable())
      expect(meta.isConstructor).toEqual(arrayType.isConstructor())
      expect(meta.isFactory).toEqual(arrayType.isFactory())
      expect(meta.isFunction).toEqual(arrayType.isFunction())
      expect(meta.isIterator).toEqual(arrayType.isIterator())
      expect(meta.isNested).toEqual(arrayType.isNested())
      expect(meta.isPrimitive).toEqual(arrayType.isPrimitive())
      expect(meta.isStringifiable).toEqual(arrayType.isStringifiable())
      expect(meta.isSyntatic).toEqual(arrayType.isSyntatic())
      expect(meta.isTypedArray).toEqual(arrayType.isTypedArray())
      expect(meta.name).toEqual('Array')
      expect(typeof meta.properties).toEqual('object')
      expect(typeof meta.symbols).toEqual('object')
      expect(meta.tag).toEqual(arrayType.tag)
      expect(typeof meta.toString).toEqual('object')
      expect(meta.type).toEqual(Array)
      expect(meta.typeOf).toEqual(arrayType.typeOf())
    })
  })

  // TODO: should we improve this api?
  // "instance" often gets confused
  // between a datatype and a built-in constructor type
  describe('.instance', () => {
    it('Should be defined', () => {
      expect(arrayType.instance)
    })

    it('Should be defined', () => {
      expect(arrayType.instance)
    })
  })

  describe('.builtin', () => {
    it('Should be defined', () => {
      expect(arrayType.builtin)
    })

    it('Should return undefined if its type is undefined', () => {
      expect(TType.create('').builtin()).toEqual(undefined)
    })

    it('Should return an instance of the current built-in type', () => {
      expect(arrayType.builtin()).toEqual(Array)
    })
  })

  describe('.ownKeys', () => {
    it('Should be defined', () => {
      expect(arrayType.ownKeys)
    })

    // TODO: should we improve this api?
    // we often expect to check all props (own and prototype owned)
    it('Should return an array wiht properties of the current built-in type', () => {
      expect(arrayType.ownKeys()).toEqual(getProps(Array))
    })
  })

  it('Should successfully instantiate any type', () => {
    expect(() => TAGS.map((v) => TType.create(v.type))).not.toThrow()
  })

  it('Should allow us to check instances of the current built-in type', () => {
    expect([] instanceof arrayType).toBeTrue()
  })

  it('Should be an instance of a TType', () => {
    expect(arrayType[Symbol.species]).toEqual(TType)
  })

  it('Should allow us to iterate over its own properties', () => {
    let inLoop = []
    for (let n in arrayType) inLoop.push(n)
    expect(inLoop).toEqual(['type', 'tag'])
  })

  it("Should allow us to iterate over its own properties' values", () => {
    let ofLoop = []
    for (let n of arrayType) ofLoop.push(n)
    expect(ofLoop).toEqual(['Array', '[object Array]'])
  })
})
