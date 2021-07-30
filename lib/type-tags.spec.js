import getTag from './get-tag'
import { TypeTags } from './type-tags'

const toString = Object.prototype.toString

let array = []
let arrayBuffer = new ArrayBuffer(8)
let bigInt64Array = new BigInt64Array(24)
let bigUInt64Array = new BigUint64Array(24)
let boolean = true
let date = new Date()
let error = new Error()
let float32array = new Float32Array()
let float64array = new Float64Array()
let fun = () => {}
let int8array = new Int8Array()
let int16array = new Int16Array()
let int32array = new Int32Array()
let map = new Map()
let math = Math
let nulll = null
let number = 1 // 0
let object = {}
let regex = new RegExp('')
let set = new Set([1])
let string = 'hey' // ''
let symbol = Symbol()
let uint8array = new Uint8Array()
let uint8clamped = new Uint8ClampedArray()
let uint16array = new Uint16Array()
let uint32array = new Uint32Array()
let undefinedd = undefined
let weakmap = new WeakMap()
let weakref = new WeakRef({})
let weakset = new WeakSet()

describe('TypeTags', () => {
  it('Should be defined', () => {
    expect(TypeTags).toBeDefined()
  })

  it('Should be immutable', () => {
    expect(TypeTags).toBeFrozen()
  })
})

describe('Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.Array).toBeDefined()
  })

  it('Should match the type tag of an "Array" datatype', () => {
    expect(getTag(array)).toEqual(TypeTags.Array)
    expect(toString.call(array)).toEqual(TypeTags.Array)
  })
})

describe('ArrayBuffer', () => {
  it('Should be defined', () => {
    expect(TypeTags.ArrayBuffer).toBeDefined()
  })

  it('Should match the type tag of an "ArrayBuffer" datatype', () => {
    expect(getTag(arrayBuffer)).toEqual(TypeTags.ArrayBuffer)
    expect(toString.call(arrayBuffer)).toEqual(TypeTags.ArrayBuffer)
  })
})

describe('BigInt64Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.BigInt64Array).toBeDefined()
  })

  it('Should match the type tag of a "BigInt64Array" datatype', () => {
    expect(getTag(bigInt64Array)).toEqual(TypeTags.BigInt64Array)
    expect(toString.call(bigInt64Array)).toEqual(TypeTags.BigInt64Array)
  })
})

describe('BigUint64Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.BigUint64Array).toBeDefined()
  })

  it('Should match the type tag of a "BigUint64Array" datatype', () => {
    expect(getTag(bigUInt64Array)).toEqual(TypeTags.BigUint64Array)
    expect(toString.call(bigUInt64Array)).toEqual(TypeTags.BigUint64Array)
  })
})

describe('Boolean', () => {
  it('Should be defined', () => {
    expect(TypeTags.Boolean).toBeDefined()
  })

  it('Should match the type tag of a "Boolean" datatype', () => {
    expect(getTag(boolean)).toEqual(TypeTags.Boolean)
    expect(toString.call(boolean)).toEqual(TypeTags.Boolean)
  })
})

describe('Date', () => {
  it('Should be defined', () => {
    expect(TypeTags.Date).toBeDefined()
  })

  it('Should match the type tag of a "Date" datatype', () => {
    expect(getTag(date)).toEqual(TypeTags.Date)
    expect(toString.call(date)).toEqual(TypeTags.Date)
  })
})

describe('Error', () => {
  it('Should be defined', () => {
    expect(TypeTags.Error).toBeDefined()
  })

  it('Should match the type tag of an "Error" datatype', () => {
    expect(getTag(error)).toEqual(TypeTags.Error)
    expect(toString.call(error)).toEqual(TypeTags.Error)
  })
})

describe('Float32Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.Float32Array).toBeDefined()
  })

  it('Should match the type tag of a "Float32Array" datatype', () => {
    expect(getTag(float32array)).toEqual(TypeTags.Float32Array)
    expect(toString.call(float32array)).toEqual(TypeTags.Float32Array)
  })
})

describe('Float64Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.Float64Array).toBeDefined()
  })

  it('Should match the type tag of a "Float64Array" datatype', () => {
    expect(getTag(float64array)).toEqual(TypeTags.Float64Array)
    expect(toString.call(float64array)).toEqual(TypeTags.Float64Array)
  })
})

describe('Function', () => {
  it('Should be defined', () => {
    expect(TypeTags.Function).toBeDefined()
  })

  it('Should match the type tag of a "Function" datatype', () => {
    expect(getTag(fun)).toEqual(TypeTags.Function)
    expect(toString.call(fun)).toEqual(TypeTags.Function)
  })
})

describe('Int8Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.Int8Array).toBeDefined()
  })

  it('Should match the type tag of an "Int8Array" datatype', () => {
    expect(getTag(int8array)).toEqual(TypeTags.Int8Array)
    expect(toString.call(int8array)).toEqual(TypeTags.Int8Array)
  })
})

describe('Int16Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.Int16Array).toBeDefined()
  })

  it('Should match the type tag of an "Int16Array" datatype', () => {
    expect(getTag(int16array)).toEqual(TypeTags.Int16Array)
    expect(toString.call(int16array)).toEqual(TypeTags.Int16Array)
  })
})

describe('Int32Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.Int32Array).toBeDefined()
  })

  it('Should match the type tag of an "Int32Array" datatype', () => {
    expect(getTag(int32array)).toEqual(TypeTags.Int32Array)
    expect(toString.call(int32array)).toEqual(TypeTags.Int32Array)
  })
})

describe('Map', () => {
  it('Should be defined', () => {
    expect(TypeTags.Map).toBeDefined()
  })

  it('Should match the type tag of a "Map" datatype', () => {
    expect(getTag(map)).toEqual(TypeTags.Map)
    expect(toString.call(map)).toEqual(TypeTags.Map)
  })
})

describe('Math', () => {
  it('Should be defined', () => {
    expect(TypeTags.Math).toBeDefined()
  })

  it('Should match the type tag of a "Math" datatype', () => {
    expect(getTag(math)).toEqual(TypeTags.Math)
    expect(toString.call(math)).toEqual(TypeTags.Math)
  })
})

describe('Null', () => {
  it('Should be defined', () => {
    expect(TypeTags.Null).toBeDefined()
  })

  it('Should match the type tag of a "Null" datatype', () => {
    expect(getTag(nulll)).toEqual(TypeTags.Null)
    expect(toString.call(nulll)).toEqual(TypeTags.Null)
  })
})

describe('Number', () => {
  it('Should be defined', () => {
    expect(TypeTags.Number).toBeDefined()
  })

  it('Should match the type tag of a "Number" datatype', () => {
    expect(getTag(number)).toEqual(TypeTags.Number)
    expect(toString.call(number)).toEqual(TypeTags.Number)
  })
})

describe('Object', () => {
  it('Should be defined', () => {
    expect(TypeTags.Object).toBeDefined()
  })

  it('Should match the type tag of an "Object" datatype', () => {
    expect(getTag(object)).toEqual(TypeTags.Object)
    expect(toString.call(object)).toEqual(TypeTags.Object)
  })
})

describe('RegExp', () => {
  it('Should be defined', () => {
    expect(TypeTags.RegExp).toBeDefined()
  })

  it('Should match the type tag of a "RegExp" datatype', () => {
    expect(getTag(regex)).toEqual(TypeTags.RegExp)
    expect(toString.call(regex)).toEqual(TypeTags.RegExp)
  })
})

describe('Set', () => {
  it('Should be defined', () => {
    expect(TypeTags.Set).toBeDefined()
  })

  it('Should match the type tag of a "Set" datatype', () => {
    expect(getTag(set)).toEqual(TypeTags.Set)
    expect(toString.call(set)).toEqual(TypeTags.Set)
  })
})

describe('String', () => {
  it('Should be defined', () => {
    expect(TypeTags.String).toBeDefined()
  })

  it('Should match the type tag of a "String" datatype', () => {
    expect(getTag(string)).toEqual(TypeTags.String)
    expect(toString.call(string)).toEqual(TypeTags.String)
  })
})

describe('Symbol', () => {
  it('Should be defined', () => {
    expect(TypeTags.Symbol).toBeDefined()
  })

  it('Should match the type tag of a "Symbol" datatype', () => {
    expect(getTag(symbol)).toEqual(TypeTags.Symbol)
    expect(toString.call(symbol)).toEqual(TypeTags.Symbol)
  })
})

describe('Uint8Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.Uint8Array).toBeDefined()
  })

  it('Should match the type tag of an "Uint8Array" datatype', () => {
    expect(getTag(uint8array)).toEqual(TypeTags.Uint8Array)
    expect(toString.call(uint8array)).toEqual(TypeTags.Uint8Array)
  })
})

describe('Uint8ClampedArray', () => {
  it('Should be defined', () => {
    expect(TypeTags.Uint8ClampedArray).toBeDefined()
  })

  it('Should match the type tag of an "Uint8ClampedArray" datatype', () => {
    expect(getTag(uint8clamped)).toEqual(TypeTags.Uint8ClampedArray)
    expect(toString.call(uint8clamped)).toEqual(TypeTags.Uint8ClampedArray)
  })
})

describe('Uint16Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.Uint16Array).toBeDefined()
  })

  it('Should match the type tag of an "Uint16Array" datatype', () => {
    expect(getTag(uint16array)).toEqual(TypeTags.Uint16Array)
    expect(toString.call(uint16array)).toEqual(TypeTags.Uint16Array)
  })
})

describe('Uint32Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.Uint32Array).toBeDefined()
  })

  it('Should match the type tag of an "Uint32Array" datatype', () => {
    expect(getTag(uint32array)).toEqual(TypeTags.Uint32Array)
    expect(toString.call(uint32array)).toEqual(TypeTags.Uint32Array)
  })
})

describe('Undefined', () => {
  it('Should be defined', () => {
    expect(TypeTags.Undefined).toBeDefined()
  })

  it('Should match the type tag of an "Undefined" datatype', () => {
    expect(getTag(undefinedd)).toEqual(TypeTags.Undefined)
    expect(toString.call(undefinedd)).toEqual(TypeTags.Undefined)
  })
})

describe('WeakMap', () => {
  it('Should be defined', () => {
    expect(TypeTags.WeakMap).toBeDefined()
  })

  it('Should match the type tag of a "WeakMap" datatype', () => {
    expect(getTag(weakmap)).toEqual(TypeTags.WeakMap)
    expect(toString.call(weakmap)).toEqual(TypeTags.WeakMap)
  })
})

describe('WeakRef', () => {
  it('Should be defined', () => {
    expect(TypeTags.WeakRef).toBeDefined()
  })

  it('Should match the type tag of a "WeakRef" datatype', () => {
    expect(getTag(weakref)).toEqual(TypeTags.WeakRef)
    expect(toString.call(weakref)).toEqual(TypeTags.WeakRef)
  })
})

describe('WeakSet', () => {
  it('Should be defined', () => {
    expect(TypeTags.WeakSet).toBeDefined()
  })

  it('Should match the type tag of a "WeakSet" datatype', () => {
    expect(getTag(weakset)).toEqual(TypeTags.WeakSet)
    expect(toString.call(weakset)).toEqual(TypeTags.WeakSet)
  })
})
