# TypeTags `.Int16Array`

### Overview

The `Int16Array` typed array represents an array of twos-complement 16-bit signed integers in the platform byte order.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Int16Array)
// → [object Int16Array]
```

### Predicate

#### `.isInt16Array(value)`

- Checks if `value` **is** or **has** a default `Int16Array` type tag.

```js
const { TypeTags } = require('typetags')

let int = new Int16Array()

TypeTags.isInt16Array(int)
// → true

TypeTags.isInt16Array(int.toString())
// → false
```

### Metadata (TType)

| Metadata             | Value                                          |
| -------------------- | ---------------------------------------------- |
| `.type`              | `Int16Array`                                   |
| `.tag`               | `[object Int16Array]`                          |
| `.builtin()`         | `undefined`                                    |
| `.getTag()`          | `[object Int16Array]`                          |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)
