# TypeTags `.RegExp`

### Overview

The `RegExp`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.RegExp)
// → [object RegExp]
```

### Metadata (TType)

| Metadata             | Value                                                                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `.type`              | `RegExp`                                                                                                                                    |
| `.tag`               | `[object RegExp]`                                                                                                                           |
| `.builtin()`         | `undefined`                                                                                                                                 |
| `.getTag()`          | `[object RegExp]`                                                                                                                           |
| `.hasSpecialArgs()`  | `false`                                                                                                                                     |
| `.instance()`        | `undefined`                                                                                                                                 |
| `.instanceTypeOf()`  | `object`                                                                                                                                    |
| `.info()`            | [see more]()                                                                                                                                |
| `.isAvailable()`     | `true`                                                                                                                                      |
| `.isConstructor()`   | `true`                                                                                                                                      |
| `.isFactory()`       | `true`                                                                                                                                      |
| `.isFunction()`      | `true`                                                                                                                                      |
| `.isGlobal()`        | `true`                                                                                                                                      |
| `.isIterator()`      | `false`                                                                                                                                     |
| `.isNested()`        | `false`                                                                                                                                     |
| `.isObject()`        | `false`                                                                                                                                     |
| `.isPrimitive()`     | `false`                                                                                                                                     |
| `.isStringifiable()` | `true`                                                                                                                                      |
| `.isSyntatic()`      | `false`                                                                                                                                     |
| `.isTypedArray()`    | `false`                                                                                                                                     |
| `.ownKeys()`         | `[length, name, prototype, input, $_, lastMatch, $&, lastParen, $+, leftContext, $`, rightContext, $', $1, $2, $3, $4, $5, $6, $7, $8, $9]` |
| `.toString()`        | `function toString() { [native code] }`                                                                                                     |
| `.typeOf()`          | `function`                                                                                                                                  |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
