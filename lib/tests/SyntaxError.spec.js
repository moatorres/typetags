import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const errInst = SyntaxError()
const errCons = new SyntaxError()

describe('SyntaxError', () => {
  it('Should be defined', () => {
    expect(SyntaxError).toBeDefined()
    expect(TypeTags.SyntaxError).toBeDefined()
  })

  it('Should match the type tag of a "SyntaxError" data type', () => {
    const tag = TypeTags.get(errCons)
    expect(tag).toEqual(TypeTags.SyntaxError)
    expect(toString(errCons)).toEqual(TypeTags.SyntaxError)
    expect(errCons.toString()).not.toEqual(TypeTags.SyntaxError)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(SyntaxError)
    expect(tag).not.toEqual(TypeTags.SyntaxError)
    expect(toString(SyntaxError)).not.toEqual(TypeTags.SyntaxError)
    expect(SyntaxError.toString()).not.toEqual(TypeTags.SyntaxError)
  })
})
