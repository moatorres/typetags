import getTag from '../get-tag'
import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

const abort = new AbortController()

describe('AbortController', () => {
  it('Should be defined', () => {
    expect(AbortController).toBeDefined()
    expect(TypeTags.AbortController).toBeDefined()
  })

  it('Should match the type tag of an "AbortController" data type', () => {
    const tag = getTag(abort)

    expect(tag).toEqual(TypeTags.AbortController)
    expect(abort.toString()).toEqual(TypeTags.AbortController)
    expect(toString(abort)).toEqual(TypeTags.AbortController)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(AbortController)
    expect(tag).not.toEqual(TypeTags.AbortController)
    expect(toString(AbortController)).not.toEqual(TypeTags.AbortController)
    expect(AbortController.toString()).not.toEqual(TypeTags.AbortController)
  })
})

describe('AbortSignal', () => {
  it('Should be defined', () => {
    expect(TypeTags.AbortSignal).toBeDefined()
  })

  it('Should match the type tag of an "AbortSignal" data type', () => {
    const tag = getTag(abort.signal)

    expect(tag).toEqual(TypeTags.AbortSignal)
    expect(abort.signal.toString()).toEqual(TypeTags.AbortSignal)
    expect(toString(abort)).toEqual(TypeTags.AbortController)
  })
})
