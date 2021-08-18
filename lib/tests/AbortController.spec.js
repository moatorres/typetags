import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const abort = typeof AbortController !== 'undefined' ? new AbortController() : undefined // prettier-ignore

const ifAvailable = abort ? describe : describe.skip

ifAvailable('AbortController', () => {
  it('Should be defined', () => {
    expect(AbortController).toBeDefined()
    expect(TypeTags.AbortController).toBeDefined()
  })

  it('Should match the type tag of an "AbortController" data type', () => {
    const tag = TypeTags.get(abort)

    expect(tag).toEqual(TypeTags.AbortController)
    expect(abort.toString()).toEqual(TypeTags.AbortController)
    expect(toString(abort)).toEqual(TypeTags.AbortController)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(AbortController)
    expect(tag).not.toEqual(TypeTags.AbortController)
    expect(toString(AbortController)).not.toEqual(TypeTags.AbortController)
    expect(AbortController.toString()).not.toEqual(TypeTags.AbortController)
  })
})

ifAvailable('AbortSignal', () => {
  it('Should be defined', () => {
    expect(TypeTags.AbortSignal).toBeDefined()
  })

  it('Should match the type tag of an "AbortSignal" data type', () => {
    const tag = TypeTags.get(abort.signal)

    expect(tag).toEqual(TypeTags.AbortSignal)
    expect(abort.signal.toString()).toEqual(TypeTags.AbortSignal)
    expect(toString(abort)).toEqual(TypeTags.AbortController)
  })
})
