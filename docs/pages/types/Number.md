# TypeTags.`Number`

### Overview

The `Number`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Number) // → [object Number]
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
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
