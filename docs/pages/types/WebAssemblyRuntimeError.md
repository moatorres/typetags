# TypeTags `.WebAssemblyRuntimeError`

### Overview

The `WebAssembly.RuntimeError`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.WebAssemblyRuntimeError)
// → [object WebAssembly.RuntimeError]
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `WebAssembly.RuntimeError`              |
| `.tag`               | `[object Error]`                        |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object Error]`                        |
| `.hasSpecialArgs()`  | `false`                                 |
| `.instance()`        | `undefined`                             |
| `.instanceTypeOf()`  | `object`                                |
| `.info()`            | [see more]()                            |
| `.isAvailable()`     | `true`                                  |
| `.isConstructor()`   | `true`                                  |
| `.isFactory()`       | `true`                                  |
| `.isFunction()`      | `true`                                  |
| `.isGlobal()`        | `false`                                 |
| `.isIterator()`      | `false`                                 |
| `.isNested()`        | `true`                                  |
| `.isObject()`        | `false`                                 |
| `.isPrimitive()`     | `false`                                 |
| `.isStringifiable()` | `true`                                  |
| `.isSyntatic()`      | `false`                                 |
| `.isTypedArray()`    | `false`                                 |
| `.ownKeys()`         | `[length, name, prototype]`             |
| `.toString()`        | `function toString() { [native code] }` |
| `.typeOf()`          | `function`                              |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
