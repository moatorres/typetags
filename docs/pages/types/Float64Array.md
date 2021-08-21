# TypeTags `.Float64Array`

### Overview

The `Float64Array` typed array represents an array of 64-bit floating point numbers (corresponding to the C `double` data type) in the platform byte order.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Float64Array)
// → [object Float64Array]
```

### Predicate

#### `.isFloat64Array(value)`

- Checks if `value` **is** or **has** a default `Float64Array` type tag.

```js
const { TypeTags } = require('typetags')

let float = new Float64Array()

TypeTags.isFloat64Array(float)
// → true

TypeTags.isFloat64Array(float.toString())
// → true
```

### Metadata (TType)

| Metadata             | Value                                          |
| -------------------- | ---------------------------------------------- |
| `.type`              | `Float64Array`                                 |
| `.tag`               | `[object Float64Array]`                        |
| `.builtin()`         | `undefined`                                    |
| `.getTag()`          | `[object Float64Array]`                        |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)
