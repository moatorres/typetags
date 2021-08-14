import getTag from '../get-tag'
import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

const errInst = ReferenceError()
const errCons = new ReferenceError()

describe('ReferenceError', () => {
  it('Should be defined', () => {
    expect(ReferenceError).toBeDefined()
    expect(TypeTags.ReferenceError).toBeDefined()
  })

  it('Should match the type tag of a "ReferenceError" data type', () => {
    const tag = getTag(errCons)
    expect(tag).toEqual(TypeTags.ReferenceError)
    expect(toString(errCons)).toEqual(TypeTags.ReferenceError)
    expect(errCons.toString()).not.toEqual(TypeTags.ReferenceError)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(ReferenceError)
    expect(tag).not.toEqual(TypeTags.ReferenceError)
    expect(toString(ReferenceError)).not.toEqual(TypeTags.ReferenceError)
    expect(ReferenceError.toString()).not.toEqual(TypeTags.ReferenceError)
  })
})
