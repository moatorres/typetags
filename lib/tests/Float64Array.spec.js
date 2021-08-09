import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

const float64 = new Float64Array()

describe('Float64Array', () => {
  it('Should be defined', () => {
    expect(Float64Array).toBeDefined()
    expect(TypeTags.Float64Array).toBeDefined()
  })

  it('Should match the type tag of a "Float64Array" data type', () => {
    const tag = getTag(float64)
    expect(tag).toEqual(TypeTags.Float64Array)
    expect(toString(float64)).toEqual(TypeTags.Float64Array)
    expect(float64.toString()).not.toEqual(TypeTags.Float64Array)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(Float64Array)
    expect(tag).not.toEqual(TypeTags.Float64Array)
    expect(toString(Float64Array)).not.toEqual(TypeTags.Float64Array)
    expect(Float64Array.toString()).not.toEqual(TypeTags.Float64Array)
  })
})