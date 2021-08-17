import getTag from './get-tag'
import { TypeTags } from './type-tags'

const toString = Object.prototype.toString

let ifGithub = !!process.env.__GITHUB__ ? describe.skip : describe

let ac = typeof AbortController !== 'undefined' ? new AbortController() : undefined // prettier-ignore
let aggregateError = typeof AggregateError !== 'undefined' ? new AggregateError([]) : undefined // prettier-ignore
let args = toString.call(arguments)
let array = []
let arrayBuffer = new ArrayBuffer(8)
let async = async function () {}
let atomics = Atomics
let bigint = BigInt(9007199254740991)
let bigInt64Array = new BigInt64Array(24)
let bigUInt64Array = new BigUint64Array(24)
let boolean = true
let date = new Date()
let error = new Error()
let evalError = new EvalError()
// let internalError = new InternalError('') // non-standard
let float32array = new Float32Array()
let float64array = new Float64Array()
let final = new FinalizationRegistry((v) => {})
let fun = () => {}
let generatorFunction = function* () {}
let generator = generatorFunction()
let inf = 1 / 0
let intl = Intl
let intlColl = new Intl.Collator('en')
let intlDate = new Intl.DateTimeFormat('en')
let intlList = new Intl.ListFormat('en')
let intlLocale = new Intl.Locale('en')
let intlNum = new Intl.NumberFormat('en')
let intlPlural = new Intl.PluralRules('en')
let intlRelTime = new Intl.RelativeTimeFormat('en')
let int8array = new Int8Array()
let int16array = new Int16Array()
let int32array = new Int32Array()
let json = JSON
let map = new Map()
let math = Math
let nulll = null
let number = 1 // 0
let object = {}
let promise = new Promise((r) => r)
let rangeError = new RangeError()
let referenceError = new ReferenceError()
let regex = new RegExp('')
let set = new Set([1])
let sharedArrayBuffer = new SharedArrayBuffer(1024)
let string = 'hey' // ''
let symbol = Symbol()
let syntaxError = new SyntaxError()
let textDecoder = new TextDecoder()
let textEncoder = new TextEncoder()
let typeError = new TypeError()
let uint8array = new Uint8Array()
let uint8clamped = new Uint8ClampedArray()
let uint16array = new Uint16Array()
let uint32array = new Uint32Array()
let undefinedd = undefined
let url = new URL('https://mokatecnologia.com')
let urlSearch = new URLSearchParams()
let uriError = new URIError()
let view = new DataView(sharedArrayBuffer)
let weakmap = new WeakMap()
let weakref = new WeakRef({})
let weakset = new WeakSet()
let wasm = WebAssembly
let wasmModule = new WebAssembly.Module(
  new Uint8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00])
)
let wasmGlobal = new WebAssembly.Global({ value: 'i32', mutable: true }, 0)
let wasmInstance = new WebAssembly.Instance(wasmModule, {})
let wasmMemory = new WebAssembly.Memory({ initial: 1, max: 10 })
let wasmTable = new WebAssembly.Table({ initial: 1, element: 'anyfunc' })
let wasmCompileError = new WebAssembly.CompileError()
let wasmLinkError = new WebAssembly.LinkError()
let wasmRuntimeError = new WebAssembly.RuntimeError()

describe('TypeTags', () => {
  it('Should be defined', () => {
    expect(TypeTags).toBeDefined()
  })

  it('Should be immutable', () => {
    expect(TypeTags).toBeFrozen()
  })
})

ifGithub('AbortController', () => {
  it('Should be defined', () => {
    expect(TypeTags.AbortController).toBeDefined()
  })

  it('Should match the type tag of an "AbortController" data type', () => {
    expect(getTag(ac)).toEqual(TypeTags.AbortController)
    expect(toString.call(ac)).toEqual(TypeTags.AbortController)
  })
})

ifGithub('AbortSignal', () => {
  it('Should be defined', () => {
    expect(TypeTags.AbortSignal).toBeDefined()
  })

  it('Should match the type tag of an "AbortSignal" data type', () => {
    expect(getTag(ac.signal)).toEqual(TypeTags.AbortSignal)
    expect(toString.call(ac.signal)).toEqual(TypeTags.AbortSignal)
  })
})

ifGithub('AggregateError', () => {
  it('Should be defined', () => {
    expect(TypeTags.AggregateError).toBeDefined()
  })

  it('Should match the type tag of an "AggregateError" data type', () => {
    expect(getTag(aggregateError)).toEqual(TypeTags.AggregateError)
    expect(toString.call(aggregateError)).toEqual(TypeTags.AggregateError)
  })
})

describe('Arguments', () => {
  it('Should be defined', () => {
    expect(TypeTags.Arguments).toBeDefined()
  })

  it('Should match the type tag of an "Arguments" data type', () => {
    expect(args).toEqual(TypeTags.Arguments)
    expect(toString.call(arguments)).toEqual(TypeTags.Arguments)
  })
})

describe('Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.Array).toBeDefined()
  })

  it('Should match the type tag of an "Array" data type', () => {
    expect(getTag(array)).toEqual(TypeTags.Array)
    expect(toString.call(array)).toEqual(TypeTags.Array)
  })
})

describe('Array Iterator', () => {
  it('Should be defined', () => {
    expect(TypeTags['Array.Iterator']).toBeDefined()
  })

  it('Should match the type tag of an "Array Iterator" data type', () => {
    expect(getTag(array[Symbol.iterator]())).toEqual(TypeTags['Array.Iterator'])
    expect(toString.call(array[Symbol.iterator]())).toEqual(
      TypeTags['Array.Iterator']
    ) // prettier-ignore4
  })
})

describe('ArrayBuffer', () => {
  it('Should be defined', () => {
    expect(TypeTags.ArrayBuffer).toBeDefined()
  })

  it('Should match the type tag of an "ArrayBuffer" data type', () => {
    expect(getTag(arrayBuffer)).toEqual(TypeTags.ArrayBuffer)
    expect(toString.call(arrayBuffer)).toEqual(TypeTags.ArrayBuffer)
  })
})

describe('AsyncFunction', () => {
  it('Should be defined', () => {
    expect(TypeTags.AsyncFunction).toBeDefined()
  })

  it('Should match the type tag of an "AsyncFunction" data type', () => {
    expect(getTag(async)).toEqual(TypeTags.AsyncFunction)
    expect(toString.call(async)).toEqual(TypeTags.AsyncFunction)
  })
})

describe('Atomics', () => {
  it('Should be defined', () => {
    expect(TypeTags.Atomics).toBeDefined()
  })

  it('Should match the type tag of an "Atomics" data type', () => {
    expect(getTag(atomics)).toEqual(TypeTags.Atomics)
    expect(toString.call(atomics)).toEqual(TypeTags.Atomics)
  })
})

describe('BigInt', () => {
  it('Should be defined', () => {
    expect(TypeTags.BigInt).toBeDefined()
  })

  it('Should match the type tag of an "BigInt" data type', () => {
    expect(getTag(bigint)).toEqual(TypeTags.BigInt)
    expect(toString.call(bigint)).toEqual(TypeTags.BigInt)
  })
})

describe('BigInt64Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.BigInt64Array).toBeDefined()
  })

  it('Should match the type tag of a "BigInt64Array" data type', () => {
    expect(getTag(bigInt64Array)).toEqual(TypeTags.BigInt64Array)
    expect(toString.call(bigInt64Array)).toEqual(TypeTags.BigInt64Array)
  })
})

describe('BigUint64Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.BigUint64Array).toBeDefined()
  })

  it('Should match the type tag of a "BigUint64Array" data type', () => {
    expect(getTag(bigUInt64Array)).toEqual(TypeTags.BigUint64Array)
    expect(toString.call(bigUInt64Array)).toEqual(TypeTags.BigUint64Array)
  })
})

describe('Boolean', () => {
  it('Should be defined', () => {
    expect(TypeTags.Boolean).toBeDefined()
  })

  it('Should match the type tag of a "Boolean" data type', () => {
    expect(getTag(boolean)).toEqual(TypeTags.Boolean)
    expect(toString.call(boolean)).toEqual(TypeTags.Boolean)
  })
})

describe('Console', () => {
  it('Should be defined', () => {
    expect(TypeTags.Console).toBeDefined()
  })

  it('Should match the type tag of a "Console" data type', () => {
    expect(getTag(console)).toEqual(TypeTags.Console)
    expect(toString.call(console)).toEqual(TypeTags.Console)
  })
})

describe('DataView', () => {
  it('Should be defined', () => {
    expect(TypeTags.DataView).toBeDefined()
  })

  it('Should match the type tag of a "DataView" data type', () => {
    expect(getTag(view)).toEqual(TypeTags.DataView)
    expect(toString.call(view)).toEqual(TypeTags.DataView)
  })
})

describe('Date', () => {
  it('Should be defined', () => {
    expect(TypeTags.Date).toBeDefined()
  })

  it('Should match the type tag of a "Date" data type', () => {
    expect(getTag(date)).toEqual(TypeTags.Date)
    expect(toString.call(date)).toEqual(TypeTags.Date)
  })
})

describe('Error', () => {
  it('Should be defined', () => {
    expect(TypeTags.Error).toBeDefined()
  })

  it('Should match the type tag of an "Error" data type', () => {
    expect(getTag(error)).toEqual(TypeTags.Error)
    expect(toString.call(error)).toEqual(TypeTags.Error)
  })
})

describe('EvalError', () => {
  it('Should be defined', () => {
    expect(TypeTags.EvalError).toBeDefined()
  })

  it('Should match the type tag of an "EvalError" data type', () => {
    expect(getTag(evalError)).toEqual(TypeTags.EvalError)
    expect(toString.call(evalError)).toEqual(TypeTags.EvalError)
  })
})

describe('FinalizationRegistry', () => {
  it('Should be defined', () => {
    expect(TypeTags.FinalizationRegistry).toBeDefined()
  })

  it('Should match the type tag of a "FinalizationRegistry" data type', () => {
    expect(getTag(final)).toEqual(TypeTags.FinalizationRegistry)
    expect(toString.call(final)).toEqual(TypeTags.FinalizationRegistry)
  })
})

describe('Float32Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.Float32Array).toBeDefined()
  })

  it('Should match the type tag of a "Float32Array" data type', () => {
    expect(getTag(float32array)).toEqual(TypeTags.Float32Array)
    expect(toString.call(float32array)).toEqual(TypeTags.Float32Array)
  })
})

describe('Float64Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.Float64Array).toBeDefined()
  })

  it('Should match the type tag of a "Float64Array" data type', () => {
    expect(getTag(float64array)).toEqual(TypeTags.Float64Array)
    expect(toString.call(float64array)).toEqual(TypeTags.Float64Array)
  })
})

describe('Function', () => {
  it('Should be defined', () => {
    expect(TypeTags.Function).toBeDefined()
  })

  it('Should match the type tag of a "Function" data type', () => {
    expect(getTag(fun)).toEqual(TypeTags.Function)
    expect(toString.call(fun)).toEqual(TypeTags.Function)
  })
})

describe('Generator', () => {
  it('Should be defined', () => {
    expect(TypeTags.Generator).toBeDefined()
  })

  it('Should match the type tag of a "Generator" data type', () => {
    expect(getTag(generator)).toEqual(TypeTags.Generator)
    expect(toString.call(generator)).toEqual(TypeTags.Generator)
  })
})

describe('GeneratorFunction', () => {
  it('Should be defined', () => {
    expect(TypeTags.GeneratorFunction).toBeDefined()
  })

  it('Should match the type tag of a "GeneratorFunction" data type', () => {
    expect(getTag(generatorFunction)).toEqual(TypeTags.GeneratorFunction)
    expect(toString.call(generatorFunction)).toEqual(TypeTags.GeneratorFunction)
  })
})

describe('Global', () => {
  it('Should be defined', () => {
    expect(TypeTags.Global).toBeDefined()
  })

  it('Should match the type tag of a "Global" data type', () => {
    expect(toString.call(global)).toEqual(TypeTags.Global)
  })
})

describe('GlobalThis', () => {
  it('Should be defined', () => {
    expect(TypeTags.GlobalThis).toBeDefined()
  })

  it('Should match the type tag of a "GlobalThis" data type', () => {
    expect(toString.call(globalThis)).toEqual(TypeTags.GlobalThis)
  })
})

describe('Infinity', () => {
  it('Should be defined', () => {
    expect(TypeTags.Infinity).toBeDefined()
  })

  it('Should match the type tag of a "Infinity" data type', () => {
    expect(getTag(inf)).toEqual(TypeTags.Infinity)
    expect(toString.call(Infinity)).toEqual(TypeTags.Infinity)
  })
})

describe('Int8Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.Int8Array).toBeDefined()
  })

  it('Should match the type tag of an "Int8Array" data type', () => {
    expect(getTag(int8array)).toEqual(TypeTags.Int8Array)
    expect(toString.call(int8array)).toEqual(TypeTags.Int8Array)
  })
})

describe('Int16Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.Int16Array).toBeDefined()
  })

  it('Should match the type tag of an "Int16Array" data type', () => {
    expect(getTag(int16array)).toEqual(TypeTags.Int16Array)
    expect(toString.call(int16array)).toEqual(TypeTags.Int16Array)
  })
})

describe('Int32Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.Int32Array).toBeDefined()
  })

  it('Should match the type tag of an "Int32Array" data type', () => {
    expect(getTag(int32array)).toEqual(TypeTags.Int32Array)
    expect(toString.call(int32array)).toEqual(TypeTags.Int32Array)
  })
})

describe('InternalError', () => {
  xit('Should be defined', () => {
    expect(TypeTags.InternalError).toBeDefined()
  })

  xit('Should match the type tag of an "InternalError" data type', () => {
    expect(getTag(internalError)).toEqual(TypeTags.InternalError)
    expect(toString.call(internalError)).toEqual(TypeTags.InternalError)
  })
})

describe('Intl', () => {
  it('Should be defined', () => {
    expect(TypeTags.Intl).toBeDefined()
  })

  it('Should match the type tag of an "Intl" data type', () => {
    expect(getTag(intl)).toEqual(TypeTags.Intl)
    expect(toString.call(intl)).toEqual(TypeTags.Intl)
  })
})

describe('Intl.Collator', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.Collator']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.Collator" data type', () => {
    expect(getTag(intlColl)).toEqual(TypeTags['Intl.Collator'])
    expect(toString.call(intlColl)).toEqual(TypeTags['Intl.Collator'])
  })
})

describe('Intl.DateTimeFormat', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.DateTimeFormat']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.DateTimeFormat" data type', () => {
    expect(getTag(intlDate)).toEqual(TypeTags['Intl.DateTimeFormat'])
    expect(toString.call(intlDate)).toEqual(TypeTags['Intl.DateTimeFormat'])
  })
})

describe('Intl.ListFormat', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.ListFormat']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.ListFormat" data type', () => {
    expect(getTag(intlList)).toEqual(TypeTags['Intl.ListFormat'])
    expect(toString.call(intlList)).toEqual(TypeTags['Intl.ListFormat'])
  })
})

describe('Intl.Locale', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.Locale']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.Locale" data type', () => {
    expect(getTag(intlLocale)).toEqual(TypeTags['Intl.Locale'])
    expect(toString.call(intlLocale)).toEqual(TypeTags['Intl.Locale'])
  })
})

describe('Intl.NumberFormat', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.NumberFormat']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.NumberFormat" data type', () => {
    expect(getTag(intlNum)).toEqual(TypeTags['Intl.NumberFormat'])
    expect(toString.call(intlNum)).toEqual(TypeTags['Intl.NumberFormat'])
  })
})

describe('Intl.PluralRules', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.PluralRules']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.PluralRules" data type', () => {
    expect(getTag(intlPlural)).toEqual(TypeTags['Intl.PluralRules'])
    expect(toString.call(intlPlural)).toEqual(TypeTags['Intl.PluralRules'])
  })
})

describe('Intl.RelativeTimeFormat', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.RelativeTimeFormat']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.RelativeTimeFormat" data type', () => {
    expect(getTag(intlRelTime)).toEqual(TypeTags['Intl.RelativeTimeFormat'])
    expect(toString.call(intlRelTime)).toEqual(
      TypeTags['Intl.RelativeTimeFormat']
    )
  })
})

describe('JSON', () => {
  it('Should be defined', () => {
    expect(TypeTags.JSON).toBeDefined()
  })

  it('Should match the type tag of an "JSON" data type', () => {
    expect(getTag(json)).toEqual(TypeTags.JSON)
    expect(toString.call(json)).toEqual(TypeTags.JSON)
  })
})

describe('Map', () => {
  it('Should be defined', () => {
    expect(TypeTags.Map).toBeDefined()
  })

  it('Should match the type tag of a "Map" data type', () => {
    expect(getTag(map)).toEqual(TypeTags.Map)
    expect(toString.call(map)).toEqual(TypeTags.Map)
  })
})

describe('Map Iterator', () => {
  it('Should be defined', () => {
    expect(TypeTags['Map.Iterator']).toBeDefined()
  })

  it('Should match the type tag of a "Map Iterator" data type', () => {
    expect(getTag(map.values())).toEqual(TypeTags['Map.Iterator'])
    expect(toString.call(map.values())).toEqual(TypeTags['Map.Iterator'])
  })
})

describe('Math', () => {
  it('Should be defined', () => {
    expect(TypeTags.Math).toBeDefined()
  })

  it('Should match the type tag of a "Math" data type', () => {
    expect(getTag(math)).toEqual(TypeTags.Math)
    expect(toString.call(math)).toEqual(TypeTags.Math)
  })
})

describe('NaN', () => {
  it('Should be defined', () => {
    expect(TypeTags.NaN).toBeDefined()
  })

  it('Should match the type tag of a "Null" data type', () => {
    expect(getTag(NaN)).toEqual(TypeTags.NaN)
    expect(toString.call(NaN)).toEqual(TypeTags.NaN)
  })
})

describe('Null', () => {
  it('Should be defined', () => {
    expect(TypeTags.Null).toBeDefined()
  })

  it('Should match the type tag of a "Null" data type', () => {
    expect(getTag(nulll)).toEqual(TypeTags.Null)
    expect(toString.call(nulll)).toEqual(TypeTags.Null)
  })
})

describe('Number', () => {
  it('Should be defined', () => {
    expect(TypeTags.Number).toBeDefined()
  })

  it('Should match the type tag of a "Number" data type', () => {
    expect(getTag(number)).toEqual(TypeTags.Number)
    expect(toString.call(number)).toEqual(TypeTags.Number)
  })
})

describe('Object', () => {
  it('Should be defined', () => {
    expect(TypeTags.Object).toBeDefined()
  })

  it('Should match the type tag of an "Object" data type', () => {
    expect(getTag(object)).toEqual(TypeTags.Object)
    expect(toString.call(object)).toEqual(TypeTags.Object)
  })
})

describe('Process', () => {
  it('Should be defined', () => {
    expect(TypeTags.Process).toBeDefined()
  })

  it('Should match the type tag of an "Promise" data type', () => {
    expect(getTag(process)).toEqual(TypeTags.Process)
    expect(toString.call(process)).toEqual(TypeTags.Process)
  })
})

describe('Promise', () => {
  it('Should be defined', () => {
    expect(TypeTags.Promise).toBeDefined()
  })

  it('Should match the type tag of an "Promise" data type', () => {
    expect(getTag(promise)).toEqual(TypeTags.Promise)
    expect(toString.call(promise)).toEqual(TypeTags.Promise)
  })
})

describe('RangeError', () => {
  it('Should be defined', () => {
    expect(TypeTags.RangeError).toBeDefined()
  })

  it('Should match the type tag of an "RangeError" data type', () => {
    expect(getTag(rangeError)).toEqual(TypeTags.RangeError)
    expect(toString.call(rangeError)).toEqual(TypeTags.RangeError)
  })
})

describe('ReferenceError', () => {
  it('Should be defined', () => {
    expect(TypeTags.ReferenceError).toBeDefined()
  })

  it('Should match the type tag of an "ReferenceError" data type', () => {
    expect(getTag(referenceError)).toEqual(TypeTags.ReferenceError)
    expect(toString.call(referenceError)).toEqual(TypeTags.ReferenceError)
  })
})

describe('Reflect', () => {
  it('Should be defined', () => {
    expect(TypeTags.Reflect).toBeDefined()
  })

  it('Should match the type tag of an "Reflect" data type', () => {
    expect(getTag(Reflect)).toEqual(TypeTags.Reflect)
    expect(toString.call(Reflect)).toEqual(TypeTags.Reflect)
  })
})

describe('RegExp', () => {
  it('Should be defined', () => {
    expect(TypeTags.RegExp).toBeDefined()
  })

  it('Should match the type tag of a "RegExp" data type', () => {
    expect(getTag(regex)).toEqual(TypeTags.RegExp)
    expect(toString.call(regex)).toEqual(TypeTags.RegExp)
  })
})

describe('Set', () => {
  it('Should be defined', () => {
    expect(TypeTags.Set).toBeDefined()
  })

  it('Should match the type tag of a "Set" data type', () => {
    expect(getTag(set)).toEqual(TypeTags.Set)
    expect(toString.call(set)).toEqual(TypeTags.Set)
  })
})

describe('Set Iterator', () => {
  it('Should be defined', () => {
    expect(TypeTags['Set.Iterator']).toBeDefined()
  })

  it('Should match the type tag of a "Set Iterator" data type', () => {
    expect(getTag(set.values())).toEqual(TypeTags['Set.Iterator'])
    expect(toString.call(set.values())).toEqual(TypeTags['Set.Iterator'])
  })
})

describe('SharedArrayBuffer', () => {
  it('Should be defined', () => {
    expect(TypeTags.SharedArrayBuffer).toBeDefined()
  })

  it('Should match the type tag of a "SharedArrayBuffer" data type', () => {
    expect(getTag(sharedArrayBuffer)).toEqual(TypeTags.SharedArrayBuffer)
    expect(toString.call(sharedArrayBuffer)).toEqual(TypeTags.SharedArrayBuffer)
  })
})

describe('String', () => {
  it('Should be defined', () => {
    expect(TypeTags.String).toBeDefined()
  })

  it('Should match the type tag of a "String" data type', () => {
    expect(getTag(string)).toEqual(TypeTags.String)
    expect(toString.call(string)).toEqual(TypeTags.String)
  })
})

describe('String Iterator', () => {
  it('Should be defined', () => {
    expect(TypeTags['String.Iterator']).toBeDefined()
  })

  it('Should match the type tag of an "String Iterator" data type', () => {
    expect(getTag(string[Symbol.iterator]())).toEqual(
      TypeTags['String.Iterator']
    )
    expect(toString.call(string[Symbol.iterator]())).toEqual(
      TypeTags['String.Iterator']
    )
  })
})

describe('Symbol', () => {
  it('Should be defined', () => {
    expect(TypeTags.Symbol).toBeDefined()
  })

  it('Should match the type tag of a "Symbol" data type', () => {
    expect(getTag(symbol)).toEqual(TypeTags.Symbol)
    expect(toString.call(symbol)).toEqual(TypeTags.Symbol)
  })
})

describe('SyntaxError', () => {
  it('Should be defined', () => {
    expect(TypeTags.SyntaxError).toBeDefined()
  })

  it('Should match the type tag of a "SyntaxError" data type', () => {
    expect(getTag(syntaxError)).toEqual(TypeTags.SyntaxError)
    expect(toString.call(syntaxError)).toEqual(TypeTags.SyntaxError)
  })
})

describe('TypeError', () => {
  it('Should be defined', () => {
    expect(TypeTags.TypeError).toBeDefined()
  })

  it('Should match the type tag of a "TypeError" data type', () => {
    expect(getTag(typeError)).toEqual(TypeTags.TypeError)
    expect(toString.call(typeError)).toEqual(TypeTags.TypeError)
  })
})

describe('TextDecoder', () => {
  it('Should be defined', () => {
    expect(TypeTags.TextDecoder).toBeDefined()
  })

  it('Should match the type tag of a "TextDecoder" data type', () => {
    expect(getTag(textDecoder)).toEqual(TypeTags.TextDecoder)
    expect(toString.call(textDecoder)).toEqual(TypeTags.TextDecoder)
  })
})

describe('TextEncoder', () => {
  it('Should be defined', () => {
    expect(TypeTags.TextEncoder).toBeDefined()
  })

  it('Should match the type tag of a "TextEncoder" data type', () => {
    expect(getTag(textEncoder)).toEqual(TypeTags.TextEncoder)
    expect(toString.call(textEncoder)).toEqual(TypeTags.TextEncoder)
  })
})

describe('Uint8Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.Uint8Array).toBeDefined()
  })

  it('Should match the type tag of an "Uint8Array" data type', () => {
    expect(getTag(uint8array)).toEqual(TypeTags.Uint8Array)
    expect(toString.call(uint8array)).toEqual(TypeTags.Uint8Array)
  })
})

describe('Uint8ClampedArray', () => {
  it('Should be defined', () => {
    expect(TypeTags.Uint8ClampedArray).toBeDefined()
  })

  it('Should match the type tag of an "Uint8ClampedArray" data type', () => {
    expect(getTag(uint8clamped)).toEqual(TypeTags.Uint8ClampedArray)
    expect(toString.call(uint8clamped)).toEqual(TypeTags.Uint8ClampedArray)
  })
})

describe('Uint16Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.Uint16Array).toBeDefined()
  })

  it('Should match the type tag of an "Uint16Array" data type', () => {
    expect(getTag(uint16array)).toEqual(TypeTags.Uint16Array)
    expect(toString.call(uint16array)).toEqual(TypeTags.Uint16Array)
  })
})

describe('Uint32Array', () => {
  it('Should be defined', () => {
    expect(TypeTags.Uint32Array).toBeDefined()
  })

  it('Should match the type tag of an "Uint32Array" data type', () => {
    expect(getTag(uint32array)).toEqual(TypeTags.Uint32Array)
    expect(toString.call(uint32array)).toEqual(TypeTags.Uint32Array)
  })
})

describe('Undefined', () => {
  it('Should be defined', () => {
    expect(TypeTags.Undefined).toBeDefined()
  })

  it('Should match the type tag of an "Undefined" data type', () => {
    expect(getTag(undefinedd)).toEqual(TypeTags.Undefined)
    expect(toString.call(undefinedd)).toEqual(TypeTags.Undefined)
  })
})

describe('URIError', () => {
  it('Should be defined', () => {
    expect(TypeTags.URIError).toBeDefined()
  })

  it('Should match the type tag of an "URIError" data type', () => {
    expect(getTag(uriError)).toEqual(TypeTags.URIError)
    expect(toString.call(uriError)).toEqual(TypeTags.URIError)
  })
})

describe('URL', () => {
  it('Should be defined', () => {
    expect(TypeTags.URL).toBeDefined()
  })

  it('Should match the type tag of an "URL" data type', () => {
    expect(getTag(url)).toEqual(TypeTags.URL)
    expect(toString.call(url)).toEqual(TypeTags.URL)
  })
})

describe('URLSearchParams', () => {
  it('Should be defined', () => {
    expect(TypeTags.URLSearchParams).toBeDefined()
  })

  it('Should match the type tag of an "URLSearchParams" data type', () => {
    expect(getTag(urlSearch)).toEqual(TypeTags.URLSearchParams)
    expect(toString.call(urlSearch)).toEqual(TypeTags.URLSearchParams)
  })
})

describe('WeakMap', () => {
  it('Should be defined', () => {
    expect(TypeTags.WeakMap).toBeDefined()
  })

  it('Should match the type tag of a "WeakMap" data type', () => {
    expect(getTag(weakmap)).toEqual(TypeTags.WeakMap)
    expect(toString.call(weakmap)).toEqual(TypeTags.WeakMap)
  })
})

describe('WeakRef', () => {
  it('Should be defined', () => {
    expect(TypeTags.WeakRef).toBeDefined()
  })

  it('Should match the type tag of a "WeakRef" data type', () => {
    expect(getTag(weakref)).toEqual(TypeTags.WeakRef)
    expect(toString.call(weakref)).toEqual(TypeTags.WeakRef)
  })
})

describe('WeakSet', () => {
  it('Should be defined', () => {
    expect(TypeTags.WeakSet).toBeDefined()
  })

  it('Should match the type tag of a "WeakSet" data type', () => {
    expect(getTag(weakset)).toEqual(TypeTags.WeakSet)
    expect(toString.call(weakset)).toEqual(TypeTags.WeakSet)
  })
})

describe('WebAssembly', () => {
  it('Should be defined', () => {
    expect(TypeTags.WebAssembly).toBeDefined()
  })

  it('Should match the type tag of a "WebAssembly" data type', () => {
    expect(getTag(wasm)).toEqual(TypeTags.WebAssembly)
    expect(toString.call(wasm)).toEqual(TypeTags.WebAssembly)
  })
})

describe('WebAssembly.Module', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.Module']).toBeDefined()
  })

  it('Should match the type tag of a "WebAssembly.Module" data type', () => {
    expect(getTag(wasmModule)).toEqual(TypeTags['WebAssembly.Module'])
    expect(toString.call(wasmModule)).toEqual(TypeTags['WebAssembly.Module'])
  })
})

describe('WebAssembly.Global', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.Global']).toBeDefined()
  })

  it('Should match the type tag of a "WebAssembly.Global" data type', () => {
    expect(getTag(wasmGlobal)).toEqual(TypeTags['WebAssembly.Global'])
    expect(toString.call(wasmGlobal)).toEqual(TypeTags['WebAssembly.Global'])
  })
})

describe('WebAssembly.Instance', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.Instance']).toBeDefined()
  })

  it('Should match the type tag of a "WebAssembly.Instance" data type', () => {
    expect(getTag(wasmInstance)).toEqual(TypeTags['WebAssembly.Instance'])
    expect(toString.call(wasmInstance)).toEqual(
      TypeTags['WebAssembly.Instance']
    )
  })
})

describe('WebAssembly.Memory', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.Memory']).toBeDefined()
  })

  it('Should match the type tag of a "WebAssembly.Memory" data type', () => {
    expect(getTag(wasmMemory)).toEqual(TypeTags['WebAssembly.Memory'])
    expect(toString.call(wasmMemory)).toEqual(TypeTags['WebAssembly.Memory'])
  })
})

describe('WebAssembly.Table', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.Table']).toBeDefined()
  })

  it('Should match the type tag of a "WebAssembly.Table" data type', () => {
    expect(getTag(wasmTable)).toEqual(TypeTags['WebAssembly.Table'])
    expect(toString.call(wasmTable)).toEqual(TypeTags['WebAssembly.Table'])
  })
})

describe('WebAssembly.CompileError', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.CompileError']).toBeDefined()
  })

  it('Should match the type tag of a "WebAssembly.CompileError" data type', () => {
    expect(getTag(wasmCompileError)).toEqual(
      TypeTags['WebAssembly.CompileError']
    )
    expect(toString.call(wasmCompileError)).toEqual(
      TypeTags['WebAssembly.CompileError']
    )
  })
})

describe('WebAssembly.LinkError', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.LinkError']).toBeDefined()
  })

  it('Should match the type tag of a "WebAssembly.LinkError" data type', () => {
    expect(getTag(wasmLinkError)).toEqual(TypeTags['WebAssembly.LinkError'])
    expect(toString.call(wasmLinkError)).toEqual(
      TypeTags['WebAssembly.LinkError']
    )
  })
})

describe('WebAssembly.RuntimeError', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.RuntimeError']).toBeDefined()
  })

  it('Should match the type tag of a "WebAssembly.RuntimeError" data type', () => {
    expect(getTag(wasmRuntimeError)).toEqual(
      TypeTags['WebAssembly.RuntimeError']
    )
    expect(toString.call(wasmRuntimeError)).toEqual(
      TypeTags['WebAssembly.RuntimeError']
    )
  })
})
