import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

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
    const tag = TypeTags.get(boolFromConst)
    expect(tag).toEqual(TypeTags.Boolean)
    expect(toString(boolFromConst)).toEqual(TypeTags.Boolean)
    expect(boolFromConst.toString()).not.toEqual(TypeTags.Boolean)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(Boolean)
    expect(tag).not.toEqual(TypeTags.Boolean)
    expect(toString(Boolean)).not.toEqual(TypeTags.Boolean)
    expect(Boolean.toString()).not.toEqual(TypeTags.Boolean)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isBoolean).toBeDefined()
    expect(TypeTags.isBoolean(boolean)).toBeTrue()
    expect(TypeTags.isBoolean(toString(boolean))).toBeTrue()
    expect(TypeTags.isBoolean(TypeTags.Boolean)).toBeTrue()
  })
})
