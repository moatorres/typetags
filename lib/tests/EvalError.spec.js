import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const error = new EvalError()

describe('EvalError', () => {
  it('Should be defined', () => {
    expect(EvalError).toBeDefined()
    expect(TypeTags.EvalError).toBeDefined()
  })

  it('Should match the type tag of a "EvalError" data type', () => {
    const tag = TypeTags.get(error)
    expect(tag).toEqual(TypeTags.EvalError)
    expect(toString(error)).toEqual(TypeTags.EvalError)
    expect(error.toString()).not.toEqual(TypeTags.EvalError)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(EvalError)
    expect(tag).not.toEqual(TypeTags.EvalError)
    expect(toString(EvalError)).not.toEqual(TypeTags.EvalError)
    expect(EvalError.toString()).not.toEqual(TypeTags.EvalError)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isEvalError).toBeDefined()
    expect(TypeTags.isEvalError(error)).toBeTrue()
    expect(TypeTags.isEvalError(toString(error))).toBeTrue()
    expect(TypeTags.isEvalError(TypeTags.EvalError)).toBeTrue()
  })
})
