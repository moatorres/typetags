import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

describe('Arguments', () => {
  it('Should be defined', () => {
    expect(arguments).toBeDefined()
    expect(TypeTags.Arguments).toBeDefined()
  })

  it('Should match the type tag of an "Arguments" data type', () => {
    const tag = getTag(arguments)

    expect(tag).toEqual(TypeTags.Arguments)
    expect(toString(arguments)).toEqual(TypeTags.Arguments)
    expect(arguments.toString()).toEqual(TypeTags.Arguments)
  })

  it('Should NOT match the type tag of an arguments array', () => {
    let spread
    ;(function getArgs(...args) {
      spread = args
    })()

    const tag = getTag(spread)

    expect(tag).not.toEqual(TypeTags.Arguments)
    expect(toString(spread)).not.toEqual(TypeTags.Arguments)
    expect(spread.toString()).not.toEqual(TypeTags.Arguments)
  })
})
