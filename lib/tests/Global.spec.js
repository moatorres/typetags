import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

describe('Global', () => {
  it('Should be defined', () => {
    expect(TypeTags.Global).toBeDefined()
  })

  it('Should match the type tag of a "Global" data type', () => {
    expect(toString(global)).toEqual(TypeTags.Object)
  })
})
