import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

const final = new FinalizationRegistry(() => {})

describe('FinalizationRegistry', () => {
  it('Should be defined', () => {
    expect(FinalizationRegistry).toBeDefined()
    expect(TypeTags.FinalizationRegistry).toBeDefined()
  })

  it('Should match the type tag of a "FinalizationRegistry" data type', () => {
    const tag = getTag(final)
    expect(tag).toEqual(TypeTags.FinalizationRegistry)
    expect(toString(final)).toEqual(TypeTags.FinalizationRegistry)
    expect(final.toString()).toEqual(TypeTags.FinalizationRegistry) // default
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(FinalizationRegistry)
    expect(tag).not.toEqual(TypeTags.FinalizationRegistry)
    expect(toString(FinalizationRegistry)).not.toEqual(
      TypeTags.FinalizationRegistry
    )
    expect(FinalizationRegistry.toString()).not.toEqual(
      TypeTags.FinalizationRegistry
    )
  })
})
