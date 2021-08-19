import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const date = new Date(false)

describe('Date', () => {
  it('Should be defined', () => {
    expect(Date).toBeDefined()
    expect(TypeTags.Date).toBeDefined()
  })

  it('Should match the type tag of a "Date" data type', () => {
    const tag = TypeTags.get(date)
    expect(tag).toEqual(TypeTags.Date)
    expect(toString(date)).toEqual(TypeTags.Date)
    expect(date.toString()).not.toEqual(TypeTags.Date)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(Date)
    expect(tag).not.toEqual(TypeTags.Date)
    expect(toString(Date)).not.toEqual(TypeTags.Date)
    expect(Date.toString()).not.toEqual(TypeTags.Date)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isDate).toBeDefined()
    expect(TypeTags.isDate(date)).toBeTrue()
    expect(TypeTags.isDate(toString(date))).toBeTrue()
    expect(TypeTags.isDate(TypeTags.Date)).toBeTrue()
  })
})
