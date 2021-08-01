# Node.js Object [TypeTags](https://github.com/moatorres/typetags)

String representations of objects in Node.js

This package contains a list of default string representations of [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) in Node.js, as returned from `Object.prototype.toString.call(value)` — [see the full list here](https://github.com/moatorres/typetags/blob/master/lib/type-tags.js).

## Installation

NPM

```sh
npm install typetags
```

Yarn

```sh
yarn add typetags
```

Check the reference [here](https://github.com/moatorres/typetags#reference)

## Usage ⚡️

#### Using `typetags` to detect object class

Every object has a `toString()` method that is automatically called when the object is to be represented as a text value or when an object is referred to in a manner in which a string is expected.

By default, the `toString()` method is inherited by every object descended from `Object`. If this method is not overridden in a custom object, `toString()` returns "`[object type]`", where `type` is the object type. The following code illustrates this:

```js
const o = new Object()
o.toString() // → [object Object]
```

<sup>See [Mozilla MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString#description)</sup>

Although using `toString()` in this way is unreliable, as **objects can change the behavior of `Object.prototype.toString()`** this library might be helpful when you need to compare objects' tags inside a procedure call or if you just need a quick reference.

```js
import { TypeTags } from 'typetags'

const o = { foo: 'bar' }

if (o.toString() === TypeTags.Object) {
  doSomething()
}
```

#### Bundles

`esm`

```js
import { isDefaultTag } from 'typetags'
```

`cjs`

```js
const { isDefaultTag } = require('typetags')
```

`umd`

```html
<script src="dist/umd/typetags.min.js"></script>
```

## Reference

#### `TypeTags`

- Object containing all available tags

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Array) // → [object Array]
console.log(TypeTags.Function) // → [object Function]
console.log(TypeTags.Float64Array) // → [object Float64Array]
```

**It has convenience methods (predicates) to assert objects' type tags:**

#### `isDefaultTag()` ⚡️

- Checks if a string is a native default tag

```js
import { isDefaultTag } from 'typetags'

console.log(isDefaultTag('[object Hey]')) // → false
console.log(isDefaultTag('[object Function]')) // → true
```

#### `hasDefaultTag()` ⚡️

- Checks if the received data type has a native default tag

```js
import { hasDefaultTag } from 'typetags'

function User(name) {
  this.name = name
}

User.prototype.toString = function () {
  return `${this.name}`
}

const jack = new User('Jack')

console.log(hasDefaultTag(jack)) // → false
console.log(hasDefaultTag([1, 2, 3])) // → true
```

#### `hasToStringMethod()` ⚡️

- Checks if the received data type has "toString" function method

```js
import { hasToStringMethod } from 'typetags'

console.log(hasToStringMethod(Object.create(null))) // → false
console.log(hasToStringMethod(Object.create({}))) // → true
```

<details>
  <summary>See All Available Predicates</summary>

#### `String → Boolean`

##### `isAggregateErrorTag()` ⚡️

- Checks if _value_ is a default `AggregateError` typetag

```js
const { isAggregateErrorTag } = require('typetags')

let err = new AggregateError([])

console.log(isAggregateErrorTag(err.toString())) // → false
console.log(isAggregateErrorTag('[object Error]')) // → false
```

##### `isArgumentsTag()` ⚡️

- Checks if _value_ is a default `arguments` typetag

```js
const { isArgumentsTag } = require('typetags')

let tag
;(function any() {
  tag = Object.prototype.toString.call(arguments)
  return
})()

console.log(isArgumentsTag(tag)) // → true
console.log(isArgumentsTag('[object Error]')) // → false
```

##### `isArrayTag()` ⚡️

- Checks if _value_ is a default `Array` typetag

```js
const { isArrayTag } = require('typetags')

console.log(isArrayTag(Object.create(null))) // → false
console.log(isArrayTag(Object.create({}))) // → true
```

##### `isArrayBufferTag()` ⚡️

- Checks if _value_ is a default `ArrayBuffer` typetag

```js
const { isArrayBufferTag } = require('typetags')

console.log(isArrayBufferTag('[object Error]')) // → false
console.log(isArrayBufferTag('[object ArrayBuffer]')) // → true
```

##### `isAsyncFunctionTag()` ⚡️

- Checks if _value_ is a default `AsyncFunction` typetag

```js
const { isAsyncFunctionTag } = require('typetags')

let fn = async () => 'oh, hi!'

console.log(isAsyncFunctionTag(fn.toString())) // → false
console.log(isAsyncFunctionTag('[object AsyncFunction]')) // → true
```

##### `isAtomicsTag()` ⚡️

- Checks if _value_ is a default `Atomics` typetag

```js
const { isAtomicsTag } = require('typetags')

console.log(isAtomicsTag('[object Error]')) // → false
console.log(isAtomicsTag('[object Atomics]')) // → true
```

##### `isBigIntTag()` ⚡️

- Checks if _value_ is a default `BigInt` typetag

```js
const { isBigIntTag } = require('typetags')

console.log(isBigIntTag('[object BigInt]')) // → true
console.log(isBigIntTag('[object BigInt64Array]')) // → true
```

##### `isBigInt64ArrayTag()` ⚡️

- Checks if _value_ is a default `BigInt64Array` typetag

```js
const { isBigInt64ArrayTag } = require('typetags')

console.log(isBigInt64ArrayTag('[object Error]')) // → false
console.log(isBigInt64ArrayTag('[object BigInt64Array]')) // → true
```

##### `isBigUint64ArrayTag()` ⚡️

- Checks if _value_ is a default `BigUint64Array` typetag

```js
const { isBigUint64ArrayTag } = require('typetags')

console.log(isBigUint64ArrayTag('[object Error]')) // → false
console.log(isBigUint64ArrayTag('[object BigUint64Array]')) // → true
```

##### `isBooleanTag()` ⚡️

- Checks if _value_ is a default `Boolean` typetag

```js
const { isBooleanTag } = require('typetags')

console.log(isBooleanTag('[object Error]')) // → false
console.log(isBooleanTag('[object Boolean]')) // → true
```

##### `isDataViewTag()` ⚡️

- Checks if _value_ is a default `DataView` typetag

```js
const { isDataViewTag } = require('typetags')

console.log(isDataViewTag('[object Error]')) // → false
console.log(isDataViewTag('[object DataView]')) // → true
```

##### `isDateTag()` ⚡️

- Checks if _value_ is a default `Date` typetag

```js
const { isDateTag } = require('typetags')

console.log(isDateTag('[object Error]')) // → false
console.log(isDateTag('[object Date]')) // → true
```

##### `isErrorTag()` ⚡️

- Checks if _value_ is a default `Error` typetag

```js
const { isErrorTag, TypeTags } = require('typetags')

console.log(isErrorTag('[object Error]')) // → true
console.log(isErrorTag(TypeTags.TypeError)) // → true
```

##### `isEvalErrorTag()` ⚡️

- Checks if _value_ is a default `EvalError` typetag

```js
const { isEvalErrorTag } = require('typetags')

console.log(isEvalErrorTag('[object Error]')) // → false
console.log(isEvalErrorTag('[object EvalError]')) // → false
```

##### `isFinalizationRegistryTag()` ⚡️

- Checks if _value_ is a default `FinalizationRegistry` typetag

```js
const { isFinalizationRegistryTag } = require('typetags')

console.log(isFinalizationRegistryTag('[object Error]')) // → false
console.log(isFinalizationRegistryTag('[object FinalizationRegistry]')) // → true
```

##### `isFloat32ArrayTag()` ⚡️

- Checks if _value_ is a default `Float32Array` typetag

```js
const { isFloat32ArrayTag } = require('typetags')

console.log(isFloat32ArrayTag('[object Error]')) // → false
console.log(isFloat32ArrayTag('[object Float32Array]')) // → true
```

##### `isFloat64ArrayTag()` ⚡️

- Checks if _value_ is a default `arguments` typetag

```js
const { isFloat64ArrayTag } = require('typetags')

console.log(isFloat64ArrayTag('[object Error]')) // → false
console.log(isFloat64ArrayTag('[object Float64Array]')) // → true
```

##### `isFunctionTag()` ⚡️

- Checks if _value_ is a default `Function` typetag

```js
const { isFunctionTag } = require('typetags')

let fn = () => 'hey!'

console.log(isFunctionTag(fn.toString())) // → false
console.log(isFunctionTag(Object.prototype.toString.call(fn))) // → true
```

##### `isGeneratorTag()` ⚡️

- Checks if _value_ is a default `Generator` typetag

```js
const { isGeneratorTag } = require('typetags')

function* gene() {
  yield 1
}

let gen = gene()
let tag = Object.prototype.toString.call(gen)

console.log(isGeneratorTag(tag)) // → true
console.log(isGeneratorTag('[object GeneratorFunction]')) // → false
```

##### `isGeneratorFunctionTag()` ⚡️

- Checks if _value_ is a default `GeneratorFunction` typetag

```js
const { isGeneratorFunctionTag } = require('typetags')

function* gene() {
  yield 1
}

let res = Object.prototype.toString.call(gene)

console.log(isGeneratorFunctionTag(gene.toString())) // → false
console.log(isGeneratorFunctionTag(res)) // → true
```

##### `isGlobalThisTag()` ⚡️

- Checks if _value_ is a default `globalThis` typetag

```js
const { isGlobalThisTag } = require('typetags')

console.log(isGlobalThisTag('[object GlobalThis]')) // → false
console.log(isGlobalThisTag('[object Window]')) // → true
```

##### `isInfinityTag()` ⚡️

- Checks if _value_ is a default `Infinity` typetag

```js
const { isInfinityTag } = require('typetags')

console.log(isInfinityTag('[object Number]')) // → true
console.log(isInfinityTag('[object Infinity]')) // → false
```

##### `isInt8ArrayTag()` ⚡️

- Checks if _value_ is a default `Int8Array` typetag

```js
const { isInt8ArrayTag } = require('typetags')

console.log(isInt8ArrayTag('[object Error]')) // → false
console.log(isInt8ArrayTag('[object Int8Array]')) // → true
```

##### `isInt16ArrayTag()` ⚡️

- Checks if _value_ is a default `Int16Array` typetag

```js
const { isInt16ArrayTag } = require('typetags')

console.log(isInt16ArrayTag('[object Error]')) // → false
console.log(isInt16ArrayTag('[object Int16Array]')) // → true
```

##### `isInt32ArrayTag()` ⚡️

- Checks if _value_ is a default `Int32Array` typetag

```js
const { isInt32ArrayTag } = require('typetags')

console.log(isInt32ArrayTag('[object Number]')) // → false
console.log(isInt32ArrayTag('[object Int32Array]')) // → true
```

##### `isIntlTag()` ⚡️

- Checks if _value_ is a default `Intl` typetag

```js
const { isIntlTag } = require('typetags')

console.log(isIntlTag('[object Intl]')) // → true
console.log(isIntlTag('[object Intl.Collator]')) // → true
console.log(isIntlTag(TypeTags['Intl.Module'])) // → true
```

##### `isIntlCollatorTag()` ⚡️

- Checks if _value_ is a default `Intl.Collator` typetag

```js
const { isIntlCollatorTag } = require('typetags')

console.log(isIntlCollatorTag('[object Error]')) // → false
console.log(isIntlCollatorTag('[object IntlCollator]')) // → true
```

##### `isIntlDateTimeFormatTag()` ⚡️

- Checks if _value_ is a default `Intl.DateTimeFormat` typetag

```js
const { isIntlDateTimeFormatTag } = require('typetags')

console.log(isIntlDateTimeFormatTag('[object Intl]')) // → false
console.log(isIntlDateTimeFormatTag('[object Intl.DateTimeFormat]')) // → true
```

##### `isIntlListFormatTag()` ⚡️

- Checks if _value_ is a default `Intl.ListFormat` typetag

```js
const { isIntlListFormatTag } = require('typetags')

console.log(isIntlListFormatTag('[object Intl]')) // → false
console.log(isIntlListFormatTag('[object Intl.ListFormat]')) // → true
```

##### `isIntlLocaleTag()` ⚡️

- Checks if _value_ is a default `Intl.Locale` typetag

```js
const { isIntlLocaleTag } = require('typetags')

console.log(isIntlLocaleTag('[object Intl]')) // → false
console.log(isIntlLocaleTag('[object Intl.Locale]')) // → true
```

##### `isIntlNumberFormatTag()` ⚡️

- Checks if _value_ is a default `Intl.NumberFormat` typetag

```js
const { isIntlNumberFormatTag } = require('typetags')

console.log(isIntlNumberFormatTag('[object Intl]')) // → false
console.log(isIntlNumberFormatTag('[object Intl.NumberFormat]')) // → true
```

##### `isIntlPluralRulesTag()` ⚡️

- Checks if _value_ is a default `Intl.PluralRules` typetag

```js
const { isIntlPluralRulesTag } = require('typetags')

let intl = new Intl.PluralRules('en')

console.log(isIntlPluralRulesTag('[object Intl]')) // → false
console.log(isIntlPluralRulesTag(intl.toString())) // → true
```

##### `isIntlRelativeTimeFormatTag()` ⚡️

- Checks if _value_ is a default `Intl.RelativeTimeFormat` typetag

```js
const { isIntlRelativeTimeFormatTag } = require('typetags')

let intl = new Intl.RelativeTimeFormat('en')

console.log(isIntlRelativeTimeFormatTag(intl.toString())) // → true
console.log(isIntlRelativeTimeFormatTag('[object Intl]')) // → false
```

##### `isJsonTag()` ⚡️

- Checks if _value_ is a default `JSON` typetag

```js
const { isJsonTag } = require('typetags')

console.log(isJsonTag(JSON.toString())) // → true
console.log(isJsonTag('[object Json]')) // → false
```

##### `isMapTag()` ⚡️

- Checks if _value_ is a default `Map` typetag

```js
const { isMapTag } = require('typetags')

console.log(isMapTag('[object Error]')) // → false
console.log(isMapTag('[object Map]')) // → true
```

##### `isMathTag()` ⚡️

- Checks if _value_ is a default `Math` typetag

```js
const { isMathTag } = require('typetags')

let number = Math.random()

console.log(isMathTag(number.toString())) // → false
console.log(isMathTag(Math.toString())) // → true
```

##### `isNaNTag()` ⚡️

- Checks if _value_ is a default `NaN` typetag

```js
const { isNaNTag } = require('typetags')

console.log(isNaNTag('[object NaN]')) // → false
console.log(isNaNTag('[object Number]')) // → true
```

##### `isNullTag()` ⚡️

- Checks if _value_ is a default `Null` typetag

```js
const { isNullTag } = require('typetags')

console.log(isNullTag(null)) // → false
console.log(isNullTag('[object Null]')) // → true
```

##### `isNumberTag()` ⚡️

- Checks if _value_ is a default `Number` typetag

```js
const { isNumberTag } = require('typetags')

let num = 1

console.log(isNumberTag(num.toString())) // → false
console.log(isNumberTag('[object Number]')) // → true
```

##### `isObjectTag()` ⚡️

- Checks if _value_ is a default Object typetag

```js
const { isObjectTag } = require('typetags')

let o = { name: 'typetags' }

console.log(isObjectTag(o.toString())) // → true
console.log(isObjectTag('[object Object]')) // → true
```

##### `isProcessTag()` ⚡️

- Checks if _value_ is a default `process` typetag

```js
const { isProcessTag } = require('typetags')

console.log(isProcessTag(process.toString())) // → true
console.log(isProcessTag('[object Process]')) // → false
```

##### `isPromiseTag()` ⚡️

- Checks if _value_ is a default `Promise` typetag

```js
const { isPromiseTag } = require('typetags')

let getUser = new Promise((r) => r)
let wtf = WebAssembly.instantiate(
  new Uint8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00])
)

console.log(isPromiseTag(wtf.toString())) // → true
console.log(isPromiseTag(getUser.toString())) // → true
```

##### `isRangeErrorTag()` ⚡️

- Checks if _value_ is a default `RangeError` typetag

```js
const { isRangeErrorTag } = require('typetags')

let err = new RangeError('bam')

console.log(isRangeErrorTag(err.toString())) // → false
console.log(isRangeErrorTag('[object Error]')) // → true
console.log(isRangeErrorTag('[object RangeError]')) // → false
```

##### `isReferenceErrorTag()` ⚡️

- Checks if _value_ is a default `ReferenceError` typetag

```js
const { isReferenceErrorTag } = require('typetags')

let err = new ReferenceError('oops')

console.log(isReferenceErrorTag(err.toString())) // → false
console.log(isReferenceErrorTag('[object Error]')) // → true
console.log(isReferenceErrorTag('[object ReferenceError]')) // → false
```

##### `isRegExpTag()` ⚡️

- Checks if _value_ is a default `RegExp` typetag

```js
const { isRegExpTag } = require('typetags')

let regex = new RegExp('')

console.log(isRegExpTag(regex.toString())) // → false
console.log(isRegExpTag('[object RegExp]')) // → true
```

##### `isSetTag()` ⚡️

- Checks if _value_ is a default `Set` typetag

```js
const { isSetTag } = require('typetags')

let mySet = new Set([1])

console.log(isSetTag('[object Set]')) // → true
console.log(isSetTag(mySet.toString())) // → true
```

##### `isSharedArrayBufferTag()` ⚡️

- Checks if _value_ is a default `SharedArrayBuffer` typetag

```js
const { isSharedArrayBufferTag } = require('typetags')

let arr = new SharedArrayBuffer(1024)

console.log(isSharedArrayBufferTag(arr.toString())) // → true
console.log(isSharedArrayBufferTag('[object Array]')) // → false
```

##### `isStringTag()` ⚡️

- Checks if _value_ is a default `String` typetag

```js
const { isStringTag } = require('typetags')

let str = 'hey'

console.log(isStringTag(str.toString())) // → false
console.log(isStringTag('[object String]')) // → true
```

##### `isSymbolTag()` ⚡️

- Checks if _value_ is a default `Symbol` typetag

```js
const { isSymbolTag, getTag } = require('typetags')

let sym = Symbol('1')
let tag = getTag(sym)

console.log(isSymbolTag(tag)) // → true
console.log(isSymbolTag(sym.toString())) // → false
```

##### `isSyntaxErrorTag()` ⚡️

- Checks if _value_ is a default `SyntaxError` typetag

```js
const { isSyntaxErrorTag } = require('typetags')

let err = new SyntaxError()

console.log(isSyntaxErrorTag(err.toString())) // → false
console.log(isSyntaxErrorTag('[object Error]')) // → true
```

##### `isTypeErrorTag()` ⚡️

- Checks if _value_ is a default `TypeError` typetag

```js
const { isTypeErrorTag, getTag } = require('typetags')

let err = new TypeError()

console.log(isTypeErrorTag(getTag(err))) // → true
console.log(isTypeErrorTag(err.toString())) // → false
```

##### `isUint8ArrayTag()` ⚡️

- Checks if _value_ is a default `Uint8Array` typetag

```js
const { isUint8ArrayTag, getTag } = require('typetags')

let uint = new Uint8Array()

console.log(isUint8ArrayTag(uint.toString())) // → false
console.log(isUint8ArrayTag(getTag(uint))) // → true
```

##### `isUint8ClampedArrayTag()` ⚡️

- Checks if _value_ is a default `Uint8ClampedArray` typetag

```js
const { isUint8ClampedArrayTag, getTag } = require('typetags')

let clamped = new Uint8ClampedArray()

console.log(isUint8ClampedArrayTag(clamped.toString())) // → false
console.log(isUint8ClampedArrayTag(getTag(clamped))) // → true
```

##### `isUint16ArrayTag()` ⚡️

- Checks if _value_ is a default `Uint16Array` typetag

```js
const { isUint16ArrayTag } = require('typetags')

let uint = new Uint16Array()

console.log(isUint16ArrayTag(uint.toString())) // → false
console.log(isUint16ArrayTag('[object Uint16Array]')) // → true
```

##### `isUint32ArrayTag()` ⚡️

- Checks if _value_ is a default `Uint32Array` typetag

```js
const { isUint32ArrayTag } = require('typetags')

let uint = new Uint32Array()

console.log(isUint32ArrayTag(uint.toString())) // → false
console.log(isUint32ArrayTag('[object Uint32Array]')) // → true
```

##### `isUndefinedTag()` ⚡️

- Checks if _value_ is a default `Undefined` typetag

```js
const { isUndefinedTag } = require('typetags')

let nada = undefined
let tag = getTag(nada) // → [object Undefined]

console.log(isUndefinedTag(hey.toString())) // → TypeError
console.log(isUndefinedTag(tag)) // → true
```

##### `isURIErrorTag()` ⚡️

- Checks if _value_ is a default `URIError` typetag

```js
const { isURIErrorTag } = require('typetags')

console.log(isURIErrorTag('[object Error]')) // → true
console.log(isURIErrorTag(URIError.toString())) // → false
```

##### `isWeakMapTag()` ⚡️

- Checks if _value_ is a default `WeakMap` typetag

```js
const { isWeakMapTag, getTag } = require('typetags')

let weakmap = new WeakMap()
let tag = getTag(weakmap)

console.log(isWeakMapTag(weakmap.toString())) // → false
console.log(isWeakMapTag(tag)) // → true
```

##### `isWeakRefTag()` ⚡️

- Checks if _value_ is a default `WeakRef` typetag

```js
const { isWeakRefTag } = require('typetags')

let weakref = new WeakRef({})
let tag = getTag(weakref)

console.log(isWeakRefTag(weakref.toString())) // → false
console.log(isWeakRefTag(tag)) // → true
```

##### `isWeakSetTag()` ⚡️

- Checks if _value_ is a default `WeakSet` typetag

```js
const { isWeakSetTag } = require('typetags')

let weakset = new WeakSet()

console.log(isWeakSetTag(weakset.toString())) // → true
console.log(isWeakSetTag('[object WeakSet]')) // → true
```

##### `isWasmTag()` ⚡️

- Checks if _value_ is a default `WebAssembly` typetag

```js
const { isWebAssemblyTag, TypeTags } = require('typetags')

let wasm = new WebAssembly.Table({ initial: 1, element: 'anyfunc' })

console.log(isWebAssemblyTag(wasm.toString())) // → true
console.log(isWebAssemblyTag(TypeTags['WebAssembly.Module'])) // → true
```

##### `isWasmModuleTag()` ⚡️

- Checks if _value_ is a default `WebAssembly.Module` typetag

```js
const { isWasmModuleTag } = require('typetags')

let wsmod = new WebAssembly.Module(
  new Uint8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00])
)

console.log(isWasmModuleTag(wsmod.toString())) // → true
console.log(isWasmModuleTag('[object WebAssembly]')) // → false
```

##### `isWasmGlobalTag()` ⚡️

- Checks if _value_ is a default `WebAssembly.Global` typetag

```js
const { isArgumentsTag } = require('typetags')

let wg = new WebAssembly.Global({ value: 'i32', mutable: true }, 0)

console.log(isArgumentsTag(wg.toString())) // → true
console.log(isArgumentsTag('[object WebAssembly.Global]')) // → true
```

##### `isWasmInstanceTag()` ⚡️

- Checks if _value_ is a default `WebAssembly.Instance` typetag

```js
const { isWasmInstanceTag, TypeTags } = require('typetags')

let bytes = new Uint8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00])
let wsmod = new WebAssembly.Module(bytes)
let instance = new WebAssembly.Instance(wsmod, {})

console.log(isWasmInstanceTag(instance.toString())) // → true
console.log(isWasmInstanceTag(TypeTags.WebAssembly)) // → false
```

##### `isWasmMemoryTag()` ⚡️

- Checks if _value_ is a default `WebAssembly.Memory` typetag

```js
const { isWasmMemoryTag } = require('typetags')

let memo = new WebAssembly.Memory({ initial: 1, max: 10 })

console.log(isWasmMemoryTag(memo.toString())) // → true
console.log(isWasmMemoryTag('[object WebAssembly]')) // → false
```

##### `isWasmTableTag()` ⚡️

- Checks if _value_ is a default `WebAssembly.Table` typetag

```js
const { isWasmTableTag, getTag } = require('typetags')

let table = new WebAssembly.Table({ initial: 1, element: 'anyfunc' })
let tag = getTag(table)

console.log(isWasmTableTag(tag)) // → true
console.log(isWasmTableTag(table.toString())) // → true
```

##### `isWasmCompileErrorTag()` ⚡️

- Checks if _value_ is a default `WebAssembly.CompileError` typetag

```js
const { isWasmCompileErrorTag, TypeTags } = require('typetags')

let tag = TypeTags['WebAssembly.CompileError']

console.log(isWasmCompileErrorTag(tag)) // → true
console.log(isWasmCompileErrorTag('[object Error]')) // → true
```

##### `isWasmLinkErrorTag()` ⚡️

- Checks if _value_ is a default `WebAssembly.LinkError` typetag

```js
const { isWasmLinkErrorTag } = require('typetags')

let err = new WebAssembly.LinkError('123')
// err.toString() => LinkError: 123

console.log(isWasmLinkErrorTag(err.toString())) // → false
console.log(isWasmLinkErrorTag('[object Error]')) // → true
```

##### `isWasmRuntimeErrorTag()` ⚡️

- Checks if _value_ is a default `WebAssembly.RuntimeError` typetag

```js
const { isWasmRuntimeErrorTag, getTag } = require('typetags')

let err = new WebAssembly.RuntimeError()
// err.toString() => [object Error]

console.log(isWasmRuntimeErrorTag(err.toString())) // → true
console.log(isWasmRuntimeErrorTag(getTag(err))) // → true
```

##### `isWindowTag()` ⚡️

- Checks if _value_ is a default `Window` typetag

```js
const { isWindowTag } = require('typetags')

let tag = globalThis.toString() // depends on environment

console.log(isWindowTag(tag)) // → false
console.log(isWindowTag('[object Window]')) // → true
```

##### `isWorkerTag()` ⚡️

- Checks if _value_ is a default `Worker` typetag

```js
const { isWorkerTag } = require('typetags')

console.log(isWorkerTag('[object process]')) // → false
console.log(isWorkerTag('[object Worker]')) // → true
```

</details>

## Tests

```sh
---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------|---------|----------|---------|---------|-------------------
All files      |     100 |      100 |     100 |     100 |
 get-tag.js    |     100 |      100 |     100 |     100 |
 predicates.js |     100 |      100 |     100 |     100 |
 type-tags.js  |     100 |      100 |     100 |     100 |
---------------|---------|----------|---------|---------|-------------------

Test Suites: 3 passed, 3 total
Tests:       2 skipped, 279 passed, 281 total
Snapshots:   0 total
Time:        1.597 s, estimated 2 s
Ran all test suites.
✨  Done in 2.84s.
```

## TypeScript

Using TypeScript? We've got you [covered](https://github.com/moatorres/typetags/blob/master/lib/type-tags.d.ts). The package comes with `d.ts` declaration files.

<sub>⚡️ Powered by [**Moka Tecnologia**](https://github.com/mokatecnologia) — `< >` with lots of ☕️ by [**Moa Torres**](https://github.com/moatorres)</sub>
