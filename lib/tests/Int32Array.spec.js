import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

const int32array = new Int32Array()

describe('Int32Array', () => {
  it('Should be defined', () => {
    expect(Int32Array).toBeDefined()
    expect(TypeTags.Int32Array).toBeDefined()
  })

  it('Should match the type tag of a "Int32Array" data type', () => {
    const tag = TypeTags.get(int32array)
    expect(tag).toEqual(TypeTags.Int32Array)
    expect(toString(int32array)).toEqual(TypeTags.Int32Array)
    expect(int32array.toString()).not.toEqual(TypeTags.Int32Array) // custom
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(Int32Array)
    expect(tag).not.toEqual(TypeTags.Int32Array)
    expect(toString(Int32Array)).not.toEqual(TypeTags.Int32Array)
    expect(Int32Array.toString()).not.toEqual(TypeTags.Int32Array) // custom
  })
})
