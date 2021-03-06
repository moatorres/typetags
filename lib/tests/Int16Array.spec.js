import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const int16array = new Int16Array()

describe('Int16Array', () => {
  it('Should be defined', () => {
    expect(Int16Array).toBeDefined()
    expect(TypeTags.Int16Array).toBeDefined()
  })

  it('Should match the type tag of a "Int16Array" data type', () => {
    const tag = TypeTags.get(int16array)
    expect(tag).toEqual(TypeTags.Int16Array)
    expect(toString(int16array)).toEqual(TypeTags.Int16Array)
    expect(int16array.toString()).not.toEqual(TypeTags.Int16Array) // custom
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(Int16Array)
    expect(tag).not.toEqual(TypeTags.Int16Array)
    expect(toString(Int16Array)).not.toEqual(TypeTags.Int16Array)
    expect(Int16Array.toString()).not.toEqual(TypeTags.Int16Array) // custom
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isInt16Array).toBeDefined()
    expect(TypeTags.isInt16Array(int16array)).toBeTrue()
    expect(TypeTags.isInt16Array(toString(int16array))).toBeTrue()
    expect(TypeTags.isInt16Array(TypeTags.Int16Array)).toBeTrue()
  })
})
