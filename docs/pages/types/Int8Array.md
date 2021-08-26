# TypeTags `.Int8Array`

### Overview

The `Int8Array` typed array represents an array of twos-complement 8-bit signed integers. The contents are initialized to `0`.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Int8Array)
// → [object Int8Array]
```

### Predicate

#### `.isInt8Array(value)`

- Checks if `value` **is** or **has** a default `Int8Array` type tag.

```js
const { TypeTags } = require('typetags')

let int8 = new Int8Array()

TypeTags.isInt8Array(int8)
// → true

TypeTags.isInt8Array(int8array.toString())
// → false
```

### Metadata (TType)

| Metadata             | Value                                          |
| -------------------- | ---------------------------------------------- |
| `.type`              | `Int8Array`                                    |
| `.tag`               | `[object Int8Array]`                           |
| `.builtin()`         | `undefined`                                    |
| `.getTag()`          | `[object Int8Array]`                           |
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
| `.isTypedArray()`    | `true`                                         |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)
