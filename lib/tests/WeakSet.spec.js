import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

let weakset = new WeakSet()

describe('WeakSet', () => {
  it('Should be defined', () => {
    expect(WeakSet).toBeDefined() // static object
    expect(TypeTags.WeakSet).toBeDefined()
  })

  it('Should match the type tag of an "WeakSet" data type', () => {
    const tag = TypeTags.get(weakset)

    expect(tag).toEqual(TypeTags.WeakSet)
    expect(toString(weakset)).toEqual(TypeTags.WeakSet)
    expect(weakset.toString()).toEqual(TypeTags.WeakSet) // default
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = TypeTags.get(weakset.toFixed)
    expect(tag).not.toEqual(TypeTags.WeakSet)
    expect(weakset.toString()).toEqual(TypeTags.WeakSet) // default
    expect(toString(weakset.toExponential)).not.toEqual(TypeTags.WeakSet)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isWeakSet).toBeDefined()
    expect(TypeTags.isWeakSet(weakset)).toBeTrue()
    expect(TypeTags.isWeakSet(toString(weakset))).toBeTrue()
    expect(TypeTags.isWeakSet(TypeTags.WeakSet)).toBeTrue()
  })
})
