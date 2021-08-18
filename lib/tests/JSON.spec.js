import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

let json = JSON

describe('JSON', () => {
  it('Should be defined', () => {
    expect(JSON).toBeDefined() // static object
    expect(TypeTags.JSON).toBeDefined()
  })

  it('Should match the type tag of an "JSON" data type', () => {
    const tag = TypeTags.get(json)

    expect(json).toEqual(JSON)
    expect(tag).toEqual(TypeTags.JSON)
    expect(toString(json)).toEqual(TypeTags.JSON)
    expect(json.toString()).toEqual(TypeTags.JSON) // default
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = TypeTags.get(json.stringify)
    expect(tag).not.toEqual(TypeTags.JSON)
    expect(json.toString()).toEqual(TypeTags.JSON) // default
    expect(toString(json.parse)).not.toEqual(TypeTags.JSON)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isJSON).toBeDefined()
    expect(TypeTags.isJSON(json)).toBeTrue()
    expect(TypeTags.isJSON(toString(json))).toBeTrue()
    expect(TypeTags.isJSON(TypeTags.JSON)).toBeTrue()
  })
})
