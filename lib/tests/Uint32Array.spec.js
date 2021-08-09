import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

const uint32array = new Uint32Array()

describe('Uint32Array', () => {
  it('Should be defined', () => {
    expect(Uint32Array).toBeDefined()
    expect(TypeTags.Uint32Array).toBeDefined()
  })

  it('Should match the type tag of a "Uint32Array" data type', () => {
    const tag = getTag(uint32array)
    expect(tag).toEqual(TypeTags.Uint32Array)
    expect(toString(uint32array)).toEqual(TypeTags.Uint32Array)
    expect(uint32array.toString()).not.toEqual(TypeTags.Uint32Array)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(Uint32Array)
    expect(tag).not.toEqual(TypeTags.Uint32Array)
    expect(toString(Uint32Array)).not.toEqual(TypeTags.Uint32Array)
    expect(Uint32Array.toString()).not.toEqual(TypeTags.Uint32Array)
  })
})
