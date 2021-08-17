import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

const int8array = new Int8Array()

describe('Int8Array', () => {
  it('Should be defined', () => {
    expect(Int8Array).toBeDefined()
    expect(TypeTags.Int8Array).toBeDefined()
  })

  it('Should match the type tag of a "Int8Array" data type', () => {
    const tag = TypeTags.get(int8array)
    expect(tag).toEqual(TypeTags.Int8Array)
    expect(toString(int8array)).toEqual(TypeTags.Int8Array)
    expect(int8array.toString()).not.toEqual(TypeTags.Int8Array) // custom
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(Int8Array)
    expect(tag).not.toEqual(TypeTags.Int8Array)
    expect(toString(Int8Array)).not.toEqual(TypeTags.Int8Array)
    expect(Int8Array.toString()).not.toEqual(TypeTags.Int8Array) // custom
  })
})
