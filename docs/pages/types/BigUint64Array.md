# TypeTags `.BigUint64Array`

### Overview

The `BigUint64Array` typed array represents an array of 64-bit unsigned integers in the platform byte order

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.BigUint64Array)
// → [object BigUint64Array]
```

### Predicate

#### `.isBigUint64Array(value)`

- Checks if `value` **is** or **has** a default `BigUint64Array` type tag.

```js
const { TypeTags } = require('typetags')

let biguint = new BigUint64Array(24)

TypeTags.isBigUint64Array(biguint.toString())
// → false

let tag = TypeTags.get(biguint)

TypeTags.isBigUint64Array(tag)
// → true
```

### Metadata (TType)

| Metadata             | Value                                          |
| -------------------- | ---------------------------------------------- |
| `.type`              | `BigUint64Array`                               |
| `.tag`               | `[object BigUint64Array]`                      |
| `.builtin()`         | `undefined`                                    |
| `.getTag()`          | `[object BigUint64Array]`                      |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array)
