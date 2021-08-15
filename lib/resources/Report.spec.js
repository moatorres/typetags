import { Report } from './Report'
import { TypeTags } from './TypeTags'
import { toString } from '../.internal/utils'

describe('Report', () => {
  it('Should be defined', () => {
    expect(Report).toBeDefined()
    expect(Report[Symbol.species]).toBeDefined()
    expect(Report[Symbol.toStringTag]).toBeDefined()
  })

  describe('instance()', () => {
    it('Should be defined', () => {
      expect(Report.instance).toBeDefined()
    })

    it('Should return an object with valid metadata of the received value', () => {
      const array = []
      const arrayMetadata = Report.instance(array)
      // expect(arrayMetadata.name).toEqual('Array')
      expect(arrayMetadata.value).toEqual([])
      expect(arrayMetadata.typeof).toEqual('object')
      expect(arrayMetadata.prototype).toEqual(Array.prototype)
      expect(arrayMetadata.instanceof).toEqual(Array.name)
      expect(arrayMetadata.constructor).toEqual(Array)
      expect(arrayMetadata.typetag).toEqual(TypeTags.Array)
      expect(typeof arrayMetadata.toString).toEqual('object')
      expect(arrayMetadata.toString.self).toEqual(array.toString())
      expect(arrayMetadata.toString.tag).toEqual(toString(array))
      expect(arrayMetadata.toString.behavior).toEqual('custom')
      expect(typeof arrayMetadata.symbols).toEqual('object')
      expect(arrayMetadata.symbols.species).toEqual(array[Symbol.species])
      expect(arrayMetadata.symbols.iterator).toEqual(array[Symbol.iterator])
      expect(arrayMetadata.symbols.toStringTag).toEqual(undefined)
      expect(arrayMetadata.symbols.hasInstance).toEqual(true)

      const string = 'hey'
      const stringMetadata = Report.instance(string)
      // expect(stringMetadata.name).toEqual('String')
      expect(stringMetadata.value).toEqual(string)
      expect(stringMetadata.typeof).toEqual('string')
      expect(stringMetadata.prototype).toEqual(String.prototype)
      expect(stringMetadata.instanceof).toEqual(String.name)
      expect(stringMetadata.constructor).toEqual(String)
      expect(stringMetadata.typetag).toEqual(TypeTags.String)
      expect(typeof stringMetadata.toString).toEqual('object')
      expect(stringMetadata.toString.self).toEqual(string.toString())
      expect(stringMetadata.toString.tag).toEqual(toString(string))
      expect(stringMetadata.toString.behavior).toEqual('custom')
      expect(typeof stringMetadata.symbols).toEqual('object')
      expect(stringMetadata.symbols.species).toEqual(string[Symbol.species])
      expect(stringMetadata.symbols.iterator).toEqual(string[Symbol.iterator])
      expect(stringMetadata.symbols.toStringTag).toEqual(undefined)
      expect(stringMetadata.symbols.hasInstance).toEqual(false)
    })
  })

  describe('builtin()', () => {
    it('Should be defined', () => {
      expect(Report.builtin).toBeDefined()
    })
  })

  describe('introspect()', () => {
    it('Should be defined', () => {
      expect(Report.introspect).toBeDefined()
    })

    it('Should work', () => {
      const number = 1
      const numberMetadata = Report.introspect(number)

      expect(numberMetadata.typeof).toEqual('number')
      expect(numberMetadata.tag).toEqual(TypeTags.Number)
      expect(numberMetadata.toString).toEqual('1')
      expect(numberMetadata.toStringTag).toEqual(undefined)
      expect(numberMetadata.toStringBehavior).toEqual('custom')
      expect(numberMetadata.constructor).toEqual(number.constructor)
      expect(typeof numberMetadata.properties.ownKeys).toEqual('object')
    })
  })
})
