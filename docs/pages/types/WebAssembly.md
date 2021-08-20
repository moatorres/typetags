# TypeTags `.WebAssembly`

### Overview

The `WebAssembly`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.WebAssembly)
// → [object WebAssembly]
```

### Metadata (TType)

| Metadata             | Value                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `.type`              | `WebAssembly`                                                                                                      |
| `.tag`               | `[object WebAssembly]`                                                                                             |
| `.builtin()`         | `undefined`                                                                                                        |
| `.getTag()`          | `[object WebAssembly]`                                                                                             |
| `.hasSpecialArgs()`  | `false`                                                                                                            |
| `.instance()`        | `undefined`                                                                                                        |
| `.instanceTypeOf()`  | `object`                                                                                                           |
| `.info()`            | [see more]()                                                                                                       |
| `.isAvailable()`     | `true`                                                                                                             |
| `.isConstructor()`   | `false`                                                                                                            |
| `.isFactory()`       | `false`                                                                                                            |
| `.isFunction()`      | `false`                                                                                                            |
| `.isGlobal()`        | `true`                                                                                                             |
| `.isIterator()`      | `false`                                                                                                            |
| `.isNested()`        | `false`                                                                                                            |
| `.isObject()`        | `true`                                                                                                             |
| `.isPrimitive()`     | `false`                                                                                                            |
| `.isStringifiable()` | `true`                                                                                                             |
| `.isSyntatic()`      | `false`                                                                                                            |
| `.isTypedArray()`    | `false`                                                                                                            |
| `.ownKeys()`         | `[compile, validate, instantiate, Module, Instance, Table, Memory, Global, CompileError, LinkError, RuntimeError]` |
| `.toString()`        | `function toString() { [native code] }`                                                                            |
| `.typeOf()`          | `object`                                                                                                           |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
