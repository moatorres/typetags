# TypeTags `.WebAssemblyTable`

### Overview

The `WebAssembly.Table` object is a JavaScript wrapper object — an array-like structure representing a WebAssembly Table, which stores function references.

### Usage

```js
import { TypeTags } from 'typetags'

let wasmTable = new WebAssembly.Table({ initial: 2, element: 'anyfunc' })

const myObj = {
  table: wasmTable,
}

TypeTags.get(myObj.table) === TypeTags.WebAssemblyTable
// → true

console.log(TypeTags.WebAssemblyTable)
// → [object WebAssembly.Table]
```

### Metadata (TType)

| Metadata             | Value                                          |
| -------------------- | ---------------------------------------------- |
| `.type`              | `WebAssembly.Table`                            |
| `.tag`               | `[object WebAssembly.Table]`                   |
| `.builtin()`         | `undefined`                                    |
| `.getTag()`          | `[object WebAssembly.Table]`                   |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table)
