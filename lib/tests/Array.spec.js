import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const arrayFromLiteral = []
const arrayFromConstructor = new Array()
const arrayIterator = [][Symbol.iterator]()

describe('Array', () => {
  it('Should be defined', () => {
    expect(Array).toBeDefined()
    expect(TypeTags.Array).toBeDefined()
  })

  it('Should match the type tag of an "Array" data type', () => {
    const tagOne = TypeTags.get(arrayFromConstructor)
    const tagTwo = TypeTags.get(arrayFromLiteral)

    expect(tagOne).toEqual(tagTwo)
    expect(tagOne).toEqual(TypeTags.Array)
    expect(tagTwo).toEqual(TypeTags.Array)
    expect(toString(arrayFromLiteral)).toEqual(TypeTags.Array)
    expect(toString(arrayFromConstructor)).toEqual(TypeTags.Array)
    expect(arrayFromLiteral.toString()).not.toEqual(TypeTags.Array)
    expect(arrayFromConstructor.toString()).not.toEqual(TypeTags.Array)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(Array)
    expect(tag).not.toEqual(TypeTags.Array)
    expect(toString(Array)).not.toEqual(TypeTags.Array)
    expect(Array.toString()).not.toEqual(TypeTags.Array)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isArray).toBeDefined()
    expect(TypeTags.isArray([])).toBeTrue()
    expect(TypeTags.isArray(toString([]))).toBeTrue()
    expect(TypeTags.isArray(TypeTags.Array)).toBeTrue()
  })
})

describe('Array Iterator', () => {
  it('Should be defined', () => {
    expect(TypeTags['Array.Iterator']).toBeDefined()
  })

  it('Should match the type tag of an "Array Iterator" data type', () => {
    const tag = TypeTags.get(arrayIterator)
    expect(tag).toEqual(TypeTags['Array.Iterator'])
    expect(toString(arrayIterator)).toEqual(TypeTags['Array.Iterator'])
  })

  it('Should have a predicate', () => {
    const iterator = [][Symbol.iterator]()
    expect(TypeTags.isArrayIterator).toBeDefined()
    expect(TypeTags.isArrayIterator(iterator)).toBeTrue()
    expect(TypeTags.isArrayIterator(toString(iterator))).toBeTrue()
    expect(TypeTags.isArrayIterator(TypeTags['Array.Iterator'])).toBeTrue()
  })
})
