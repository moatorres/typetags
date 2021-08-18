import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const errInst = RangeError()
const errCons = new RangeError()

describe('RangeError', () => {
  it('Should be defined', () => {
    expect(RangeError).toBeDefined()
    expect(TypeTags.RangeError).toBeDefined()
  })

  it('Should match the type tag of a "RangeError" data type', () => {
    const tag = TypeTags.get(errCons)
    expect(tag).toEqual(TypeTags.RangeError)
    expect(toString(errCons)).toEqual(TypeTags.RangeError)
    expect(errCons.toString()).not.toEqual(TypeTags.RangeError)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(RangeError)
    expect(tag).not.toEqual(TypeTags.RangeError)
    expect(toString(RangeError)).not.toEqual(TypeTags.RangeError)
    expect(RangeError.toString()).not.toEqual(TypeTags.RangeError)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isRangeError).toBeDefined()
    expect(TypeTags.isRangeError(errCons)).toBeTrue()
    expect(TypeTags.isRangeError(toString(errCons))).toBeTrue()
    expect(TypeTags.isRangeError(TypeTags.RangeError)).toBeTrue()
  })
})
