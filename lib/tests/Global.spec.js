import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

describe('Global', () => {
  it('Should be defined', () => {
    expect(TypeTags.Global).toBeDefined()
  })

  it('Should match the type tag of a "Global" data type', () => {
    expect(toString(global)).toEqual(TypeTags.Object)
  })

  xit('Should have a predicate', () => {
    expect(TypeTags.isGlobal).toBeDefined()
    expect(TypeTags.isGlobal(global)).toBeTrue()
    expect(TypeTags.isGlobal(toString(global))).toBeTrue()
    expect(TypeTags.isGlobal(TypeTags.Global)).toBeTrue()
  })
})
