import getTag from '../get-tag'
import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

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
    const tag = getTag(string)

    expect(tag).toEqual(TypeTags.String)
    expect(toString(string)).toEqual(TypeTags.String)
    expect(string.toString()).not.toEqual(TypeTags.String) // custom
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = getTag(string.toFixed)
    expect(tag).not.toEqual(TypeTags.String)
    expect(string.toString()).not.toEqual(TypeTags.String) // custom
    expect(toString(string.toExponential)).not.toEqual(TypeTags.String)
  })
})

describe('String Iterator', () => {
  it('Should be defined', () => {
    expect(TypeTags['String.Iterator']).toBeDefined()
  })

  it('Should match the type tag of an "String Iterator" data type', () => {
    const tag = getTag(stringIterator)
    expect(tag).toEqual(TypeTags['String.Iterator'])
    expect(toString(stringIterator)).toEqual(TypeTags['String.Iterator'])
  })
})
