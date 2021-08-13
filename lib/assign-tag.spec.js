import { defineToString, addTag, assignTag } from './assign-tag'
import { TypeTags } from './type-tags'
import getTag from './get-tag'

let proto = {}
let nulo = Object.create(null)

const getDescriptors = Object.getOwnPropertyDescriptors

describe('defineToString', () => {
  it('Should be defined', () => {
    expect(defineToString).toBeDefined()
  })

  it('Should add a "toString" method to objects with null prototypes', () => {
    defineToString(nulo)
    expect(nulo.toString).toBeDefined()
    expect(typeof nulo.toString).toEqual('function')
    expect(nulo.toString()).toEqual(TypeTags.Object)
  })

  it('Method "toString" should be configurable', () => {
    defineToString(nulo)
    const { toString } = getDescriptors(nulo)
    expect(toString.configurable).toBeTrue()
  })

  it('Should accept a second "tag" argument', () => {
    defineToString(nulo, 'Nulo')
    expect(nulo.toString()).toEqual('[object Nulo]')
  })
})

describe('addTag', () => {
  it('Should be defined', () => {
    expect(addTag).toBeDefined()
  })

  it('Should change the "Symbol.toStringTag" of the object\'s prototype', () => {
    let tag = 'Test'
    let toStringTag = '[object Test]'

    addTag(proto, tag)
    expect(getTag(proto)).toEqual(toStringTag)
    expect(proto[Symbol.toStringTag]).toEqual(tag)
  })

  it("Should NOT change the 'toString' method of the object's prototype", () => {
    let tag = 'Test'

    let before = proto.toString()
    addTag(proto, tag)
    let after = proto.toString()

    expect(before).toEqual(after)
    expect(proto[Symbol.toStringTag]).toEqual(tag)
  })
})

describe('assignTag', () => {
  it('Should be defined', () => {
    expect(assignTag).toBeDefined()
  })

  it('Should assign a Symbol.toStringTag prop to the received data type', () => {
    const myObj = { name: 'TypeTags' }
    const beforeTag = myObj.toString()
    const beforeToStringTag = myObj[Symbol.toStringTag]
    expect(beforeTag).toEqual(TypeTags.Object)
    expect(beforeToStringTag).not.toBeDefined()
    expect(toString(myObj)).toEqual(TypeTags.Undefined)

    assignTag(myObj, 'Hey')
    const afterTag = myObj.toString()
    const afterToStringTag = myObj[Symbol.toStringTag]
    expect(afterTag).toEqual('[object Hey]')
    expect(afterToStringTag).toBeDefined()
    expect(afterToStringTag).toEqual('Hey')
  })

  it("Should define a method toString on the received value's prototype, if there isn't any, then assign a Symbol.toStringTag to it", () => {
    const hasNullProto = Object.create(null)
    expect(hasNullProto.toString).not.toBeDefined()

    assignTag(hasNullProto, 'Nulo')
    expect(hasNullProto.toString()).toEqual('[object Nulo]')
  })
})
