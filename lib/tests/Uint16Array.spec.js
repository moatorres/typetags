import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const uint16array = new Uint16Array()

describe('Uint16Array', () => {
  it('Should be defined', () => {
    expect(Uint16Array).toBeDefined()
    expect(TypeTags.Uint16Array).toBeDefined()
  })

  it('Should match the type tag of a "Uint16Array" data type', () => {
    const tag = TypeTags.get(uint16array)
    expect(tag).toEqual(TypeTags.Uint16Array)
    expect(toString(uint16array)).toEqual(TypeTags.Uint16Array)
    expect(uint16array.toString()).not.toEqual(TypeTags.Uint16Array)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(Uint16Array)
    expect(tag).not.toEqual(TypeTags.Uint16Array)
    expect(toString(Uint16Array)).not.toEqual(TypeTags.Uint16Array)
    expect(Uint16Array.toString()).not.toEqual(TypeTags.Uint16Array)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isUint16Array).toBeDefined()
    expect(TypeTags.isUint16Array(uint16array)).toBeTrue()
    expect(TypeTags.isUint16Array(toString(uint16array))).toBeTrue()
    expect(TypeTags.isUint16Array(TypeTags.Uint16Array)).toBeTrue()
  })
})
