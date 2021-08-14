import getTag from '../get-tag'
import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

let json = JSON

describe('JSON', () => {
  it('Should be defined', () => {
    expect(JSON).toBeDefined() // static object
    expect(TypeTags.JSON).toBeDefined()
  })

  it('Should match the type tag of an "JSON" data type', () => {
    const tag = getTag(json)

    expect(json).toEqual(JSON)
    expect(tag).toEqual(TypeTags.JSON)
    expect(toString(json)).toEqual(TypeTags.JSON)
    expect(json.toString()).toEqual(TypeTags.JSON) // default
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = getTag(json.stringify)
    expect(tag).not.toEqual(TypeTags.JSON)
    expect(json.toString()).toEqual(TypeTags.JSON) // default
    expect(toString(json.parse)).not.toEqual(TypeTags.JSON)
  })
})
