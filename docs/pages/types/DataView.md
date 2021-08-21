# TypeTags `.DataView`

### Overview

The `DataView` view provides a low-level interface for reading and writing multiple number types in a binary `ArrayBuffer`, without having to care about the platform's [endianness](https://developer.mozilla.org/en-US/docs/Glossary/Endianness).

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.DataView)
// → [object DataView]
```

### Predicate

#### `.isDataView(value)`

- Checks if `value` **is** or **has** a default `DataView` type tag.

```js
const { TypeTags } = require('typetags')

let buff = new SharedArrayBuffer(1024)

let view = new DataView(buff)

TypeTags.isDataView(view.toString())
// → true

TypeTags.isDataView('[object DataView]')
// → true
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `DataView`                              |
| `.tag`               | `[object DataView]`                     |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object DataView]`                     |
| `.hasSpecialArgs()`  | `true`                                  |
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

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
