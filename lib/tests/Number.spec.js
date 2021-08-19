import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

let numberLit = 1 // literal
let number = Number(1) // factory
let numberConst = new Number(1) // constructor

describe('Number', () => {
  it('Should be defined', () => {
    expect(Number).toBeDefined()
    expect(typeof number).toEqual('number') // primitive
    expect(TypeTags.Number).toBeDefined()
  })

  it('Should match the type tag of an "Number" data type', () => {
    const tag = TypeTags.get(number)

    expect(tag).toEqual(TypeTags.Number)
    expect(toString(number)).toEqual(TypeTags.Number)
    expect(toString(numberLit)).toEqual(TypeTags.Number)
    expect(toString(numberConst)).toEqual(TypeTags.Number)
    expect(number.toString()).not.toEqual(TypeTags.Number) // custom
    expect(numberLit.toString()).not.toEqual(TypeTags.Number) // custom
    expect(numberConst.toString()).not.toEqual(TypeTags.Number) // custom
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isNumber).toBeDefined()
    expect(TypeTags.isNumber(number)).toBeTrue()
    expect(TypeTags.isNumber(toString(number))).toBeTrue()
    expect(TypeTags.isNumber(TypeTags.Number)).toBeTrue()
  })
})
