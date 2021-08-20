# TypeTags `.WebAssemblyInstance`

### Overview

A `WebAssembly.Instance` object is a stateful, executable instance of a `WebAssembly.Module`. Instance objects contain all the Exported WebAssembly functions that allow calling into WebAssembly code from JavaScript.

### Usage

```js
import { TypeTags } from 'typetags'

const importObject = {
  imports: {
    imported: function (arg) {
      console.log(arg)
    },
  },
}

fetch('simple.wasm')
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    let mod = new WebAssembly.Module(bytes)
    let instance = new WebAssembly.Instance(mod, importObject)
    instance.exports.exported()
    return [mod, instance]
  })

TypeTags.get(instance) === TypeTags.WebAssemblyInstance
// → true

console.log(TypeTags.WebAssemblyInstance)
// → [object WebAssembly.Instance]
```

### Metadata (TType)

| Metadata             | Value                                          |
| -------------------- | ---------------------------------------------- |
| `.type`              | `WebAssembly.Instance`                         |
| `.tag`               | `[object WebAssembly.Instance]`                |
| `.builtin()`         | `undefined`                                    |
| `.getTag()`          | `[object WebAssembly.Instance]`                |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance)
