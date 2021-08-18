import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const arrayBuffer = new ArrayBuffer(8)

describe('ArrayBuffer', () => {
  it('Should be defined', () => {
    expect(ArrayBuffer).toBeDefined()
    expect(TypeTags.ArrayBuffer).toBeDefined()
  })

  it('Should match the type tag of an "ArrayBuffer" data type', () => {
    const tag = TypeTags.get(arrayBuffer)
    expect(tag).toEqual(TypeTags.ArrayBuffer)
    expect(toString(arrayBuffer)).toEqual(TypeTags.ArrayBuffer)
    expect(arrayBuffer.toString()).toEqual(TypeTags.ArrayBuffer)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(ArrayBuffer)
    expect(tag).not.toEqual(TypeTags.ArrayBuffer)
    expect(toString(ArrayBuffer)).not.toEqual(TypeTags.ArrayBuffer)
    expect(ArrayBuffer.toString()).not.toEqual(TypeTags.ArrayBuffer)
  })
})
