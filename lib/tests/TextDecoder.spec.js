import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

const encoder = new TextDecoder() // constructor

describe('TextDecoder', () => {
  it('Should be defined', () => {
    expect(TextDecoder).toBeDefined()
    expect(TypeTags.TextDecoder).toBeDefined()
  })

  it('Should match the type tag of a "TextDecoder" data type', () => {
    const tag = getTag(encoder)
    expect(tag).toEqual(TypeTags.TextDecoder)
    expect(toString(encoder)).toEqual(TypeTags.TextDecoder)
    expect(encoder.toString()).toEqual(TypeTags.TextDecoder) // default
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(TextDecoder)
    expect(tag).not.toEqual(TypeTags.TextDecoder)
    expect(toString(TextDecoder)).not.toEqual(TypeTags.TextDecoder)
    expect(TextDecoder.toString()).not.toEqual(TypeTags.TextDecoder)
  })
})
