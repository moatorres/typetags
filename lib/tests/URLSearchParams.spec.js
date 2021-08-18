import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const url = new URLSearchParams()

describe('URLSearchParams', () => {
  it('Should be defined', () => {
    expect(URLSearchParams).toBeDefined()
    expect(TypeTags.URLSearchParams).toBeDefined()
  })

  it('Should match the type tag of a "URLSearchParams" data type', () => {
    const tag = TypeTags.get(url)
    expect(tag).toEqual(TypeTags.URLSearchParams)
    expect(toString(url)).toEqual(TypeTags.URLSearchParams)
    expect(url.toString()).not.toEqual(TypeTags.URLSearchParams)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(URLSearchParams)
    expect(tag).not.toEqual(TypeTags.URLSearchParams)
    expect(toString(URLSearchParams)).not.toEqual(TypeTags.URLSearchParams)
    expect(URLSearchParams.toString()).not.toEqual(TypeTags.URLSearchParams)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isURLSearchParams).toBeDefined()
    expect(TypeTags.isURLSearchParams(url)).toBeTrue()
    expect(TypeTags.isURLSearchParams(toString(url))).toBeTrue()
    expect(TypeTags.isURLSearchParams(TypeTags.URLSearchParams)).toBeTrue()
  })
})
