import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

describe('GlobalThis', () => {
  it('Should be defined', () => {
    expect(TypeTags.GlobalThis).toBeDefined()
  })

  it('Should match the type tag of a "GlobalThis" data type', () => {
    expect(toString(globalThis)).toEqual(TypeTags.Object)
  })

  xit('Should have a predicate', () => {
    expect(TypeTags.isGlobalThis).toBeDefined()
    expect(TypeTags.isGlobalThis(globalThis)).toBeTrue()
    expect(TypeTags.isGlobalThis(toString(globalThis))).toBeTrue()
    expect(TypeTags.isGlobalThis(TypeTags.GlobalThis)).toBeTrue()
  })
})
