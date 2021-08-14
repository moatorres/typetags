import getTag from '../get-tag'
import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

const symbol = Symbol() // not a constructor

describe('Symbol', () => {
  it('Should be defined', () => {
    expect(Symbol).toBeDefined()
    expect(TypeTags.Symbol).toBeDefined()
  })

  it('Should match the type tag of a "Symbol" data type', () => {
    const tag = getTag(symbol)
    expect(tag).toEqual(TypeTags.Symbol)
    expect(toString(symbol)).toEqual(TypeTags.Symbol)
    expect(symbol.toString()).not.toEqual(TypeTags.Symbol)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(Symbol)
    expect(tag).not.toEqual(TypeTags.Symbol)
    expect(toString(Symbol)).not.toEqual(TypeTags.Symbol)
    expect(Symbol.toString()).not.toEqual(TypeTags.Symbol)
  })
})
