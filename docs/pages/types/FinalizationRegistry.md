# TypeTags `.FinalizationRegistry`

### Overview

A `FinalizationRegistry` object lets you request a callback when an object is garbage-collected.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.FinalizationRegistry)
// → [object FinalizationRegistry]
```

### Predicate

#### `.isFinalizationRegistry(value)`

- Checks if `value` **is** or **has** a default `FinalizationRegistry` type tag.

```js
const { TypeTags } = require('typetags')

let end = new FinalizationRegistry()

TypeTags.isFinalizationRegistry(end)
// → true

TypeTags.isFinalizationRegistry(end.toString())
// → true
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `FinalizationRegistry`                  |
| `.tag`               | `[object FinalizationRegistry]`         |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object FinalizationRegistry]`         |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry)
