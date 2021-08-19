# TypeTags.`Error`

### Overview

The `Error`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Error) // → [object Error]
```

### Metadata (TType)

| Metadata             | Value                                                                         |
| -------------------- | ----------------------------------------------------------------------------- |
| `.type`              | `Error`                                                                       |
| `.tag`               | `[object Error]`                                                              |
| `.builtin()`         | `undefined`                                                                   |
| `.getTag()`          | `[object Error]`                                                              |
| `.hasSpecialArgs()`  | `false`                                                                       |
| `.instance()`        | `undefined`                                                                   |
| `.instanceTypeOf()`  | `object`                                                                      |
| `.info()`            | [see more]()                                                                  |
| `.isAvailable()`     | `true`                                                                        |
| `.isConstructor()`   | `true`                                                                        |
| `.isFactory()`       | `true`                                                                        |
| `.isFunction()`      | `true`                                                                        |
| `.isGlobal()`        | `true`                                                                        |
| `.isIterator()`      | `false`                                                                       |
| `.isNested()`        | `false`                                                                       |
| `.isObject()`        | `false`                                                                       |
| `.isPrimitive()`     | `false`                                                                       |
| `.isStringifiable()` | `true`                                                                        |
| `.isSyntatic()`      | `false`                                                                       |
| `.isTypedArray()`    | `false`                                                                       |
| `.ownKeys()`         | `[length,name,prototype,captureStackTrace,stackTraceLimit,prepareStackTrace]` |
| `.toString()`        | `function toString() { [native code] }`                                       |
| `.typeOf()`          | `function`                                                                    |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
