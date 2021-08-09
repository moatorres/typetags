import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

let objectLit = {} // literal
let object = Object() // instantiable
let objectConst = new Object() // constructor

describe('Object', () => {
  it('Should be defined', () => {
    expect(Object).toBeDefined()
    expect(typeof object).toEqual('object') // primitive
    expect(TypeTags.Object).toBeDefined()
  })

  it('Should match the type tag of an "Object" data type', () => {
    const tag = getTag(object)

    expect(tag).toEqual(TypeTags.Object)
    expect(toString(object)).toEqual(TypeTags.Object)
    expect(toString(objectLit)).toEqual(TypeTags.Object)
    expect(toString(objectConst)).toEqual(TypeTags.Object)
    expect(object.toString()).toEqual(TypeTags.Object) // default
    expect(objectLit.toString()).toEqual(TypeTags.Object) // default
    expect(objectConst.toString()).toEqual(TypeTags.Object) // default
  })

  it('Should test for special cases where you create a primitive from an "Object" constructor', () => {
    let boolean = Object(false)
    expect(typeof boolean).toEqual('object')
    expect(toString(boolean)).toEqual(TypeTags.Boolean)
    expect(boolean.toString()).not.toEqual(TypeTags.Boolean)
  })
})
