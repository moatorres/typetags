import getTag from '../get-tag'
import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

const errInst = URIError()
const errCons = new URIError()

describe('URIError', () => {
  it('Should be defined', () => {
    expect(URIError).toBeDefined()
    expect(TypeTags.URIError).toBeDefined()
  })

  it('Should match the type tag of a "URIError" data type', () => {
    const tag = getTag(errCons)
    expect(tag).toEqual(TypeTags.URIError)
    expect(toString(errCons)).toEqual(TypeTags.URIError)
    expect(errCons.toString()).not.toEqual(TypeTags.URIError)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(URIError)
    expect(tag).not.toEqual(TypeTags.URIError)
    expect(toString(URIError)).not.toEqual(TypeTags.URIError)
    expect(URIError.toString()).not.toEqual(TypeTags.URIError)
  })
})
