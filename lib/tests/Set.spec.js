import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

let set = new Set()
let setIterator = new Set().values()

describe('Set', () => {
  it('Should be defined', () => {
    expect(Set).toBeDefined() // static object
    expect(TypeTags.Set).toBeDefined()
  })

  it('Should match the type tag of an "Set" data type', () => {
    const tag = TypeTags.get(set)

    expect(tag).toEqual(TypeTags.Set)
    expect(toString(set)).toEqual(TypeTags.Set)
    expect(set.toString()).toEqual(TypeTags.Set) // default
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = TypeTags.get(set.toFixed)
    expect(tag).not.toEqual(TypeTags.Set)
    expect(set.toString()).toEqual(TypeTags.Set) // default
    expect(toString(set.toExponential)).not.toEqual(TypeTags.Set)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isSet).toBeDefined()
    expect(TypeTags.isSet(set)).toBeTrue()
    expect(TypeTags.isSet(toString(set))).toBeTrue()
    expect(TypeTags.isSet(TypeTags.Set)).toBeTrue()
  })
})

describe('Set Iterator', () => {
  it('Should be defined', () => {
    expect(TypeTags['Set.Iterator']).toBeDefined()
  })

  it('Should match the type tag of an "Set Iterator" data type', () => {
    const tag = TypeTags.get(setIterator)
    expect(tag).toEqual(TypeTags['Set.Iterator'])
    expect(toString(setIterator)).toEqual(TypeTags['Set.Iterator'])
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isSetIterator).toBeDefined()
    expect(TypeTags.isSetIterator(set.values())).toBeTrue()
    expect(TypeTags.isSetIterator(toString(set.values()))).toBeTrue()
    expect(TypeTags.isSetIterator(TypeTags['Set.Iterator'])).toBeTrue()
  })
})
