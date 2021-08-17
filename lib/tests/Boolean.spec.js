import getTag from '../get-tag'
import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

const boolean = true
const boolFromInst = Boolean(0)
const boolFromConst = new Boolean(false)

describe('Boolean', () => {
  it('Should be defined', () => {
    expect(Boolean).toBeDefined()
    expect(TypeTags.Boolean).toBeDefined()
  })

  it('Should match the typeof a "boolean" data type', () => {
    expect(typeof boolean).toEqual('boolean')
    expect(typeof boolFromInst).toEqual('boolean')
    expect(typeof boolFromConst).toEqual('object') // special case
  })

  it('Should match the type tag of an "Boolean" data type', () => {
    const tag = getTag(boolFromConst)
    expect(tag).toEqual(TypeTags.Boolean)
    expect(toString(boolFromConst)).toEqual(TypeTags.Boolean)
    expect(boolFromConst.toString()).not.toEqual(TypeTags.Boolean)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(Boolean)
    expect(tag).not.toEqual(TypeTags.Boolean)
    expect(toString(Boolean)).not.toEqual(TypeTags.Boolean)
    expect(Boolean.toString()).not.toEqual(TypeTags.Boolean)
  })
})
