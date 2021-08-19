import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const generatorFunction = function* () {}

describe('GeneratorFunction', () => {
  it('Should not be defined', () => {
    // syntatic
    expect(typeof GeneratorFunction).toEqual('undefined')
    expect(TypeTags.GeneratorFunction).toBeDefined()
  })

  it('Should match the type tag of a "GeneratorFunction" data type', () => {
    const tag = TypeTags.get(generatorFunction)
    expect(tag).toEqual(TypeTags.GeneratorFunction)
    expect(toString(generatorFunction)).toEqual(TypeTags.GeneratorFunction)
    expect(generatorFunction.toString()).not.toEqual(TypeTags.GeneratorFunction) // custom
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isGeneratorFunction).toBeDefined()
    expect(TypeTags.isGeneratorFunction(generatorFunction)).toBeTrue()
    expect(TypeTags.isGeneratorFunction(toString(generatorFunction))).toBeTrue()
    expect(TypeTags.isGeneratorFunction(TypeTags.GeneratorFunction)).toBeTrue()
  })
})
