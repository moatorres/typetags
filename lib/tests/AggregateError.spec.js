import { TypeTags } from '../type-tags'
import { toString } from '../typetag/utils'
import getTag from '../get-tag'

const error = new AggregateError([])

describe('AggregateError', () => {
  it('Should be defined', () => {
    expect(TypeTags.AggregateError).toBeDefined()
  })

  it('Should match the type tag of an "AggregateError" data type', () => {
    const tag = getTag(error)

    expect(tag).toEqual(TypeTags.AggregateError)
    expect(toString(error)).toEqual(TypeTags.AggregateError)
    expect(error.toString()).not.toEqual(TypeTags.AggregateError)
  })
})
