# TypeTags `.Atomics`

### Overview

The `Atomics` object provides atomic operations as static methods. They are used with `SharedArrayBuffer` and `ArrayBuffer` objects.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Atomics)
// → [object Atomics]
```

### Predicates

#### `.isAtomics(value)`

- Checks if `value` **is** or **has** a default `Atomics` type tag.

```js
const { TypeTags } = require('typetags')

const buffer = new SharedArrayBuffer(16)
const uint8 = new Uint8Array(buffer)

let atom = Atomics.add(uint8, 0, 2) // → 0

TypeTags.isAtomics(atom.toString())
// → false

TypeTags.isAtomics(Atomics)
// → true
```

### Metadata (TType)

| Metadata             | Value                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------- |
| `.type`              | `Atomics`                                                                                               |
| `.tag`               | `[object Atomics]`                                                                                      |
| `.builtin()`         | `undefined`                                                                                             |
| `.getTag()`          | `[object Atomics]`                                                                                      |
| `.hasSpecialArgs()`  | `false`                                                                                                 |
| `.instance()`        | `undefined`                                                                                             |
| `.instanceTypeOf()`  | `object`                                                                                                |
| `.info()`            | [see more]()                                                                                            |
| `.isAvailable()`     | `true`                                                                                                  |
| `.isConstructor()`   | `false`                                                                                                 |
| `.isFactory()`       | `false`                                                                                                 |
| `.isFunction()`      | `false`                                                                                                 |
| `.isGlobal()`        | `true`                                                                                                  |
| `.isIterator()`      | `false`                                                                                                 |
| `.isNested()`        | `false`                                                                                                 |
| `.isObject()`        | `true`                                                                                                  |
| `.isPrimitive()`     | `false`                                                                                                 |
| `.isStringifiable()` | `true`                                                                                                  |
| `.isSyntatic()`      | `false`                                                                                                 |
| `.isTypedArray()`    | `false`                                                                                                 |
| `.ownKeys()`         | `[load, store, add, sub, and, or, xor, exchange, compareExchange, isLockFree, wait, notify, waitAsync]` |
| `.toString()`        | `function toString() { [native code] }`                                                                 |
| `.typeOf()`          | `object`                                                                                                |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics)
