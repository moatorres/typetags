import { TypeTags } from '../type-tags'
import { toString } from '../typetag/utils'
import getTag from '../get-tag'

describe('Arguments', () => {
  it('Should be defined', () => {
    expect(TypeTags.Arguments).toBeDefined()
  })

  it('Should match the type tag of an "Arguments" data type', () => {
    const tag = getTag(arguments)

    expect(tag).toEqual(TypeTags.Arguments)
    expect(arguments.toString()).toEqual(TypeTags.Arguments)
    expect(toString(arguments)).toEqual(TypeTags.Arguments)
  })
})
