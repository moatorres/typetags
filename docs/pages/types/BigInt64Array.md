# TypeTags `.BigInt64Array`

### Overview

The `BigInt64Array` typed array represents an array of 64-bit signed integers in the platform byte order.

### Usage

```js
import { TypeTags } from 'typetags'

const bigint64 = new BigInt64Array(2)

console.log(TypeTags.BigInt64Array)
// → [object BigInt64Array]
```

### Predicate

#### `.isBigInt64Array(value)`

- Checks if `value` **is** or **has** a default `BigInt64Array` type tag.

```js
const { TypeTags } = require('typetags')

let bigint64 = new BigInt64Array(24)

TypeTags.isBigInt64Array(bigint64.toString())
// → false

TypeTags.isBigInt64Array(bigint64)
// → true
```

### Metadata (TType)

| Metadata             | Value                                          |
| -------------------- | ---------------------------------------------- |
| `.type`              | `BigInt64Array`                                |
| `.tag`               | `[object BigInt64Array]`                       |
| `.builtin()`         | `undefined`                                    |
| `.getTag()`          | `[object BigInt64Array]`                       |
| `.hasSpecialArgs()`  | `false`                                        |
| `.instance()`        | `undefined`                                    |
| `.instanceTypeOf()`  | `object`                                       |
| `.info()`            | [see more]()                                   |
| `.isAvailable()`     | `true`                                         |
| `.isConstructor()`   | `true`                                         |
| `.isFactory()`       | `false`                                        |
| `.isFunction()`      | `true`                                         |
| `.isGlobal()`        | `true`                                         |
| `.isIterator()`      | `false`                                        |
| `.isNested()`        | `false`                                        |
| `.isObject()`        | `false`                                        |
| `.isPrimitive()`     | `false`                                        |
| `.isStringifiable()` | `true`                                         |
| `.isSyntatic()`      | `false`                                        |
| `.isTypedArray()`    | `false`                                        |
| `.ownKeys()`         | `[length, name, prototype, BYTES_PER_ELEMENT]` |
| `.toString()`        | `function toString() { [native code] }`        |
| `.typeOf()`          | `function`                                     |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array)
