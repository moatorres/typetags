import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

const errInst = RangeError()
const errCons = new RangeError()

describe('RangeError', () => {
  it('Should be defined', () => {
    expect(RangeError).toBeDefined()
    expect(TypeTags.RangeError).toBeDefined()
  })

  it('Should match the type tag of a "RangeError" data type', () => {
    const tag = getTag(errCons)
    expect(tag).toEqual(TypeTags.RangeError)
    expect(toString(errCons)).toEqual(TypeTags.RangeError)
    expect(errCons.toString()).not.toEqual(TypeTags.RangeError)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(RangeError)
    expect(tag).not.toEqual(TypeTags.RangeError)
    expect(toString(RangeError)).not.toEqual(TypeTags.RangeError)
    expect(RangeError.toString()).not.toEqual(TypeTags.RangeError)
  })
})
