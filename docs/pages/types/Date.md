# TypeTags `.Date`

### Overview

JavaScript `Date` objects represent a single moment in time in a platform-independent format. `Date` objects contain a Number that represents milliseconds since 1 January 1970 UTC.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Date)
// → [object Date]
```

### Predicate

#### `TypeTags.isDate(value)`

- Checks if `value` **is** or **has** a default `Date` type tag.

```js
const { TypeTags } = require('typetags')

let now = new Date()

TypeTags.isDate(now.toString())
// → false

TypeTags.isDate(now)
// → true
```

### Metadata (TType)

| Metadata             | Value                                        |
| -------------------- | -------------------------------------------- |
| `.type`              | `Date`                                       |
| `.tag`               | `[object Date]`                              |
| `.builtin()`         | `undefined`                                  |
| `.getTag()`          | `[object Date]`                              |
| `.hasSpecialArgs()`  | `false`                                      |
| `.instance()`        | `undefined`                                  |
| `.instanceTypeOf()`  | `object`                                     |
| `.info()`            | [see more]()                                 |
| `.isAvailable()`     | `true`                                       |
| `.isConstructor()`   | `true`                                       |
| `.isFactory()`       | `true`                                       |
| `.isFunction()`      | `true`                                       |
| `.isGlobal()`        | `true`                                       |
| `.isIterator()`      | `false`                                      |
| `.isNested()`        | `false`                                      |
| `.isObject()`        | `false`                                      |
| `.isPrimitive()`     | `false`                                      |
| `.isStringifiable()` | `true`                                       |
| `.isSyntatic()`      | `false`                                      |
| `.isTypedArray()`    | `false`                                      |
| `.ownKeys()`         | `[length, name, prototype, now, parse, UTC]` |
| `.toString()`        | `function toString() { [native code] }`      |
| `.typeOf()`          | `function`                                   |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
