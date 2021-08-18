import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const encoder = new TextEncoder() // constructor

describe('TextEncoder', () => {
  it('Should be defined', () => {
    expect(TextEncoder).toBeDefined()
    expect(TypeTags.TextEncoder).toBeDefined()
  })

  it('Should match the type tag of a "TextEncoder" data type', () => {
    const tag = TypeTags.get(encoder)
    expect(tag).toEqual(TypeTags.TextEncoder)
    expect(toString(encoder)).toEqual(TypeTags.TextEncoder)
    expect(encoder.toString()).toEqual(TypeTags.TextEncoder) // default
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(TextEncoder)
    expect(tag).not.toEqual(TypeTags.TextEncoder)
    expect(toString(TextEncoder)).not.toEqual(TypeTags.TextEncoder)
    expect(TextEncoder.toString()).not.toEqual(TypeTags.TextEncoder)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isTextEncoder).toBeDefined()
    expect(TypeTags.isTextEncoder(encoder)).toBeTrue()
    expect(TypeTags.isTextEncoder(toString(encoder))).toBeTrue()
    expect(TypeTags.isTextEncoder(TypeTags.TextEncoder)).toBeTrue()
  })
})
