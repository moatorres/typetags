import { TType } from './TType'
import TAGS from '../.internal/data/typetags.json'

describe('TType', () => {
  it('Should be defined', () => {
    expect(TType).toBeDefined()
    expect(TType.create).toBeDefined()
  })

  xit('should indeed', () => {
    const xtypes = TAGS.map((v) => TType.create(v.type))

    const getReport = () =>
      xtypes.map((Type) => {
        Type.name
        Type.type
        Type.tag
        Type.info()
        Type.isAvailable()
        Type.isConstructor()
        Type.isFactory()
        Type.isStringifiable()
        Type.isObject()
        Type.isFunction()
        Type.isSyntatic()
        Type.hasSpecialArgs()
        Type.ownKeys()
        // Type.instance()

        // console.log('Name ->', Type.name)
        // console.log('Type ->', Type.type)
        // console.log('Tag ->', Type.tag)
        // console.log('info() ->', Type.info())
        // console.log('isAvailable() ->', Type.isAvailable())
        // console.log('isConstructor() ->', Type.isConstructor())
        // console.log('isFactory() ->', Type.isFactory())
        // console.log('isStringifiable() ->', Type.isStringifiable())
        // console.log('isObject() ->', Type.isObject())
        // console.log('isSyntatic() ->', Type.isSyntatic())
        // console.log('hasSpecialArgs() ->', Type.hasSpecialArgs())
        // console.log('ownKeys() ->', Type.ownKeys())
        // console.log('instance() ->', Type.instance())
      })

    expect(() => getReport()).not.toThrow()
  })

  xit('Should work', () => {
    let ArrayType = TType.create('Array')
    let missing = TType.create('Window')

    missing.isAvailable() && missing.info()

    console.log('ArrayType.name ->', ArrayType.name)
    console.log('ArrayType.type ->', ArrayType.type)
    console.log('ArrayType.tag ->', ArrayType.tag)
    console.log('ArrayType.instance(1,2,3) ->', ArrayType.instance(1, 2, 3))
    console.log('ArrayType.isAvailable() ->', ArrayType.isAvailable())
    console.log('ArrayType.isConstructor() ->', ArrayType.isConstructor())
    console.log('ArrayType.isFactory() ->', ArrayType.isFactory())
    console.log('ArrayType.isStringifiable() ->', ArrayType.isStringifiable())
    console.log('ArrayType.ownKeys() ->', ArrayType.ownKeys())
    console.log('ArrayType.info() ->', ArrayType.info())
    console.log('ArrayType.toString() ->', ArrayType.toString())
    console.log('ArrayType[Symbol.species] ->', ArrayType[Symbol.species])
    console.log('toString ->', toString(ArrayType))
    console.log('[] instanceof ArrayType ->', [] instanceof ArrayType)

    for (let n in ArrayType) console.log('For in →', n)
    for (let n of ArrayType) console.log('For of →', n)
  })
})
