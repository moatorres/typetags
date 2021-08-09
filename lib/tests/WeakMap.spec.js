import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

let weakmap = new WeakMap()

describe('WeakMap', () => {
  it('Should be defined', () => {
    expect(WeakMap).toBeDefined() // static object
    expect(TypeTags.WeakMap).toBeDefined()
  })

  it('Should match the type tag of an "WeakMap" data type', () => {
    const tag = getTag(weakmap)

    expect(tag).toEqual(TypeTags.WeakMap)
    expect(toString(weakmap)).toEqual(TypeTags.WeakMap)
    expect(weakmap.toString()).toEqual(TypeTags.WeakMap) // default
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = getTag(weakmap.toFixed)
    expect(tag).not.toEqual(TypeTags.WeakMap)
    expect(weakmap.toString()).toEqual(TypeTags.WeakMap) // default
    expect(toString(weakmap.toExponential)).not.toEqual(TypeTags.WeakMap)
  })
})
