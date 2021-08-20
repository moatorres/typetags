# TypeTags `.SharedArrayBuffer`

### Overview

The `SharedArrayBuffer` object is used to represent a generic, fixed-length raw binary data buffer, similar to the `ArrayBuffer` object, but in a way that they can be used to create views on shared memory.

### Usage

```js
import { TypeTags } from 'typetags'

let buffer = new SharedArrayBuffer(1024)

TypeTags.get(buffer) === TypeTags.SharedArrayBuffer
// → true

console.log(TypeTags.SharedArrayBuffer)
// → [object SharedArrayBuffer]
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `SharedArrayBuffer`                     |
| `.tag`               | `[object SharedArrayBuffer]`            |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object SharedArrayBuffer]`            |
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
| `.ownKeys()`         | `[length, name, prototype]`             |
| `.toString()`        | `function toString() { [native code] }` |
| `.typeOf()`          | `function`                              |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
