import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const errInst = ReferenceError()
const errCons = new ReferenceError()

describe('ReferenceError', () => {
  it('Should be defined', () => {
    expect(ReferenceError).toBeDefined()
    expect(TypeTags.ReferenceError).toBeDefined()
  })

  it('Should match the type tag of a "ReferenceError" data type', () => {
    const tag = TypeTags.get(errCons)
    expect(tag).toEqual(TypeTags.ReferenceError)
    expect(toString(errCons)).toEqual(TypeTags.ReferenceError)
    expect(errCons.toString()).not.toEqual(TypeTags.ReferenceError)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(ReferenceError)
    expect(tag).not.toEqual(TypeTags.ReferenceError)
    expect(toString(ReferenceError)).not.toEqual(TypeTags.ReferenceError)
    expect(ReferenceError.toString()).not.toEqual(TypeTags.ReferenceError)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isReferenceError).toBeDefined()
    expect(TypeTags.isReferenceError(errCons)).toBeTrue()
    expect(TypeTags.isReferenceError(toString(errCons))).toBeTrue()
    expect(TypeTags.isReferenceError(TypeTags.ReferenceError)).toBeTrue()
  })
})
