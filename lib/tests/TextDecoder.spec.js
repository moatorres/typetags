import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const decoder = new TextDecoder() // constructor

describe('TextDecoder', () => {
  it('Should be defined', () => {
    expect(TextDecoder).toBeDefined()
    expect(TypeTags.TextDecoder).toBeDefined()
  })

  it('Should match the type tag of a "TextDecoder" data type', () => {
    const tag = TypeTags.get(decoder)
    expect(tag).toEqual(TypeTags.TextDecoder)
    expect(toString(decoder)).toEqual(TypeTags.TextDecoder)
    expect(decoder.toString()).toEqual(TypeTags.TextDecoder) // default
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(TextDecoder)
    expect(tag).not.toEqual(TypeTags.TextDecoder)
    expect(toString(TextDecoder)).not.toEqual(TypeTags.TextDecoder)
    expect(TextDecoder.toString()).not.toEqual(TypeTags.TextDecoder)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isTextDecoder).toBeDefined()
    expect(TypeTags.isTextDecoder(decoder)).toBeTrue()
    expect(TypeTags.isTextDecoder(toString(decoder))).toBeTrue()
    expect(TypeTags.isTextDecoder(TypeTags.TextDecoder)).toBeTrue()
  })
})
