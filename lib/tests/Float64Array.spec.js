import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const float64 = new Float64Array()

describe('Float64Array', () => {
  it('Should be defined', () => {
    expect(Float64Array).toBeDefined()
    expect(TypeTags.Float64Array).toBeDefined()
  })

  it('Should match the type tag of a "Float64Array" data type', () => {
    const tag = TypeTags.get(float64)
    expect(tag).toEqual(TypeTags.Float64Array)
    expect(toString(float64)).toEqual(TypeTags.Float64Array)
    expect(float64.toString()).not.toEqual(TypeTags.Float64Array)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(Float64Array)
    expect(tag).not.toEqual(TypeTags.Float64Array)
    expect(toString(Float64Array)).not.toEqual(TypeTags.Float64Array)
    expect(Float64Array.toString()).not.toEqual(TypeTags.Float64Array)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isFloat64Array).toBeDefined()
    expect(TypeTags.isFloat64Array(float64)).toBeTrue()
    expect(TypeTags.isFloat64Array(toString(float64))).toBeTrue()
    expect(TypeTags.isFloat64Array(TypeTags.Float64Array)).toBeTrue()
  })
})
