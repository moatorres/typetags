import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

const bigint = BigInt(8) // not a constructor

describe('BigInt', () => {
  it('Should be defined', () => {
    expect(BigInt).toBeDefined()
    expect(TypeTags.BigInt).toBeDefined()
  })

  it('Should match the typeof a "bigint" data type', () => {
    expect(typeof bigint).toEqual('bigint')
  })

  it('Should match the type tag of an "BigInt" data type', () => {
    const tag = getTag(bigint)
    expect(tag).toEqual(TypeTags.BigInt)
    expect(toString(bigint)).toEqual(TypeTags.BigInt)
    expect(bigint.toString()).not.toEqual(TypeTags.BigInt)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(BigInt)
    expect(tag).not.toEqual(TypeTags.BigInt)
    expect(toString(BigInt)).not.toEqual(TypeTags.BigInt)
    expect(BigInt.toString()).not.toEqual(TypeTags.BigInt)
  })
})
