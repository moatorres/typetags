# TypeTags.`SharedArrayBuffer`

### Overview

The `SharedArrayBuffer`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.SharedArrayBuffer) // → [object SharedArrayBuffer]
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `SharedArrayBuffer`                     |
| `.tag`               | `[object SharedArrayBuffer]`            |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object SharedArrayBuffer]`            |
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
| `.ownKeys()`         | `[length,name,prototype]`               |
| `.toString()`        | `function toString() { [native code] }` |
| `.typeOf()`          | `function`                              |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
