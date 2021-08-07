import { defineToString, addTag, assignTag, changeToString } from './assign-tag'
import { TypeTags } from './type-tags'
import getTag from './get-tag'

let proto = {}
let nulo = Object.create(null)

const descriptors = Object.getOwnPropertyDescriptors

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
    const { toString } = descriptors(nulo)
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
})

describe('changeToString', () => {
  it('Should be defined', () => {
    expect(changeToString).toBeDefined()
  })

  it("Should change the 'toString' method of the object's prototype", () => {
    const toStr = () => 'Testable'

    let before = toStr.toString()
    changeToString(toStr, toStr)
    let after = toStr.toString()
    let fn = () => ''
    // console.log(fn.toString())

    expect(before).not.toEqual(after)
    expect(toStr.toString()).toEqual(toStr())
  })
})
