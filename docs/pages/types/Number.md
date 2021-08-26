# TypeTags `.Number`

### Overview

`Number` is a primitive wrapper object used to represent and manipulate numbers like `37` or `-9.25`.

### Usage

```js
import { TypeTags } from 'typetags'

Number('123') === 123
// → true

TypeTags.Number === TypeTags.get(123)
// → true

TypeTags.get(Number('123'))
// → [object Number]
```

### Metadata (TType)

| Metadata             | Value                                                                                                                                                                                                      |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.type`              | `Number`                                                                                                                                                                                                   |
| `.tag`               | `[object Number]`                                                                                                                                                                                          |
| `.builtin()`         | `undefined`                                                                                                                                                                                                |
| `.getTag()`          | `[object Number]`                                                                                                                                                                                          |
| `.hasSpecialArgs()`  | `false`                                                                                                                                                                                                    |
| `.instance()`        | `undefined`                                                                                                                                                                                                |
| `.instanceTypeOf()`  | `number`                                                                                                                                                                                                   |
| `.info()`            | [see more]()                                                                                                                                                                                               |
| `.isAvailable()`     | `true`                                                                                                                                                                                                     |
| `.isConstructor()`   | `true`                                                                                                                                                                                                     |
| `.isFactory()`       | `true`                                                                                                                                                                                                     |
| `.isFunction()`      | `true`                                                                                                                                                                                                     |
| `.isGlobal()`        | `true`                                                                                                                                                                                                     |
| `.isIterator()`      | `false`                                                                                                                                                                                                    |
| `.isNested()`        | `false`                                                                                                                                                                                                    |
| `.isObject()`        | `false`                                                                                                                                                                                                    |
| `.isPrimitive()`     | `true`                                                                                                                                                                                                     |
| `.isStringifiable()` | `true`                                                                                                                                                                                                     |
| `.isSyntatic()`      | `false`                                                                                                                                                                                                    |
| `.isTypedArray()`    | `false`                                                                                                                                                                                                    |
| `.ownKeys()`         | `[length, name, prototype, isFinite, isInteger, isNaN, isSafeInteger, parseFloat, parseInt, MAX_VALUE, MIN_VALUE, NaN, NEGATIVE_INFINITY, POSITIVE_INFINITY, MAX_SAFE_INTEGER, MIN_SAFE_INTEGER, EPSILON]` |
| `.toString()`        | `function toString() { [native code] }`                                                                                                                                                                    |
| `.typeOf()`          | `function`                                                                                                                                                                                                 |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
