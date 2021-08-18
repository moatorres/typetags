import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const error = new Error()

describe('Error', () => {
  it('Should be defined', () => {
    expect(Error).toBeDefined()
    expect(TypeTags.Error).toBeDefined()
  })

  it('Should match the type tag of a "Error" data type', () => {
    const tag = TypeTags.get(error)
    expect(tag).toEqual(TypeTags.Error)
    expect(toString(error)).toEqual(TypeTags.Error)
    expect(error.toString()).not.toEqual(TypeTags.Error)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(Error)
    expect(tag).not.toEqual(TypeTags.Error)
    expect(toString(Error)).not.toEqual(TypeTags.Error)
    expect(Error.toString()).not.toEqual(TypeTags.Error)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isError).toBeDefined()
    expect(TypeTags.isError(error)).toBeTrue()
    expect(TypeTags.isError(toString(error))).toBeTrue()
    expect(TypeTags.isError(TypeTags.Error)).toBeTrue()
  })
})
