import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const asyncGen = (async function* () {})()

describe('AsyncGenerator', () => {
  it('Should not be defined', () => {
    // syntatic
    expect(typeof AsyncGenerator).toEqual('undefined')
    expect(TypeTags.AsyncGenerator).toBeDefined()
  })

  it('Should match the type tag of a "AsyncGenerator" data type', () => {
    const tag = TypeTags.get(asyncGen)
    expect(tag).toEqual(TypeTags.AsyncGenerator)
    expect(toString(asyncGen)).toEqual(TypeTags.AsyncGenerator)
    expect(asyncGen.toString()).toEqual(TypeTags.AsyncGenerator) // default
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isAsyncGenerator).toBeDefined()
    expect(TypeTags.isAsyncGenerator(asyncGen)).toBeTrue()
    expect(TypeTags.isAsyncGenerator(toString(asyncGen))).toBeTrue()
    expect(TypeTags.isAsyncGenerator(TypeTags.AsyncGenerator)).toBeTrue()
  })
})
