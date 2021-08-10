import { TypeTags } from './TypeTags'
import { toString, comparer } from '../.internal/utils'
import { ALL_TYPES } from '../.internal/types'

const { getOwnPropertyNames: getProps } = Object

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

  describe('Properties', () => {
    it('Should have methods attached to its prototype', () => {
      expect(getProps(TypeTags)).toEqual([])
      expect(getProps(TypeTags.constructor.prototype).length).toBeGreaterThan(0)
    })

    it('Should have a list of types with tags', () => {
      const missing = ALL_TYPES.filter(
        comparer(getProps(TypeTags.constructor.prototype))
      )

      const tags = getProps(TypeTags.constructor.prototype).filter(
        (v) => !v.slice(0, 2).includes('is') && v !== 'constructor'
      )

      expect(missing.length).toEqual(0)
      expect(tags.length).toEqual(ALL_TYPES.length)
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

  describe('Predicates', () => {
    it('Should have a predicate for each type', () => {
      const predicates = getProps(TypeTags.constructor.prototype).filter((v) =>
        v.slice(0, 2).includes('is')
      )

      expect(predicates.length).toEqual(ALL_TYPES.length)
    })

    it('Should be able to test any value', () => {
      expect(TypeTags.isArray([])).toBeTrue()
      expect(TypeTags.isArray('[object Array]')).toBeTrue()
      expect(TypeTags.isArray('')).toBeFalse()

      expect(TypeTags.isString([])).toBeFalse()
      expect(TypeTags.isString('')).toBeTrue()
      expect(TypeTags.isString('[object String]')).toBeTrue()
    })

    it('Should have a method "available" on each predicate', () => {
      expect(TypeTags.isArray.available()).toBeTrue()
      expect(TypeTags.isWindow.available()).toBeFalse()
    })
  })
})
