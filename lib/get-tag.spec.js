import getTag from './get-tag'

let und
let undef = undefined
let nul = null
let bool = true
let string = 'moka'
let number = 1
let object = {}
let array = [1, 2, 3]
let symbol = Symbol()
let map = new Map()
let set = new Set()
let error = new Error()
let weakMap = new WeakMap()
let weakSet = new WeakSet()
let regex = new RegExp('')
let buf = new ArrayBuffer(1)
let int8arr = new Int8Array()
let int16arr = new Int16Array()
let int32arr = new Int32Array()
let uint8arr = new Uint8Array()
let uint16arr = new Uint16Array()
let uint32arr = new Uint32Array()
let uint8clampedarr = new Uint8ClampedArray()
let float32arr = new Float32Array()
let float64arr = new Float64Array()
let bigint64arr = new BigInt64Array()
let biguint64arr = new BigUint64Array()
let fun = () => {}

describe('getTag()', () => {
  it('Should be defined', () => {
    expect(getTag).toBeDefined()
  })

  it('Should return the datatype string of primitives', () => {
    expect(getTag(bool)).toEqual('[object Boolean]')
    expect(getTag(number)).toEqual('[object Number]')
    expect(getTag(object)).toEqual('[object Object]')
    expect(getTag(string)).toEqual('[object String]')
  })

  it('Should return the datatype string of special types', () => {
    expect(getTag(array)).toEqual('[object Array]')
    expect(getTag(fun)).toEqual('[object Function]')
  })

  it('Should return the datatype string of integer types', () => {
    expect(getTag(bigint64arr)).toEqual('[object BigInt64Array]')
    expect(getTag(biguint64arr)).toEqual('[object BigUint64Array]')
    expect(getTag(float32arr)).toEqual('[object Float32Array]')
    expect(getTag(float64arr)).toEqual('[object Float64Array]')
    expect(getTag(int8arr)).toEqual('[object Int8Array]')
    expect(getTag(int16arr)).toEqual('[object Int16Array]')
    expect(getTag(int32arr)).toEqual('[object Int32Array]')
    expect(getTag(uint8arr)).toEqual('[object Uint8Array]')
    expect(getTag(uint16arr)).toEqual('[object Uint16Array]')
    expect(getTag(uint32arr)).toEqual('[object Uint32Array]')
    expect(getTag(uint8clampedarr)).toEqual('[object Uint8ClampedArray]')
  })

  it('Should return the datatype string any integer type', () => {
    expect(getTag(nul)).toEqual('[object Null]')
    expect(getTag(und)).toEqual('[object Undefined]')
    expect(getTag(undef)).toEqual('[object Undefined]')
  })

  it('Should return the datatype string of custom types', () => {
    expect(getTag(buf)).toEqual('[object ArrayBuffer]')
    expect(getTag(error)).toEqual('[object Error]')
    expect(getTag(map)).toEqual('[object Map]')
    expect(getTag(set)).toEqual('[object Set]')
    expect(getTag(weakMap)).toEqual('[object WeakMap]')
    expect(getTag(weakSet)).toEqual('[object WeakSet]')
    expect(getTag(regex)).toEqual('[object RegExp]')
    expect(getTag(symbol)).toEqual('[object Symbol]')
  })
})
