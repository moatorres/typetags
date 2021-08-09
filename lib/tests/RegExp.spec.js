import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

const reginst = RegExp()
const regex = new RegExp('') // constructor args

describe('RegExp', () => {
  it('Should be defined', () => {
    expect(RegExp).toBeDefined()
    expect(TypeTags.RegExp).toBeDefined()
  })

  it('Should match the type tag of a "RegExp" data type', () => {
    const tag = getTag(regex)
    expect(tag).toEqual(TypeTags.RegExp)
    expect(toString(regex)).toEqual(TypeTags.RegExp)
    expect(regex.toString()).not.toEqual(TypeTags.RegExp)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(RegExp)
    expect(tag).not.toEqual(TypeTags.RegExp)
    expect(toString(RegExp)).not.toEqual(TypeTags.RegExp)
    expect(RegExp.toString()).not.toEqual(TypeTags.RegExp)
  })
})
