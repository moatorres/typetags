# TypeTags `.Boolean`

### Overview

The `Boolean` object is an object wrapper for a boolean value.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Boolean)
// → [object Boolean]
```

### Predicate

#### `.isBoolean(value)`

- Checks if `value` **is** or **has** a default `Boolean` type tag.

```js
const { TypeTags } = require('typetags')

let bool = false

TypeTags.isBoolean(bool)
// → true

TypeTags.isBoolean(true)
// → true

TypeTags.Boolean === TypeTags.get(bool)
// → true
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `Boolean`                               |
| `.tag`               | `[object Boolean]`                      |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object Boolean]`                      |
| `.hasSpecialArgs()`  | `false`                                 |
| `.instance()`        | `undefined`                             |
| `.instanceTypeOf()`  | `boolean`                               |
| `.info()`            | [see more]()                            |
| `.isAvailable()`     | `true`                                  |
| `.isConstructor()`   | `true`                                  |
| `.isFactory()`       | `true`                                  |
| `.isFunction()`      | `true`                                  |
| `.isGlobal()`        | `true`                                  |
| `.isIterator()`      | `false`                                 |
| `.isNested()`        | `false`                                 |
| `.isObject()`        | `false`                                 |
| `.isPrimitive()`     | `true`                                  |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
