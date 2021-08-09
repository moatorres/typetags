import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

const generatorFunction = function* () {}

describe('GeneratorFunction', () => {
  it('Should not be defined', () => {
    // syntatic
    expect(typeof GeneratorFunction).toEqual('undefined')
    expect(TypeTags.GeneratorFunction).toBeDefined()
  })

  it('Should match the type tag of a "GeneratorFunction" data type', () => {
    const tag = getTag(generatorFunction)
    expect(tag).toEqual(TypeTags.GeneratorFunction)
    expect(toString(generatorFunction)).toEqual(TypeTags.GeneratorFunction)
    expect(generatorFunction.toString()).not.toEqual(TypeTags.GeneratorFunction) // custom
  })
})
