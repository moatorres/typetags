# TypeTags `.WebAssembly`

### Overview

`WebAssembly` is a new type of code that can be run in modern web browsers — it is a low-level assembly-like language with a compact binary format that runs with near-native performance and provides languages such as C/C++, C# and Rust with a compilation target so that they can run on the web.

WebAssembly is designed to complement and run alongside JavaScript — using the `WebAssembly` JavaScript APIs, you can load `WebAssembly` modules into a JavaScript app and share functionality between the two.

### Usage

```js
import { TypeTags } from 'typetags'

let importObject = { imports: { imported: (arg) => console.log(arg) } }

let res = WebAssembly.instantiateStreaming(
  fetch('simple.wasm'),
  importObject
).then((obj) => obj.instance.exports.exported())

let maybeWasm = TypeTags.get(res)

console.log(maybeWasm)
// → [object Promise]

maybeWasm === TypeTags.WebAssembly
// → false

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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly)
