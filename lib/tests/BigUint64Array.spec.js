import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const biguint64 = new BigUint64Array(24)

describe('BigUint64Array', () => {
  it('Should be defined', () => {
    expect(BigUint64Array).toBeDefined()
    expect(TypeTags.BigUint64Array).toBeDefined()
  })

  it('Should match the type tag of an "BigUint64Array" data type', () => {
    const tag = TypeTags.get(biguint64)
    expect(tag).toEqual(TypeTags.BigUint64Array)
    expect(toString(biguint64)).toEqual(TypeTags.BigUint64Array)
    expect(biguint64.toString()).not.toEqual(TypeTags.BigUint64Array)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(BigUint64Array)
    expect(tag).not.toEqual(TypeTags.BigUint64Array)
    expect(toString(BigUint64Array)).not.toEqual(TypeTags.BigUint64Array)
    expect(BigUint64Array.toString()).not.toEqual(TypeTags.BigUint64Array)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isBigUint64Array).toBeDefined()
    expect(TypeTags.isBigUint64Array(biguint64)).toBeTrue()
    expect(TypeTags.isBigUint64Array(toString(biguint64))).toBeTrue()
    expect(TypeTags.isBigUint64Array(TypeTags.BigUint64Array)).toBeTrue()
  })
})
