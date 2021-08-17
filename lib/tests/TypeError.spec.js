import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

const errInst = TypeError()
const errCons = new TypeError()

describe('TypeError', () => {
  it('Should be defined', () => {
    expect(TypeError).toBeDefined()
    expect(TypeTags.TypeError).toBeDefined()
  })

  it('Should match the type tag of a "TypeError" data type', () => {
    const tag = TypeTags.get(errCons)
    expect(tag).toEqual(TypeTags.TypeError)
    expect(toString(errCons)).toEqual(TypeTags.TypeError)
    expect(errCons.toString()).not.toEqual(TypeTags.TypeError)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(TypeError)
    expect(tag).not.toEqual(TypeTags.TypeError)
    expect(toString(TypeError)).not.toEqual(TypeTags.TypeError)
    expect(TypeError.toString()).not.toEqual(TypeTags.TypeError)
  })
})
