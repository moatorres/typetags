import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

const asyncGen = (async function* () {})()

describe('AsyncGenerator', () => {
  it('Should not be defined', () => {
    // syntatic
    expect(typeof AsyncGenerator).toEqual('undefined')
    expect(TypeTags.AsyncGenerator).toBeDefined()
  })

  it('Should match the type tag of a "AsyncGenerator" data type', () => {
    const tag = getTag(asyncGen)
    expect(tag).toEqual(TypeTags.AsyncGenerator)
    expect(toString(asyncGen)).toEqual(TypeTags.AsyncGenerator)
    expect(asyncGen.toString()).toEqual(TypeTags.AsyncGenerator) // default
  })
})
