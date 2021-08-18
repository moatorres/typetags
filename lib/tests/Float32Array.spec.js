import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const float32 = new Float32Array()

describe('Float32Array', () => {
  it('Should be defined', () => {
    expect(Float32Array).toBeDefined()
    expect(TypeTags.Float32Array).toBeDefined()
  })

  it('Should match the type tag of a "Float32Array" data type', () => {
    const tag = TypeTags.get(float32)
    expect(tag).toEqual(TypeTags.Float32Array)
    expect(toString(float32)).toEqual(TypeTags.Float32Array)
    expect(float32.toString()).not.toEqual(TypeTags.Float32Array)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(Float32Array)
    expect(tag).not.toEqual(TypeTags.Float32Array)
    expect(toString(Float32Array)).not.toEqual(TypeTags.Float32Array)
    expect(Float32Array.toString()).not.toEqual(TypeTags.Float32Array)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isFloat32Array).toBeDefined()
    expect(TypeTags.isFloat32Array(float32)).toBeTrue()
    expect(TypeTags.isFloat32Array(toString(float32))).toBeTrue()
    expect(TypeTags.isFloat32Array(TypeTags.Float32Array)).toBeTrue()
  })
})
