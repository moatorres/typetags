import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

let weakset = new WeakSet()

describe('WeakSet', () => {
  it('Should be defined', () => {
    expect(WeakSet).toBeDefined() // static object
    expect(TypeTags.WeakSet).toBeDefined()
  })

  it('Should match the type tag of an "WeakSet" data type', () => {
    const tag = getTag(weakset)

    expect(tag).toEqual(TypeTags.WeakSet)
    expect(toString(weakset)).toEqual(TypeTags.WeakSet)
    expect(weakset.toString()).toEqual(TypeTags.WeakSet) // default
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = getTag(weakset.toFixed)
    expect(tag).not.toEqual(TypeTags.WeakSet)
    expect(weakset.toString()).toEqual(TypeTags.WeakSet) // default
    expect(toString(weakset.toExponential)).not.toEqual(TypeTags.WeakSet)
  })
})