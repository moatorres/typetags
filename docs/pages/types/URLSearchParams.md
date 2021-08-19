# TypeTags.`URLSearchParams`

### Overview

The `URLSearchParams`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.URLSearchParams) // → [object URLSearchParams]
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
| `.ownKeys()`         | `[length,prototype,name]`               |
| `.toString()`        | `function toString() { [native code] }` |
| `.typeOf()`          | `function`                              |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
