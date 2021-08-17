import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

describe('Arguments', () => {
  it('Should be defined', () => {
    expect(arguments).toBeDefined()
    expect(TypeTags.Arguments).toBeDefined()
  })

  it('Should match the type tag of an "Arguments" data type', () => {
    const tag = TypeTags.get(arguments)

    expect(tag).toEqual(TypeTags.Arguments)
    expect(toString(arguments)).toEqual(TypeTags.Arguments)
    expect(arguments.toString()).toEqual(TypeTags.Arguments)
  })

  it('Should NOT match the type tag of an arguments array', () => {
    let spread
    ;(function getArgs(...args) {
      spread = args
    })()

    const tag = TypeTags.get(spread)

    expect(tag).not.toEqual(TypeTags.Arguments)
    expect(toString(spread)).not.toEqual(TypeTags.Arguments)
    expect(spread.toString()).not.toEqual(TypeTags.Arguments)
  })
})
