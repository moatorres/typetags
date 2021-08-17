import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

const undef = undefined

describe('Undefined', () => {
  it('Should be defined', () => {
    expect(undefined).not.toBeDefined() // syntatic
    expect(typeof undef).toEqual('undefined')
    expect(TypeTags.Undefined).toBeDefined()
  })

  it('Should match the type tag of a "Undefined" data type', () => {
    const tag = TypeTags.get(undef)
    expect(tag).toEqual(TypeTags.Undefined)
    expect(toString(undef)).toEqual(TypeTags.Undefined)
    expect(() => undef.toString()).toThrow(
      TypeError("Cannot read property 'toString' of undefined")
    )
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(undef)
    expect(tag).toEqual(TypeTags.Undefined) // default
    expect(toString(undef)).toEqual(TypeTags.Undefined)
    expect(() => undefined.toString()).toThrow(
      TypeError("Cannot read property 'toString' of undefined")
    )
  })
})
