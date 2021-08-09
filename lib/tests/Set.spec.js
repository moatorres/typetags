import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

let set = new Set()
let setIterator = new Set().values()

describe('Set', () => {
  it('Should be defined', () => {
    expect(Set).toBeDefined() // static object
    expect(TypeTags.Set).toBeDefined()
  })

  it('Should match the type tag of an "Set" data type', () => {
    const tag = getTag(set)

    expect(tag).toEqual(TypeTags.Set)
    expect(toString(set)).toEqual(TypeTags.Set)
    expect(set.toString()).toEqual(TypeTags.Set) // default
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = getTag(set.toFixed)
    expect(tag).not.toEqual(TypeTags.Set)
    expect(set.toString()).toEqual(TypeTags.Set) // default
    expect(toString(set.toExponential)).not.toEqual(TypeTags.Set)
  })
})

describe('Set Iterator', () => {
  it('Should be defined', () => {
    expect(TypeTags['Set.Iterator']).toBeDefined()
  })

  it('Should match the type tag of an "Set Iterator" data type', () => {
    const tag = getTag(setIterator)
    expect(tag).toEqual(TypeTags['Set.Iterator'])
    expect(toString(setIterator)).toEqual(TypeTags['Set.Iterator'])
  })
})
