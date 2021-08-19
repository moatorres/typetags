# TypeTags.`WebAssembly.Memory`

### Overview

The `WebAssembly.Memory`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags['WebAssembly.Memory']) // → [object WebAssembly.Memory]
```

### Metadata (TType)

| Metadata             | Value                                      |
| -------------------- | ------------------------------------------ |
| `.type`              | `WebAssembly.Memory`                       |
| `.tag`               | `[object WebAssembly.Memory]`              |
| `.builtin()`         | `undefined`                                |
| `.getTag()`          | `[object WebAssembly.Memory]`              |
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
