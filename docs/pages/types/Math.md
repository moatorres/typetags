# TypeTags.`Math`

### Overview

The `Math`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Math) // → [object Math]
```

### Metadata (TType)

| Metadata             | Value                                                                                                                                                                                                                                                                        |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.type`              | `Math`                                                                                                                                                                                                                                                                       |
| `.tag`               | `[object Math]`                                                                                                                                                                                                                                                              |
| `.builtin()`         | `undefined`                                                                                                                                                                                                                                                                  |
| `.getTag()`          | `[object Math]`                                                                                                                                                                                                                                                              |
| `.hasSpecialArgs()`  | `false`                                                                                                                                                                                                                                                                      |
| `.instance()`        | `undefined`                                                                                                                                                                                                                                                                  |
| `.instanceTypeOf()`  | `object`                                                                                                                                                                                                                                                                     |
| `.info()`            | [see more]()                                                                                                                                                                                                                                                                 |
| `.isAvailable()`     | `true`                                                                                                                                                                                                                                                                       |
| `.isConstructor()`   | `false`                                                                                                                                                                                                                                                                      |
| `.isFactory()`       | `false`                                                                                                                                                                                                                                                                      |
| `.isFunction()`      | `false`                                                                                                                                                                                                                                                                      |
| `.isGlobal()`        | `true`                                                                                                                                                                                                                                                                       |
| `.isIterator()`      | `false`                                                                                                                                                                                                                                                                      |
| `.isNested()`        | `false`                                                                                                                                                                                                                                                                      |
| `.isObject()`        | `true`                                                                                                                                                                                                                                                                       |
| `.isPrimitive()`     | `false`                                                                                                                                                                                                                                                                      |
| `.isStringifiable()` | `true`                                                                                                                                                                                                                                                                       |
| `.isSyntatic()`      | `false`                                                                                                                                                                                                                                                                      |
| `.isTypedArray()`    | `false`                                                                                                                                                                                                                                                                      |
| `.ownKeys()`         | `[abs, acos, acosh, asin, asinh, atan, atanh, atan2, ceil, cbrt, expm1, clz32, cos, cosh, exp, floor, fround, hypot, imul, log, log1p, log2, log10, max, min, pow, random, round, sign, sin, sinh, sqrt, tan, tanh, trunc, E, LN10, LN2, LOG10E, LOG2E, PI, SQRT1_2, SQRT2]` |
| `.toString()`        | `function toString() { [native code] }`                                                                                                                                                                                                                                      |
| `.typeOf()`          | `object`                                                                                                                                                                                                                                                                     |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)