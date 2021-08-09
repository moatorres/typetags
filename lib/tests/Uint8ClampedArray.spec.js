import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

const uint8Clamped = new Uint8ClampedArray()

describe('Uint8ClampedArray', () => {
  it('Should be defined', () => {
    expect(Uint8ClampedArray).toBeDefined()
    expect(TypeTags.Uint8ClampedArray).toBeDefined()
  })

  it('Should match the type tag of a "Uint8ClampedArray" data type', () => {
    const tag = getTag(uint8Clamped)
    expect(tag).toEqual(TypeTags.Uint8ClampedArray)
    expect(toString(uint8Clamped)).toEqual(TypeTags.Uint8ClampedArray)
    expect(uint8Clamped.toString()).not.toEqual(TypeTags.Uint8ClampedArray)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(Uint8ClampedArray)
    expect(tag).not.toEqual(TypeTags.Uint8ClampedArray)
    expect(toString(Uint8ClampedArray)).not.toEqual(TypeTags.Uint8ClampedArray)
    expect(Uint8ClampedArray.toString()).not.toEqual(TypeTags.Uint8ClampedArray)
  })
})
