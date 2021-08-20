# TypeTags `.WebAssemblyMemory`

### Overview

The `WebAssembly.Memory` object is a resizable `ArrayBuffer` or `SharedArrayBuffer` that holds the raw bytes of memory accessed by a `WebAssembly.Instance`.

### Usage

```js
import { TypeTags } from 'typetags'

let memory = new WebAssembly.Memory({ initial: 10, maximum: 100 })

TypeTags.get(memory) === TypeTags.WebAssemblyMemory
// → true

console.log(TypeTags.WebAssemblyMemory)
// → [object WebAssembly.Memory]
```

### Metadata (TType)

| Metadata             | Value                                          |
| -------------------- | ---------------------------------------------- |
| `.type`              | `WebAssembly.Memory`                           |
| `.tag`               | `[object WebAssembly.Memory]`                  |
| `.builtin()`         | `undefined`                                    |
| `.getTag()`          | `[object WebAssembly.Memory]`                  |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory)
