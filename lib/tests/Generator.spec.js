import getTag from '../get-tag'
import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

const generator = (function* () {})()

describe('Generator', () => {
  it('Should not be defined', () => {
    // syntatic
    expect(typeof Generator).toEqual('undefined')
    expect(TypeTags.Generator).toBeDefined()
  })

  it('Should match the type tag of a "Generator" data type', () => {
    const tag = getTag(generator)
    expect(tag).toEqual(TypeTags.Generator)
    expect(toString(generator)).toEqual(TypeTags.Generator)
    expect(generator.toString()).toEqual(TypeTags.Generator) // default
  })
})
