import { TypeTags } from './type-tags'
import { hasDefaultTag, isDefaultTag, hasToStringMethod } from './predicates'
import * as P from './predicates'

const object = { foo: 'bar' }
const validTag = '[object Function]'
const invalidTag = '[object Hey]'

describe('hasDefaultTag', () => {
  it('Should be defined', () => {
    expect(hasDefaultTag).toBeDefined()
  })

  it('Should return "true" if the argument has a default tag', () => {
    expect(hasDefaultTag(object)).toBeTrue()
    expect(isDefaultTag(object.toString())).toBeTrue()
  })

  it('Should return "false" if the argument does NOT have a default tag', () => {
    function User(name) {
      this.name = name
    }

    const jack = new User('Jack')

    User.prototype.toString = function () {
      return `${this.name}`
    }

    expect(isDefaultTag(jack.toString())).toBeFalse()
    expect(hasDefaultTag(jack)).toBeFalse()
  })
})

describe('hasToStringMethod', () => {
  it('Should be defined', () => {
    expect(hasToStringMethod).toBeDefined()
  })

  it('Should check if the argument has a "toString" method that is also a function', () => {
    expect(hasToStringMethod(Object.create({}))).toBeTrue()
    expect(hasToStringMethod(Object.create(null))).toBeFalse()
  })
})

describe('isDefaultTag', () => {
  it('Should be defined', () => {
    expect(isDefaultTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default tag value', () => {
    expect(isDefaultTag(validTag)).toBeTrue()
    expect(isDefaultTag(invalidTag)).toBeFalse()
  })
})

describe('isAggregateErrorTag', () => {
  it('Should be defined', () => {
    expect(P.isAggregateErrorTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default AggregateError typetag', () => {
    expect(P.isAggregateErrorTag(invalidTag)).toBeFalse()
    expect(P.isAggregateErrorTag(TypeTags.AggregateError)).toBeTrue()
  })
})

describe('isArgumentsTag', () => {
  it('Should be defined', () => {
    expect(P.isArgumentsTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Arguments typetag', () => {
    expect(P.isArgumentsTag(invalidTag)).toBeFalse()
    expect(P.isArgumentsTag(TypeTags.Arguments)).toBeTrue()
  })
})

describe('isArrayTag', () => {
  it('Should be defined', () => {
    expect(P.isArrayTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Array typetag', () => {
    expect(P.isArrayTag(invalidTag)).toBeFalse()
    expect(P.isArrayTag(TypeTags.Array)).toBeTrue()
  })
})

describe('isArrayBufferTag', () => {
  it('Should be defined', () => {
    expect(P.isArrayBufferTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default ArrayBuffer typetag', () => {
    expect(P.isArrayBufferTag(invalidTag)).toBeFalse()
    expect(P.isArrayBufferTag(TypeTags.ArrayBuffer)).toBeTrue()
  })
})

describe('isAsyncFunctionTag', () => {
  it('Should be defined', () => {
    expect(P.isAsyncFunctionTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default AsyncFunction typetag', () => {
    expect(P.isAsyncFunctionTag(invalidTag)).toBeFalse()
    expect(P.isAsyncFunctionTag(TypeTags.AsyncFunction)).toBeTrue()
  })
})

describe('isAtomicsTag', () => {
  it('Should be defined', () => {
    expect(P.isAtomicsTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Atomics typetag', () => {
    expect(P.isAtomicsTag(invalidTag)).toBeFalse()
    expect(P.isAtomicsTag(TypeTags.Atomics)).toBeTrue()
  })
})

describe('isBigIntTag', () => {
  it('Should be defined', () => {
    expect(P.isBigIntTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default BigInt typetag', () => {
    expect(P.isBigIntTag(invalidTag)).toBeFalse()
    expect(P.isBigIntTag(TypeTags.BigInt)).toBeTrue()
    expect(P.isBigIntTag(TypeTags.BigInt64Array)).toBeTrue()
    expect(P.isBigIntTag(TypeTags.BigUint64Array)).toBeTrue()
  })
})

describe('isBigInt64ArrayTag', () => {
  it('Should be defined', () => {
    expect(P.isBigInt64ArrayTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default BigInt64Array typetag', () => {
    expect(P.isBigInt64ArrayTag(invalidTag)).toBeFalse()
    expect(P.isBigInt64ArrayTag(TypeTags.BigInt64Array)).toBeTrue()
  })
})

describe('isBigUint64ArrayTag', () => {
  it('Should be defined', () => {
    expect(P.isBigUint64ArrayTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default BitUint64Array typetag', () => {
    expect(P.isBigUint64ArrayTag(invalidTag)).toBeFalse()
    expect(P.isBigUint64ArrayTag(TypeTags.BigUint64Array)).toBeTrue()
  })
})

describe('isBooleanTag', () => {
  it('Should be defined', () => {
    expect(P.isBooleanTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Boolean typetag', () => {
    expect(P.isBooleanTag(invalidTag)).toBeFalse()
    expect(P.isBooleanTag(TypeTags.Boolean)).toBeTrue()
  })
})

describe('isConsoleTag', () => {
  it('Should be defined', () => {
    expect(P.isConsoleTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Console typetag', () => {
    expect(P.isConsoleTag(invalidTag)).toBeFalse()
    expect(P.isConsoleTag(TypeTags.Console)).toBeTrue()
  })
})

describe('isDataViewTag', () => {
  it('Should be defined', () => {
    expect(P.isDataViewTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default DataView typetag', () => {
    expect(P.isDataViewTag(invalidTag)).toBeFalse()
    expect(P.isDataViewTag(TypeTags.DataView)).toBeTrue()
  })
})

describe('isDateTag', () => {
  it('Should be defined', () => {
    expect(P.isDateTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Date typetag', () => {
    expect(P.isDateTag(invalidTag)).toBeFalse()
    expect(P.isDateTag(TypeTags.Date)).toBeTrue()
  })
})

describe('isErrorTag', () => {
  it('Should be defined', () => {
    expect(P.isErrorTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Error typetag', () => {
    expect(P.isErrorTag(invalidTag)).toBeFalse()
    expect(P.isErrorTag(TypeTags.Error)).toBeTrue()
  })
})

describe('isEvalErrorTag', () => {
  it('Should be defined', () => {
    expect(P.isEvalErrorTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default EvalError typetag', () => {
    expect(P.isEvalErrorTag(invalidTag)).toBeFalse()
    expect(P.isEvalErrorTag(TypeTags.EvalError)).toBeTrue()
  })
})

describe('isFinalizationRegistryTag', () => {
  it('Should be defined', () => {
    expect(P.isFinalizationRegistryTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default FinalizationRegistry typetag', () => {
    expect(P.isFinalizationRegistryTag(invalidTag)).toBeFalse()
    expect(
      P.isFinalizationRegistryTag(TypeTags.FinalizationRegistry)
    ).toBeTrue()
  })
})

describe('isFloat32ArrayTag', () => {
  it('Should be defined', () => {
    expect(P.isFloat32ArrayTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Float32Array typetag', () => {
    expect(P.isFloat32ArrayTag(invalidTag)).toBeFalse()
    expect(P.isFloat32ArrayTag(TypeTags.Float32Array)).toBeTrue()
  })
})

describe('isFloat64ArrayTag', () => {
  it('Should be defined', () => {
    expect(P.isFloat64ArrayTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Float64Array typetag', () => {
    expect(P.isFloat64ArrayTag(invalidTag)).toBeFalse()
    expect(P.isFloat64ArrayTag(TypeTags.Float64Array)).toBeTrue()
  })
})

describe('isFunctionTag', () => {
  it('Should be defined', () => {
    expect(P.isFunctionTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Function typetag', () => {
    expect(P.isFunctionTag(invalidTag)).toBeFalse()
    expect(P.isFunctionTag(TypeTags.Function)).toBeTrue()
  })
})

describe('isGeneratorTag', () => {
  it('Should be defined', () => {
    expect(P.isGeneratorTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Generator typetag', () => {
    expect(P.isGeneratorTag(invalidTag)).toBeFalse()
    expect(P.isGeneratorTag(TypeTags.Generator)).toBeTrue()
  })
})

describe('isGeneratorFunctionTag', () => {
  it('Should be defined', () => {
    expect(P.isGeneratorFunctionTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default GeneratorFunction typetag', () => {
    expect(P.isGeneratorFunctionTag(invalidTag)).toBeFalse()
    expect(P.isGeneratorFunctionTag(TypeTags.GeneratorFunction)).toBeTrue()
  })
})

describe('isGlobalThisTag', () => {
  it('Should be defined', () => {
    expect(P.isGlobalThisTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default globalThis typetag', () => {
    expect(P.isGlobalThisTag(invalidTag)).toBeFalse()
    expect(P.isGlobalThisTag(TypeTags.GlobalThis)).toBeTrue()
  })
})

describe('isInfinityTag', () => {
  it('Should be defined', () => {
    expect(P.isInfinityTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Infinity typetag', () => {
    expect(P.isInfinityTag('Infinity')).toBeTrue()
    expect(P.isInfinityTag(invalidTag)).toBeFalse()
    expect(P.isInfinityTag(TypeTags.Infinity)).toBeTrue()
  })
})

describe('isInt8ArrayTag', () => {
  it('Should be defined', () => {
    expect(P.isInt8ArrayTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Int8Array typetag', () => {
    expect(P.isInt8ArrayTag(invalidTag)).toBeFalse()
    expect(P.isInt8ArrayTag(TypeTags.Int8Array)).toBeTrue()
  })
})

describe('isInt16ArrayTag', () => {
  it('Should be defined', () => {
    expect(P.isInt16ArrayTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Int16Array typetag', () => {
    expect(P.isInt16ArrayTag(invalidTag)).toBeFalse()
    expect(P.isInt16ArrayTag(TypeTags.Int16Array)).toBeTrue()
  })
})

describe('isInt32ArrayTag', () => {
  it('Should be defined', () => {
    expect(P.isInt32ArrayTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Int32Array typetag', () => {
    expect(P.isInt32ArrayTag(invalidTag)).toBeFalse()
    expect(P.isInt32ArrayTag(TypeTags.Int32Array)).toBeTrue()
  })
})

describe('isIntlTag', () => {
  it('Should be defined', () => {
    expect(P.isIntlTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Intl typetag', () => {
    expect(P.isIntlTag(invalidTag)).toBeFalse()
    expect(P.isIntlTag(TypeTags.Intl)).toBeTrue()
    expect(P.isIntlTag(TypeTags['Intl.Collator'])).toBeTrue()
    expect(P.isIntlTag(TypeTags['Intl.DateTimeFormat'])).toBeTrue()
    expect(P.isIntlTag(TypeTags['Intl.ListFormat'])).toBeTrue()
    expect(P.isIntlTag(TypeTags['Intl.Locale'])).toBeTrue()
    expect(P.isIntlTag(TypeTags['Intl.NumberFormat'])).toBeTrue()
    expect(P.isIntlTag(TypeTags['Intl.PluralRules'])).toBeTrue()
    expect(P.isIntlTag(TypeTags['Intl.RelativeTimeFormat'])).toBeTrue()
  })
})

describe('isIteratorTag', () => {
  it('Should be defined', () => {
    expect(P.isIteratorTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Iterator typetag', () => {
    let arrayIterator = ['Array'][Symbol.iterator]()
    let stringIterator = 'String'[Symbol.iterator]()
    expect(P.isIteratorTag(invalidTag)).toBeFalse()
    expect(P.isIteratorTag(TypeTags['Set.Iterator'])).toBeTrue()
    expect(P.isIteratorTag(TypeTags['Map.Iterator'])).toBeTrue()
    expect(P.isIteratorTag(arrayIterator)).toBeTrue()
    expect(P.isIteratorTag(stringIterator)).toBeTrue()
  })
})

describe('isJsonTag', () => {
  it('Should be defined', () => {
    expect(P.isJsonTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default JSON typetag', () => {
    expect(P.isJsonTag(invalidTag)).toBeFalse()
    expect(P.isJsonTag(TypeTags.JSON)).toBeTrue()
  })
})

describe('isMapTag', () => {
  it('Should be defined', () => {
    expect(P.isMapTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Map typetag', () => {
    expect(P.isMapTag(invalidTag)).toBeFalse()
    expect(P.isMapTag(TypeTags.Map)).toBeTrue()
  })
})

describe('isMapIteratorTag', () => {
  it('Should be defined', () => {
    expect(P.isMapIteratorTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Map Iterator typetag', () => {
    expect(P.isMapIteratorTag(invalidTag)).toBeFalse()
    expect(P.isMapIteratorTag(TypeTags['Map.Iterator'])).toBeTrue()
  })
})

describe('isMathTag', () => {
  it('Should be defined', () => {
    expect(P.isMathTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Math typetag', () => {
    expect(P.isMathTag(invalidTag)).toBeFalse()
    expect(P.isMathTag(TypeTags.Math)).toBeTrue()
  })
})

describe('isNaNTag', () => {
  it('Should be defined', () => {
    expect(P.isNaNTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default NaN typetag', () => {
    expect(P.isNaNTag('NaN')).toBeTrue()
    expect(P.isNaNTag(invalidTag)).toBeFalse()
    expect(P.isNaNTag(TypeTags.NaN)).toBeTrue()
  })
})

describe('isNullTag', () => {
  it('Should be defined', () => {
    expect(P.isNullTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Null typetag', () => {
    expect(P.isNullTag(invalidTag)).toBeFalse()
    expect(P.isNullTag(TypeTags.Null)).toBeTrue()
  })
})

describe('isNumberTag', () => {
  it('Should be defined', () => {
    expect(P.isNumberTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Number typetag', () => {
    expect(P.isNumberTag(invalidTag)).toBeFalse()
    expect(P.isNumberTag(TypeTags.Number)).toBeTrue()
  })
})

describe('isObjectTag', () => {
  it('Should be defined', () => {
    expect(P.isObjectTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Object typetag', () => {
    expect(P.isObjectTag(invalidTag)).toBeFalse()
    expect(P.isObjectTag(TypeTags.Object)).toBeTrue()
  })
})

describe('isProcessTag', () => {
  it('Should be defined', () => {
    expect(P.isProcessTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Process typetag', () => {
    expect(P.isProcessTag(invalidTag)).toBeFalse()
    expect(P.isProcessTag(TypeTags.Process)).toBeTrue()
  })
})

describe('isPromiseTag', () => {
  it('Should be defined', () => {
    expect(P.isPromiseTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Promise typetag', () => {
    expect(P.isPromiseTag(invalidTag)).toBeFalse()
    expect(P.isPromiseTag(TypeTags.Promise)).toBeTrue()
  })
})

describe('isRangeErrorTag', () => {
  it('Should be defined', () => {
    expect(P.isRangeErrorTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default RangeError typetag', () => {
    expect(P.isRangeErrorTag(invalidTag)).toBeFalse()
    expect(P.isRangeErrorTag(TypeTags.RangeError)).toBeTrue()
  })
})

describe('isReferenceErrorTag', () => {
  it('Should be defined', () => {
    expect(P.isReferenceErrorTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default ReferenceError typetag', () => {
    expect(P.isReferenceErrorTag(invalidTag)).toBeFalse()
    expect(P.isReferenceErrorTag(TypeTags.ReferenceError)).toBeTrue()
  })
})

describe('isRegExpTag', () => {
  it('Should be defined', () => {
    expect(P.isRegExpTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default RegExp typetag', () => {
    expect(P.isRegExpTag(invalidTag)).toBeFalse()
    expect(P.isRegExpTag(TypeTags.RegExp)).toBeTrue()
  })
})

describe('isSetTag', () => {
  it('Should be defined', () => {
    expect(P.isSetTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Set typetag', () => {
    expect(P.isSetTag(invalidTag)).toBeFalse()
    expect(P.isSetTag(TypeTags.Set)).toBeTrue()
  })
})

describe('isSetIteratorTag', () => {
  it('Should be defined', () => {
    expect(P.isSetIteratorTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Set Iterator typetag', () => {
    expect(P.isSetIteratorTag(invalidTag)).toBeFalse()
    expect(P.isSetIteratorTag(TypeTags['Set.Iterator'])).toBeTrue()
  })
})

describe('isSharedArrayBufferTag', () => {
  it('Should be defined', () => {
    expect(P.isSharedArrayBufferTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default SharedArrayBuffer typetag', () => {
    expect(P.isSharedArrayBufferTag(invalidTag)).toBeFalse()
    expect(P.isSharedArrayBufferTag(TypeTags.SharedArrayBuffer)).toBeTrue()
  })
})

describe('isStringTag', () => {
  it('Should be defined', () => {
    expect(P.isStringTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default String typetag', () => {
    expect(P.isStringTag(invalidTag)).toBeFalse()
    expect(P.isStringTag(TypeTags.String)).toBeTrue()
  })
})

describe('isSymbolTag', () => {
  it('Should be defined', () => {
    expect(P.isSymbolTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Symbol typetag', () => {
    expect(P.isSymbolTag(invalidTag)).toBeFalse()
    expect(P.isSymbolTag(TypeTags.Symbol)).toBeTrue()
  })
})

describe('isSyntaxErrorTag', () => {
  it('Should be defined', () => {
    expect(P.isSyntaxErrorTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default SyntaxError typetag', () => {
    expect(P.isSyntaxErrorTag(invalidTag)).toBeFalse()
    expect(P.isSyntaxErrorTag(TypeTags.SyntaxError)).toBeTrue()
  })
})

describe('isTypedArrayTag', () => {
  it('Should be defined', () => {
    expect(P.isTypedArrayTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default TypedArray typetag', () => {
    expect(P.isTypedArrayTag(invalidTag)).toBeFalse()
    expect(P.isTypedArrayTag(TypeTags.Float32Array)).toBeTrue()
    expect(P.isTypedArrayTag(TypeTags.Float64Array)).toBeTrue()
    expect(P.isTypedArrayTag(TypeTags.Int8Array)).toBeTrue()
    expect(P.isTypedArrayTag(TypeTags.Int16Array)).toBeTrue()
    expect(P.isTypedArrayTag(TypeTags.Int32Array)).toBeTrue()
    expect(P.isTypedArrayTag(TypeTags.Uint8Array)).toBeTrue()
    expect(P.isTypedArrayTag(TypeTags.Uint8ClampedArray)).toBeTrue()
    expect(P.isTypedArrayTag(TypeTags.Uint16Array)).toBeTrue()
    expect(P.isTypedArrayTag(TypeTags.Uint32Array)).toBeTrue()
  })
})

describe('isTypeErrorTag', () => {
  it('Should be defined', () => {
    expect(P.isTypeErrorTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default TypeError typetag', () => {
    expect(P.isTypeErrorTag(invalidTag)).toBeFalse()
    expect(P.isTypeErrorTag(TypeTags.TypeError)).toBeTrue()
  })
})

describe('isUint8ArrayTag', () => {
  it('Should be defined', () => {
    expect(P.isUint8ArrayTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Uint8Array typetag', () => {
    expect(P.isUint8ArrayTag(invalidTag)).toBeFalse()
    expect(P.isUint8ArrayTag(TypeTags.Uint8Array)).toBeTrue()
  })
})

describe('isUint8ClampedArrayTag', () => {
  it('Should be defined', () => {
    expect(P.isUint8ClampedArrayTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Uint8ClampedArray typetag', () => {
    expect(P.isUint8ClampedArrayTag(invalidTag)).toBeFalse()
    expect(P.isUint8ClampedArrayTag(TypeTags.Uint8ClampedArray)).toBeTrue()
  })
})

describe('isUint16ArrayTag', () => {
  it('Should be defined', () => {
    expect(P.isUint16ArrayTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Uint16Array typetag', () => {
    expect(P.isUint16ArrayTag(invalidTag)).toBeFalse()
    expect(P.isUint16ArrayTag(TypeTags.Uint16Array)).toBeTrue()
  })
})

describe('isUint32ArrayTag', () => {
  it('Should be defined', () => {
    expect(P.isUint32ArrayTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Uint32Array typetag', () => {
    expect(P.isUint32ArrayTag(invalidTag)).toBeFalse()
    expect(P.isUint32ArrayTag(TypeTags.Uint32Array)).toBeTrue()
  })
})

describe('isUndefinedTag', () => {
  it('Should be defined', () => {
    expect(P.isUndefinedTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Undefined typetag', () => {
    expect(P.isUndefinedTag(invalidTag)).toBeFalse()
    expect(P.isUndefinedTag(TypeTags.Undefined)).toBeTrue()
  })
})

describe('isURIErrorTag', () => {
  it('Should be defined', () => {
    expect(P.isURIErrorTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default URIError typetag', () => {
    expect(P.isURIErrorTag(invalidTag)).toBeFalse()
    expect(P.isURIErrorTag(TypeTags.URIError)).toBeTrue()
  })
})

describe('isWeakMapTag', () => {
  it('Should be defined', () => {
    expect(P.isWeakMapTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default WeakMap typetag', () => {
    expect(P.isWeakMapTag(invalidTag)).toBeFalse()
    expect(P.isWeakMapTag(TypeTags.WeakMap)).toBeTrue()
  })
})

describe('isWeakRefTag', () => {
  it('Should be defined', () => {
    expect(P.isWeakRefTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default WeakRef typetag', () => {
    expect(P.isWeakRefTag(invalidTag)).toBeFalse()
    expect(P.isWeakRefTag(TypeTags.WeakRef)).toBeTrue()
  })
})

describe('isWeakSetTag', () => {
  it('Should be defined', () => {
    expect(P.isWeakSetTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default WeakSet typetag', () => {
    expect(P.isWeakSetTag(invalidTag)).toBeFalse()
    expect(P.isWeakSetTag(TypeTags.WeakSet)).toBeTrue()
  })
})

describe('isWasmTag', () => {
  it('Should be defined', () => {
    expect(P.isWasmTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default WebAssembly typetag', () => {
    expect(P.isWasmTag(invalidTag)).toBeFalse()
    expect(P.isWasmTag(TypeTags.WebAssembly)).toBeTrue()
    expect(P.isWasmTag(TypeTags['WebAssembly.CompileError'])).toBeTrue()
    expect(P.isWasmTag(TypeTags['WebAssembly.Global'])).toBeTrue()
    expect(P.isWasmTag(TypeTags['WebAssembly.Instance'])).toBeTrue()
    expect(P.isWasmTag(TypeTags['WebAssembly.LinkError'])).toBeTrue()
    expect(P.isWasmTag(TypeTags['WebAssembly.Memory'])).toBeTrue()
    expect(P.isWasmTag(TypeTags['WebAssembly.Module'])).toBeTrue()
    expect(P.isWasmTag(TypeTags['WebAssembly.RuntimeError'])).toBeTrue()
    expect(P.isWasmTag(TypeTags['WebAssembly.Table'])).toBeTrue()
  })
})

describe('isWasmCompileErrorTag', () => {
  it('Should be defined', () => {
    expect(P.isWasmCompileErrorTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default WebAssembly.CompileError typetag', () => {
    expect(P.isWasmCompileErrorTag(invalidTag)).toBeFalse()
    expect(
      P.isWasmCompileErrorTag(TypeTags['WebAssembly.CompileError'])
    ).toBeTrue()
  })
})

describe('isWasmModuleTag', () => {
  it('Should be defined', () => {
    expect(P.isWasmModuleTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default WebAssembly.Module typetag', () => {
    expect(P.isWasmModuleTag(invalidTag)).toBeFalse()
    expect(P.isWasmModuleTag(TypeTags['WebAssembly.Module'])).toBeTrue()
  })
})

describe('isWasmGlobalTag', () => {
  it('Should be defined', () => {
    expect(P.isWasmGlobalTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default WebAssembly.Global typetag', () => {
    expect(P.isWasmGlobalTag(invalidTag)).toBeFalse()
    expect(P.isWasmGlobalTag(TypeTags['WebAssembly.Global'])).toBeTrue()
  })
})

describe('isWasmInstanceTag', () => {
  it('Should be defined', () => {
    expect(P.isWasmInstanceTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default WebAssembly.Instance typetag', () => {
    expect(P.isWasmInstanceTag(invalidTag)).toBeFalse()
    expect(P.isWasmInstanceTag(TypeTags['WebAssembly.Instance'])).toBeTrue()
  })
})

describe('isWasmLinkErrorTag', () => {
  it('Should be defined', () => {
    expect(P.isWasmLinkErrorTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default WebAssembly.LinkError typetag', () => {
    expect(P.isWasmLinkErrorTag(invalidTag)).toBeFalse()
    expect(P.isWasmLinkErrorTag(TypeTags['WebAssembly.LinkError'])).toBeTrue()
  })
})

describe('isWasmMemoryTag', () => {
  it('Should be defined', () => {
    expect(P.isWasmMemoryTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default WebAssembly.Memory typetag', () => {
    expect(P.isWasmMemoryTag(invalidTag)).toBeFalse()
    expect(P.isWasmMemoryTag(TypeTags['WebAssembly.Memory'])).toBeTrue()
  })
})

describe('isWasmModuleTag', () => {
  it('Should be defined', () => {
    expect(P.isWasmModuleTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default WebAssembly.Module typetag', () => {
    expect(P.isWasmModuleTag(invalidTag)).toBeFalse()
    expect(P.isWasmModuleTag(TypeTags['WebAssembly.Module'])).toBeTrue()
  })
})

describe('isWasmRuntimeErrorTag', () => {
  it('Should be defined', () => {
    expect(P.isWasmRuntimeErrorTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default WebAssembly.RuntimeError typetag', () => {
    expect(P.isWasmRuntimeErrorTag(invalidTag)).toBeFalse()
    expect(
      P.isWasmRuntimeErrorTag(TypeTags['WebAssembly.RuntimeError'])
    ).toBeTrue()
  })
})

describe('isWasmTableTag', () => {
  it('Should be defined', () => {
    expect(P.isWasmTableTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default WebAssembly.Table typetag', () => {
    expect(P.isWasmTableTag(invalidTag)).toBeFalse()
    expect(P.isWasmTableTag(TypeTags['WebAssembly.Table'])).toBeTrue()
  })
})

describe('isWindowTag', () => {
  it('Should be defined', () => {
    expect(P.isWindowTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Window typetag', () => {
    expect(P.isWindowTag(invalidTag)).toBeFalse()
    expect(P.isWindowTag(TypeTags.Window)).toBeTrue()
  })
})

describe('isWorkerTag', () => {
  it('Should be defined', () => {
    expect(P.isWorkerTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default Worker typetag', () => {
    expect(P.isWorkerTag(invalidTag)).toBeFalse()
    expect(P.isWorkerTag(TypeTags.Worker)).toBeTrue()
  })
})
