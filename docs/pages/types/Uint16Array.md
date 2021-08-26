# TypeTags `.Uint16Array`

### Overview

The `Uint16Array` typed array represents an array of 16-bit unsigned integers in the platform byte order.

### Usage

```js
import { TypeTags } from 'typetags'

let buffer = new ArrayBuffer(8)
let uint16 = new Uint16Array(buffer, 0, 4)

TypeTags.get(buffer)
// → [object ArrayBuffer]

TypeTags.get(uint16)
// → [object Uint16Array]

TypeTags.get(uint16) === TypeTags.Uint16Array
// → true
```

### Metadata (TType)

| Metadata             | Value                                          |
| -------------------- | ---------------------------------------------- |
| `.type`              | `Uint16Array`                                  |
| `.tag`               | `[object Uint16Array]`                         |
| `.builtin()`         | `undefined`                                    |
| `.getTag()`          | `[object Uint16Array]`                         |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)
