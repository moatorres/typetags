# TypeTags `.URLSearchParams`

### Overview

The `URLSearchParams` interface defines utility methods to work with the query string of a URL.

### Usage

```js
import { TypeTags } from 'typetags'

let url = new URL('https://example.com?foo=1&bar=2')
let params = new URLSearchParams(url.search)

TypeTags.get(url) === TypeTags.URLSearchParams
// → false

TypeTags.get(params) === TypeTags.URLSearchParams
// → true

console.log(TypeTags.URLSearchParams)
// → [object URLSearchParams]
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `URLSearchParams`                       |
| `.tag`               | `[object URLSearchParams]`              |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object URLSearchParams]`              |
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
| `.ownKeys()`         | `[length, prototype, name]`             |
| `.toString()`        | `function toString() { [native code] }` |
| `.typeOf()`          | `function`                              |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
