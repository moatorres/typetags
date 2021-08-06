import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

const arrayBuffer = new ArrayBuffer(8)

describe('TypeTags.ArrayBuffer', () => {
  it('Should be defined', () => {
    expect(ArrayBuffer).toBeDefined()
    expect(TypeTags.ArrayBuffer).toBeDefined()
  })

  it('Should match the type tag of an "ArrayBuffer" data type', () => {
    const tag = getTag(arrayBuffer)
    expect(tag).toEqual(TypeTags.ArrayBuffer)
    expect(toString(arrayBuffer)).toEqual(TypeTags.ArrayBuffer)
    expect(arrayBuffer.toString()).toEqual(TypeTags.ArrayBuffer)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(ArrayBuffer)
    expect(tag).not.toEqual(TypeTags.ArrayBuffer)
    expect(toString(ArrayBuffer)).not.toEqual(TypeTags.ArrayBuffer)
    expect(ArrayBuffer.toString()).not.toEqual(TypeTags.ArrayBuffer)
  })
})
