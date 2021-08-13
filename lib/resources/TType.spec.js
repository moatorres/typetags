import { TType } from './TType'

describe('TType', () => {
  it('Should be defined', () => {
    expect(TType).toBeDefined()
  })

  it('Should work', () => {
    let ArrayType = TType.create({ type: 'Array', tag: '[object Array]' })
    let missing = TType.create({ type: 'Window', tag: '[object Window]' })

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
    console.log('ArrayType.isNotAvailable ->', ArrayType.isNotAvailable)
    console.log('ArrayType[Symbol.species] ->', ArrayType[Symbol.species])
    console.log('toString ->', toString(ArrayType))
    console.log('[] instanceof ArrayType ->', [] instanceof ArrayType)

    for (let n in ArrayType) console.log('For in →', n)
    for (let n of ArrayType) console.log('For of →', n)
  })
})
