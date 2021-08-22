# TypeTags `.WebAssemblyGlobal`

### Overview

A `WebAssembly.Global` object represents a global variable instance, accessible from both JavaScript and importable/exportable across one or more `WebAssembly.Module` instances. This allows dynamic linking of multiple modules.

### Usage

```js
import { TypeTags } from 'typetags'

const global = new WebAssembly.Global({ value: 'i32', mutable: true }, 0)

TypeTags.get(global) === TypeTags.WebAssemblyGlobal
// → true

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

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Global)
