import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const generator = (function* () {})()

describe('Generator', () => {
  it('Should not be defined', () => {
    // syntatic
    expect(typeof Generator).toEqual('undefined')
    expect(TypeTags.Generator).toBeDefined()
  })

  it('Should match the type tag of a "Generator" data type', () => {
    const tag = TypeTags.get(generator)
    expect(tag).toEqual(TypeTags.Generator)
    expect(toString(generator)).toEqual(TypeTags.Generator)
    expect(generator.toString()).toEqual(TypeTags.Generator) // default
  })
})
