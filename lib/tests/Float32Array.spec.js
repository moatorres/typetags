import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

const float32 = new Float32Array()

describe('Float32Array', () => {
  it('Should be defined', () => {
    expect(Float32Array).toBeDefined()
    expect(TypeTags.Float32Array).toBeDefined()
  })

  it('Should match the type tag of a "Float32Array" data type', () => {
    const tag = getTag(float32)
    expect(tag).toEqual(TypeTags.Float32Array)
    expect(toString(float32)).toEqual(TypeTags.Float32Array)
    expect(float32.toString()).not.toEqual(TypeTags.Float32Array)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(Float32Array)
    expect(tag).not.toEqual(TypeTags.Float32Array)
    expect(toString(Float32Array)).not.toEqual(TypeTags.Float32Array)
    expect(Float32Array.toString()).not.toEqual(TypeTags.Float32Array)
  })
})
