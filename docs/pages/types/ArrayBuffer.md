# TypeTags `.ArrayBuffer`

### Overview

The `ArrayBuffer` object is used to represent a generic, fixed-length raw binary data buffer.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.ArrayBuffer)
// → [object ArrayBuffer]
```

### Predicate

#### `.isArrayBuffer(value)`

- Checks if `value` **is** or **has** a default `ArrayBuffer` type tag.

```js
const { TypeTags } = require('typetags')

let buf = new ArrayBuffer(8)

TypeTags.isArrayBuffer(buf.toString())
// → true

let tag = TypeTags.get(buf)

TypeTags.isArrayBuffer(tag)
// → true
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `ArrayBuffer`                           |
| `.tag`               | `[object ArrayBuffer]`                  |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object ArrayBuffer]`                  |
| `.hasSpecialArgs()`  | `false`                                 |
| `.instance()`        | `undefined`                             |
| `.instanceTypeOf()`  | `object`                                |
| `.info()`            | [see more]()                            |
| `.isAvailable()`     | `true`                                  |
| `.isConstructor()`   | `true`                                  |
| `.isFactory()`       | `false`                                 |
| `.isFunction()`      | `true`                                  |
| `.isGlobal()`        | `true`                                  |
| `.isIterator()`      | `false`                                 |
| `.isNested()`        | `false`                                 |
| `.isObject()`        | `false`                                 |
| `.isPrimitive()`     | `false`                                 |
| `.isStringifiable()` | `true`                                  |
| `.isSyntatic()`      | `false`                                 |
| `.isTypedArray()`    | `false`                                 |
| `.ownKeys()`         | `[length, name, prototype, isView]`     |
| `.toString()`        | `function toString() { [native code] }` |
| `.typeOf()`          | `function`                              |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
