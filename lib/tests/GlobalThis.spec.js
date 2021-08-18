import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

describe('GlobalThis', () => {
  it('Should be defined', () => {
    expect(TypeTags.GlobalThis).toBeDefined()
  })

  it('Should match the type tag of a "GlobalThis" data type', () => {
    expect(toString(globalThis)).toEqual(TypeTags.Object)
  })
})
