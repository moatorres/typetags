import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const reginst = RegExp()
const regex = new RegExp('') // constructor args

describe('RegExp', () => {
  it('Should be defined', () => {
    expect(RegExp).toBeDefined()
    expect(TypeTags.RegExp).toBeDefined()
  })

  it('Should match the type tag of a "RegExp" data type', () => {
    const tag = TypeTags.get(regex)
    expect(tag).toEqual(TypeTags.RegExp)
    expect(toString(regex)).toEqual(TypeTags.RegExp)
    expect(regex.toString()).not.toEqual(TypeTags.RegExp)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(RegExp)
    expect(tag).not.toEqual(TypeTags.RegExp)
    expect(toString(RegExp)).not.toEqual(TypeTags.RegExp)
    expect(RegExp.toString()).not.toEqual(TypeTags.RegExp)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isRegExp).toBeDefined()
    expect(TypeTags.isRegExp(regex)).toBeTrue()
    expect(TypeTags.isRegExp(toString(regex))).toBeTrue()
    expect(TypeTags.isRegExp(TypeTags.RegExp)).toBeTrue()
  })
})
