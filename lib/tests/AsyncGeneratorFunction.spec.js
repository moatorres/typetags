import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const asyncGenFn = async function* () {}

describe('AsyncGeneratorFunction', () => {
  it('Should not be defined', () => {
    // syntatic
    expect(typeof AsyncGeneratorFunction).toEqual('undefined')
    expect(TypeTags.AsyncGeneratorFunction).toBeDefined()
  })

  it('Should match the type tag of a "AsyncGeneratorFunction" data type', () => {
    const tag = TypeTags.get(asyncGenFn)
    expect(tag).toEqual(TypeTags.AsyncGeneratorFunction)
    expect(toString(asyncGenFn)).toEqual(TypeTags.AsyncGeneratorFunction)
    expect(asyncGenFn.toString()).not.toEqual(TypeTags.AsyncGeneratorFunction) // custom
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isAsyncGeneratorFunction).toBeDefined()
    expect(TypeTags.isAsyncGeneratorFunction(asyncGenFn)).toBeTrue()
    expect(TypeTags.isAsyncGeneratorFunction(toString(asyncGenFn))).toBeTrue()
    expect(
      TypeTags.isAsyncGeneratorFunction(TypeTags.AsyncGeneratorFunction)
    ).toBeTrue()
  })
})
