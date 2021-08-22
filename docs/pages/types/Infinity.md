# TypeTags `.Infinity`

### Overview

The global property `Infinity` is a numeric value representing infinity. The initial value of `Infinity` is `Number.POSITIVE_INFINITY`. The value `Infinity` (positive infinity) is greater than any other number.

### Usage

```js
import { TypeTags } from 'typetags'

TypeTags.get(1 / 0) === TypeTags.Infinity
// → true
```

### Predicates

#### `.isInfinity(value)`

- Checks if `value` **is** or **has** a default `Infinity` type tag.

```js
const { TypeTags } = require('typetags')

let infinity = 1 / 0

TypeTags.isInfinity(infinity)
// → true

TypeTags.isInfinity(infinity.toString())
// → true
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `Infinity`                              |
| `.tag`               | `[object Number]`                       |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object Number]`                       |
| `.hasSpecialArgs()`  | `false`                                 |
| `.instance()`        | `undefined`                             |
| `.instanceTypeOf()`  | `number`                                |
| `.info()`            | [see more]()                            |
| `.isAvailable()`     | `true`                                  |
| `.isConstructor()`   | `false`                                 |
| `.isFactory()`       | `false`                                 |
| `.isFunction()`      | `false`                                 |
| `.isGlobal()`        | `true`                                  |
| `.isIterator()`      | `false`                                 |
| `.isNested()`        | `false`                                 |
| `.isObject()`        | `false`                                 |
| `.isPrimitive()`     | `false`                                 |
| `.isStringifiable()` | `true`                                  |
| `.isSyntatic()`      | `false`                                 |
| `.isTypedArray()`    | `false`                                 |
| `.ownKeys()`         | `[]`                                    |
| `.toString()`        | `function toString() { [native code] }` |
| `.typeOf()`          | `number`                                |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)
