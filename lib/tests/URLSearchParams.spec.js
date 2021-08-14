import getTag from '../get-tag'
import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

const url = new URLSearchParams()

describe('URLSearchParams', () => {
  it('Should be defined', () => {
    expect(URLSearchParams).toBeDefined()
    expect(TypeTags.URLSearchParams).toBeDefined()
  })

  it('Should match the type tag of a "URLSearchParams" data type', () => {
    const tag = getTag(url)
    expect(tag).toEqual(TypeTags.URLSearchParams)
    expect(toString(url)).toEqual(TypeTags.URLSearchParams)
    expect(url.toString()).not.toEqual(TypeTags.URLSearchParams)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(URLSearchParams)
    expect(tag).not.toEqual(TypeTags.URLSearchParams)
    expect(toString(URLSearchParams)).not.toEqual(TypeTags.URLSearchParams)
    expect(URLSearchParams.toString()).not.toEqual(TypeTags.URLSearchParams)
  })
})
