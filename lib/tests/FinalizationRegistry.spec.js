import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const final = new FinalizationRegistry(() => {})

describe('FinalizationRegistry', () => {
  it('Should be defined', () => {
    expect(FinalizationRegistry).toBeDefined()
    expect(TypeTags.FinalizationRegistry).toBeDefined()
  })

  it('Should match the type tag of a "FinalizationRegistry" data type', () => {
    const tag = TypeTags.get(final)
    expect(tag).toEqual(TypeTags.FinalizationRegistry)
    expect(toString(final)).toEqual(TypeTags.FinalizationRegistry)
    expect(final.toString()).toEqual(TypeTags.FinalizationRegistry) // default
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(FinalizationRegistry)
    expect(tag).not.toEqual(TypeTags.FinalizationRegistry)
    expect(toString(FinalizationRegistry)).not.toEqual(
      TypeTags.FinalizationRegistry
    )
    expect(FinalizationRegistry.toString()).not.toEqual(
      TypeTags.FinalizationRegistry
    )
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isFinalizationRegistry).toBeDefined()
    expect(TypeTags.isFinalizationRegistry(final)).toBeTrue()
    expect(TypeTags.isFinalizationRegistry(toString(final))).toBeTrue()
    expect(
      TypeTags.isFinalizationRegistry(TypeTags.FinalizationRegistry)
    ).toBeTrue()
  })
})
