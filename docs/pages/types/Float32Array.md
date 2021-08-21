# TypeTags `.Float32Array`

### Overview

The `Float32Array` typed array represents an array of 32-bit floating point numbers (corresponding to the C `float` data type) in the platform byte order.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Float32Array)
// → [object Float32Array]
```

### Predicate

#### `.isFloat32Array(value)`

- Checks if `value` **is** or **has** a default `Float32Array` type tag.

```js
const { TypeTags } = require('typetags')

let float = new Float32Array()

TypeTags.isFloat32Array(float)
// → true

TypeTags.isFloat32Array(float.toString())
// → true
```

### Metadata (TType)

| Metadata             | Value                                          |
| -------------------- | ---------------------------------------------- |
| `.type`              | `Float32Array`                                 |
| `.tag`               | `[object Float32Array]`                        |
| `.builtin()`         | `undefined`                                    |
| `.getTag()`          | `[object Float32Array]`                        |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)
