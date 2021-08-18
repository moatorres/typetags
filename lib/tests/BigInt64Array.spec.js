import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const bigint64 = new BigInt64Array(24)

describe('BigInt64Array', () => {
  it('Should be defined', () => {
    expect(BigInt64Array).toBeDefined()
    expect(TypeTags.BigInt64Array).toBeDefined()
  })

  it('Should match the type tag of an "BigInt64Array" data type', () => {
    const tag = TypeTags.get(bigint64)
    expect(tag).toEqual(TypeTags.BigInt64Array)
    expect(toString(bigint64)).toEqual(TypeTags.BigInt64Array)
    expect(bigint64.toString()).not.toEqual(TypeTags.BigInt64Array)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(BigInt64Array)
    expect(tag).not.toEqual(TypeTags.BigInt64Array)
    expect(toString(BigInt64Array)).not.toEqual(TypeTags.BigInt64Array)
    expect(BigInt64Array.toString()).not.toEqual(TypeTags.BigInt64Array)
  })
})
