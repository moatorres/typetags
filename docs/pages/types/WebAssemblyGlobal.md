# TypeTags `.WebAssemblyGlobal`

### Overview

The `WebAssembly.Global`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.WebAssemblyGlobal)
// → [object WebAssembly.Global]
```

### Metadata (TType)

| Metadata             | Value                                          |
| -------------------- | ---------------------------------------------- |
| `.type`              | `WebAssembly.Global`                           |
| `.tag`               | `[object WebAssembly.Global]`                  |
| `.builtin()`         | `undefined`                                    |
| `.getTag()`          | `[object WebAssembly.Global]`                  |
| `.hasSpecialArgs()`  | `true`                                         |
| `.instance()`        | `undefined`                                    |
| `.instanceTypeOf()`  | `object`                                       |
| `.info()`            | [see more]()                                   |
| `.isAvailable()`     | `true`                                         |
| `.isConstructor()`   | `true`                                         |
| `.isFactory()`       | `false`                                        |
| `.isFunction()`      | `true`                                         |
| `.isGlobal()`        | `false`                                        |
| `.isIterator()`      | `false`                                        |
| `.isNested()`        | `true`                                         |
| `.isObject()`        | `false`                                        |
| `.isPrimitive()`     | `false`                                        |
| `.isStringifiable()` | `true`                                         |
| `.isSyntatic()`      | `false`                                        |
| `.isTypedArray()`    | `false`                                        |
| `.ownKeys()`         | `[length, name, arguments, caller, prototype]` |
| `.toString()`        | `function toString() { [native code] }`        |
| `.typeOf()`          | `function`                                     |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
