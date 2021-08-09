import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

let weakref = new WeakRef({}) // constructor args

describe('WeakRef', () => {
  it('Should be defined', () => {
    expect(WeakRef).toBeDefined() // static object
    expect(TypeTags.WeakRef).toBeDefined()
  })

  it('Should match the type tag of an "WeakRef" data type', () => {
    const tag = getTag(weakref)

    expect(tag).toEqual(TypeTags.WeakRef)
    expect(toString(weakref)).toEqual(TypeTags.WeakRef)
    expect(weakref.toString()).toEqual(TypeTags.WeakRef) // default
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = getTag(weakref.toFixed)
    expect(tag).not.toEqual(TypeTags.WeakRef)
    expect(weakref.toString()).toEqual(TypeTags.WeakRef) // default
    expect(toString(weakref.toExponential)).not.toEqual(TypeTags.WeakRef)
  })
})
