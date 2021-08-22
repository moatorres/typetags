# TypeTags `.Int32Array`

### Overview

The `Int32Array` typed array constructor creates an array of twos-complement 32-bit signed integers in the platform byte order.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Int32Array)
// → [object Int32Array]
```

### Predicate

#### `.isInt32Array(value)`

- Checks if `value` **is** or **has** a default `Int32Array` type tag.

```js
const { TypeTags } = require('typetags')

let int = new Int32Array()

TypeTags.isInt32Array(int)
// → true

TypeTags.isInt32Array(int.toString())
// → false
```

### Metadata (TType)

| Metadata             | Value                                          |
| -------------------- | ---------------------------------------------- |
| `.type`              | `Int32Array`                                   |
| `.tag`               | `[object Int32Array]`                          |
| `.builtin()`         | `undefined`                                    |
| `.getTag()`          | `[object Int32Array]`                          |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
