import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

const error = new AggregateError([])

describe('TypeTags.AggregateError', () => {
  it('Should be defined', () => {
    expect(AggregateError).toBeDefined()
    expect(TypeTags.AggregateError).toBeDefined()
  })

  it('Should match the type tag of an "AggregateError" data type', () => {
    const tag = getTag(error)

    expect(tag).toEqual(TypeTags.AggregateError)
    expect(toString(error)).toEqual(TypeTags.AggregateError)
    expect(error.toString()).not.toEqual(TypeTags.AggregateError)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(AggregateError)
    expect(tag).not.toEqual(TypeTags.AggregateError)
    expect(toString(AggregateError)).not.toEqual(TypeTags.AggregateError)
    expect(AggregateError.toString()).not.toEqual(TypeTags.AggregateError)
  })
})
