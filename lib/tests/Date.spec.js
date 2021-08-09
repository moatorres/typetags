import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

const dateInst = Date()
const dateCons = new Date(false)

describe('Date', () => {
  it('Should be defined', () => {
    expect(Date).toBeDefined()
    expect(TypeTags.Date).toBeDefined()
  })

  it('Should match the type tag of a "Date" data type', () => {
    const tag = getTag(dateCons)
    expect(tag).toEqual(TypeTags.Date)
    expect(toString(dateCons)).toEqual(TypeTags.Date)
    expect(dateCons.toString()).not.toEqual(TypeTags.Date)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(Date)
    expect(tag).not.toEqual(TypeTags.Date)
    expect(toString(Date)).not.toEqual(TypeTags.Date)
    expect(Date.toString()).not.toEqual(TypeTags.Date)
  })
})