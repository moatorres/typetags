import { TType } from './TType'

describe('TType', () => {
  it('Should be defined', () => {
    expect(TType).toBeDefined()
  })

  it('Should work', () => {
    // let res = META.map(TType.create)
    // console.log(res[4])
    // let ArrayType = TType.create(META[4])
    let ArrayType = TType.create({ type: 'Array', tag: '[object Array]' })

    let species = ArrayType[Symbol.species]
    let tag = toString(ArrayType)
    let value = ArrayType.instance(true)
    let instanceTag = toString(value)

    console.log('InstanceOf Array →', value instanceof Array)
    console.log('Value →', value)
    console.log('Tag →', instanceTag)
    console.log('OwnKeys →', ArrayType.ownKeys())
    console.log('TType →', ArrayType)
    console.log('Species →', species)
    console.log('Info →', ArrayType.info())
    console.log('Report →', ArrayType.report({ descriptors: true }))

    for (let n in ArrayType) console.log('For in →', n)
    for (let n of ArrayType) console.log('For of →', n)
  })
})
