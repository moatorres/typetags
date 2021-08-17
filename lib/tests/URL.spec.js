import getTag from '../get-tag'
import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

const url = new URL('https://mokatecnologia.com') // constructor args

describe('URL', () => {
  it('Should be defined', () => {
    expect(URL).toBeDefined()
    expect(TypeTags.URL).toBeDefined()
  })

  it('Should match the type tag of a "URL" data type', () => {
    const tag = getTag(url)
    expect(tag).toEqual(TypeTags.URL)
    expect(toString(url)).toEqual(TypeTags.URL)
    expect(url.toString()).not.toEqual(TypeTags.URL)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(URL)
    expect(tag).not.toEqual(TypeTags.URL)
    expect(toString(URL)).not.toEqual(TypeTags.URL)
    expect(URL.toString()).not.toEqual(TypeTags.URL)
  })
})
