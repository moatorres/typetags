import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

let nu = null // primitive

describe('Null', () => {
  it('Should be defined', () => {
    expect(null).toBeDefined() // primitive
    expect(typeof null).toEqual('object') // object
    expect(TypeTags.Null).toBeDefined()
  })

  it('Should match the type tag of an "Null" data type', () => {
    const tag = TypeTags.get(nu)

    expect(tag).toEqual(TypeTags.Null)
    expect(toString(nu)).toEqual(TypeTags.Null)
    expect(() => nu.toString()).toThrow(
      TypeError("Cannot read property 'toString' of null")
    ) // special case
  })
})
