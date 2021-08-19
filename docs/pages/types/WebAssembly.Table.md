# TypeTags.`WebAssembly.Table`

### Overview

The `WebAssembly.Table`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags['WebAssembly.Table']) // → [object WebAssembly.Table]
```

### Metadata (TType)

| Metadata             | Value                                      |
| -------------------- | ------------------------------------------ |
| `.type`              | `WebAssembly.Table`                        |
| `.tag`               | `[object WebAssembly.Table]`               |
| `.builtin()`         | `undefined`                                |
| `.getTag()`          | `[object WebAssembly.Table]`               |
| `.hasSpecialArgs()`  | `true`                                     |
| `.instance()`        | `undefined`                                |
| `.instanceTypeOf()`  | `object`                                   |
| `.info()`            | [see more]()                               |
| `.isAvailable()`     | `true`                                     |
| `.isConstructor()`   | `true`                                     |
| `.isFactory()`       | `false`                                    |
| `.isFunction()`      | `true`                                     |
| `.isGlobal()`        | `false`                                    |
| `.isIterator()`      | `false`                                    |
| `.isNested()`        | `true`                                     |
| `.isObject()`        | `false`                                    |
| `.isPrimitive()`     | `false`                                    |
| `.isStringifiable()` | `true`                                     |
| `.isSyntatic()`      | `false`                                    |
| `.isTypedArray()`    | `false`                                    |
| `.ownKeys()`         | `[length,name,arguments,caller,prototype]` |
| `.toString()`        | `function toString() { [native code] }`    |
| `.typeOf()`          | `function`                                 |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)