import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

const uint8array = new Uint8Array()

describe('Uint8Array', () => {
  it('Should be defined', () => {
    expect(Uint8Array).toBeDefined()
    expect(TypeTags.Uint8Array).toBeDefined()
  })

  it('Should match the type tag of a "Uint8Array" data type', () => {
    const tag = TypeTags.get(uint8array)
    expect(tag).toEqual(TypeTags.Uint8Array)
    expect(toString(uint8array)).toEqual(TypeTags.Uint8Array)
    expect(uint8array.toString()).not.toEqual(TypeTags.Uint8Array)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(Uint8Array)
    expect(tag).not.toEqual(TypeTags.Uint8Array)
    expect(toString(Uint8Array)).not.toEqual(TypeTags.Uint8Array)
    expect(Uint8Array.toString()).not.toEqual(TypeTags.Uint8Array)
  })
})
