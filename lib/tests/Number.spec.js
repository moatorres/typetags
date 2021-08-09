import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

let numberLit = 1 // literal
let number = Number(1) // instantiable
let numberConst = new Number(1) // constructor

describe('Number', () => {
  it('Should be defined', () => {
    expect(Number).toBeDefined()
    expect(typeof number).toEqual('number') // primitive
    expect(TypeTags.Number).toBeDefined()
  })

  it('Should match the type tag of an "Number" data type', () => {
    const tag = getTag(number)

    expect(tag).toEqual(TypeTags.Number)
    expect(toString(number)).toEqual(TypeTags.Number)
    expect(toString(numberLit)).toEqual(TypeTags.Number)
    expect(toString(numberConst)).toEqual(TypeTags.Number)
    expect(number.toString()).not.toEqual(TypeTags.Number) // custom
    expect(numberLit.toString()).not.toEqual(TypeTags.Number) // custom
    expect(numberConst.toString()).not.toEqual(TypeTags.Number) // custom
  })
})
