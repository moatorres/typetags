# TypeTags `.WebAssemblyModule`

### Overview

The `WebAssembly.Module`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.WebAssemblyModule)
// → [object WebAssembly.Module]
```

### Metadata (TType)

| Metadata             | Value                                                                            |
| -------------------- | -------------------------------------------------------------------------------- |
| `.type`              | `WebAssembly.Module`                                                             |
| `.tag`               | `[object WebAssembly.Module]`                                                    |
| `.builtin()`         | `undefined`                                                                      |
| `.getTag()`          | `[object WebAssembly.Module]`                                                    |
| `.hasSpecialArgs()`  | `true`                                                                           |
| `.instance()`        | `undefined`                                                                      |
| `.instanceTypeOf()`  | `object`                                                                         |
| `.info()`            | [see more]()                                                                     |
| `.isAvailable()`     | `true`                                                                           |
| `.isConstructor()`   | `true`                                                                           |
| `.isFactory()`       | `false`                                                                          |
| `.isFunction()`      | `true`                                                                           |
| `.isGlobal()`        | `false`                                                                          |
| `.isIterator()`      | `false`                                                                          |
| `.isNested()`        | `true`                                                                           |
| `.isObject()`        | `false`                                                                          |
| `.isPrimitive()`     | `false`                                                                          |
| `.isStringifiable()` | `true`                                                                           |
| `.isSyntatic()`      | `false`                                                                          |
| `.isTypedArray()`    | `false`                                                                          |
| `.ownKeys()`         | `[length, name, arguments, caller, prototype, imports, exports, customSections]` |
| `.toString()`        | `function toString() { [native code] }`                                          |
| `.typeOf()`          | `function`                                                                       |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
