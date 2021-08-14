import getTag from '../get-tag'
import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

const errInst = EvalError()
const errCons = new EvalError()

describe('EvalError', () => {
  it('Should be defined', () => {
    expect(EvalError).toBeDefined()
    expect(TypeTags.EvalError).toBeDefined()
  })

  it('Should match the type tag of a "EvalError" data type', () => {
    const tag = getTag(errCons)
    expect(tag).toEqual(TypeTags.EvalError)
    expect(toString(errCons)).toEqual(TypeTags.EvalError)
    expect(errCons.toString()).not.toEqual(TypeTags.EvalError)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(EvalError)
    expect(tag).not.toEqual(TypeTags.EvalError)
    expect(toString(EvalError)).not.toEqual(TypeTags.EvalError)
    expect(EvalError.toString()).not.toEqual(TypeTags.EvalError)
  })
})
