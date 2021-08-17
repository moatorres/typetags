import getTag from '../get-tag'
import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

let inf = 1 / 0

describe('Infinity', () => {
  it('Should be defined', () => {
    expect(Infinity).toBeDefined() // static object
    expect(TypeTags.Infinity).toBeDefined()
  })

  it('Should match the type tag of an "Infinity" data type', () => {
    const tag = getTag(inf)

    expect(inf).toEqual(Infinity)
    expect(tag).toEqual(TypeTags.Infinity)
    expect(toString(inf)).toEqual(TypeTags.Infinity)
    expect(inf.toString()).not.toEqual(TypeTags.Infinity) // custom
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = getTag(inf.toFixed)
    expect(tag).not.toEqual(TypeTags.Infinity)
    expect(inf.toString()).not.toEqual(TypeTags.Infinity)
    expect(toString(inf.toExponential)).not.toEqual(TypeTags.Infinity)
  })
})
