import getTag from '../get-tag'
import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

const encoder = new TextEncoder() // constructor

describe('TextEncoder', () => {
  it('Should be defined', () => {
    expect(TextEncoder).toBeDefined()
    expect(TypeTags.TextEncoder).toBeDefined()
  })

  it('Should match the type tag of a "TextEncoder" data type', () => {
    const tag = getTag(encoder)
    expect(tag).toEqual(TypeTags.TextEncoder)
    expect(toString(encoder)).toEqual(TypeTags.TextEncoder)
    expect(encoder.toString()).toEqual(TypeTags.TextEncoder) // default
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(TextEncoder)
    expect(tag).not.toEqual(TypeTags.TextEncoder)
    expect(toString(TextEncoder)).not.toEqual(TypeTags.TextEncoder)
    expect(TextEncoder.toString()).not.toEqual(TypeTags.TextEncoder)
  })
})
