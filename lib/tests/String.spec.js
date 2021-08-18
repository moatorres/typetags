import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

let stringLit = ''
let stringInst = String()
let string = new String()
let stringIterator = ''[Symbol.iterator]()

describe('String', () => {
  it('Should be defined', () => {
    expect(String).toBeDefined() // static object
    expect(TypeTags.String).toBeDefined()
  })

  it('Should match the type tag of an "String" data type', () => {
    const tag = TypeTags.get(string)

    expect(tag).toEqual(TypeTags.String)
    expect(toString(string)).toEqual(TypeTags.String)
    expect(string.toString()).not.toEqual(TypeTags.String) // custom
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = TypeTags.get(string.toFixed)
    expect(tag).not.toEqual(TypeTags.String)
    expect(string.toString()).not.toEqual(TypeTags.String) // custom
    expect(toString(string.toExponential)).not.toEqual(TypeTags.String)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isString).toBeDefined()
    expect(TypeTags.isString(string)).toBeTrue()
    expect(TypeTags.isString(toString(string))).toBeTrue()
    expect(TypeTags.isString(TypeTags.String)).toBeTrue()
  })
})

describe('String Iterator', () => {
  it('Should be defined', () => {
    expect(TypeTags['String.Iterator']).toBeDefined()
  })

  it('Should match the type tag of an "String Iterator" data type', () => {
    const tag = TypeTags.get(stringIterator)
    expect(tag).toEqual(TypeTags['String.Iterator'])
    expect(toString(stringIterator)).toEqual(TypeTags['String.Iterator'])
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isStringIterator).toBeDefined()
    expect(TypeTags.isStringIterator(string[Symbol.iterator]())).toBeTrue()
    expect(
      TypeTags.isStringIterator(toString(string[Symbol.iterator]()))
    ).toBeTrue()
    expect(TypeTags.isStringIterator(TypeTags['String.Iterator'])).toBeTrue()
  })
})
