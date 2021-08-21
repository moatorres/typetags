# TypeTags `.BigInt`

### Overview

`BigInt` is a built-in object whose constructor returns a `bigint` primitive to represent whole numbers larger than `2^53 - 1` or `Number.MAX_SAFE_INTEGER`, which is the largest number JavaScript can represent with a `number` primitive (or `Number` value).

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.BigInt)
// → [object BigInt]
```

### Predicate

#### `.isBigInt(value)`

- Checks if `value` **is** or **has** a default `BigInt` type tag.

```js
const { TypeTags } = require('typetags')

let bigint = BigInt(45n)
TypeTags.isBigInt(bigint)
// → true

TypeTags.isBigInt(bigint.toString())
// → false

let tag = TypeTags.get(bigint)
TypeTags.isBigInt(tag)
// → true
```

### Metadata (TType)

| Metadata             | Value                                        |
| -------------------- | -------------------------------------------- |
| `.type`              | `BigInt`                                     |
| `.tag`               | `[object BigInt]`                            |
| `.builtin()`         | `undefined`                                  |
| `.getTag()`          | `[object BigInt]`                            |
| `.hasSpecialArgs()`  | `true`                                       |
| `.instance()`        | `undefined`                                  |
| `.instanceTypeOf()`  | `bigint`                                     |
| `.info()`            | [see more]()                                 |
| `.isAvailable()`     | `true`                                       |
| `.isConstructor()`   | `false`                                      |
| `.isFactory()`       | `true`                                       |
| `.isFunction()`      | `true`                                       |
| `.isGlobal()`        | `true`                                       |
| `.isIterator()`      | `false`                                      |
| `.isNested()`        | `false`                                      |
| `.isObject()`        | `false`                                      |
| `.isPrimitive()`     | `true`                                       |
| `.isStringifiable()` | `false`                                      |
| `.isSyntatic()`      | `false`                                      |
| `.isTypedArray()`    | `false`                                      |
| `.ownKeys()`         | `[length, name, prototype, asUintN, asIntN]` |
| `.toString()`        | `function toString() { [native code] }`      |
| `.typeOf()`          | `function`                                   |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
