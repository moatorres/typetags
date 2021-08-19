import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

let weakref = new WeakRef({}) // constructor args

describe('WeakRef', () => {
  it('Should be defined', () => {
    expect(WeakRef).toBeDefined() // static object
    expect(TypeTags.WeakRef).toBeDefined()
  })

  it('Should match the type tag of an "WeakRef" data type', () => {
    const tag = TypeTags.get(weakref)

    expect(tag).toEqual(TypeTags.WeakRef)
    expect(toString(weakref)).toEqual(TypeTags.WeakRef)
    expect(weakref.toString()).toEqual(TypeTags.WeakRef) // default
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = TypeTags.get(weakref.toFixed)
    expect(tag).not.toEqual(TypeTags.WeakRef)
    expect(weakref.toString()).toEqual(TypeTags.WeakRef) // default
    expect(toString(weakref.toExponential)).not.toEqual(TypeTags.WeakRef)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isWeakRef).toBeDefined()
    expect(TypeTags.isWeakRef(weakref)).toBeTrue()
    expect(TypeTags.isWeakRef(toString(weakref))).toBeTrue()
    expect(TypeTags.isWeakRef(TypeTags.WeakRef)).toBeTrue()
  })
})
