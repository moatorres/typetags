# TypeTags.`Int8Array`

### Overview

The `Int8Array`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Int8Array) // → [object Int8Array]
```

### Metadata (TType)

| Metadata             | Value                                       |
| -------------------- | ------------------------------------------- |
| `.type`              | `Int8Array`                                 |
| `.tag`               | `[object Int8Array]`                        |
| `.builtin()`         | `undefined`                                 |
| `.getTag()`          | `[object Int8Array]`                        |
| `.hasSpecialArgs()`  | `false`                                     |
| `.instance()`        | `undefined`                                 |
| `.instanceTypeOf()`  | `object`                                    |
| `.info()`            | [see more]()                                |
| `.isAvailable()`     | `true`                                      |
| `.isConstructor()`   | `true`                                      |
| `.isFactory()`       | `false`                                     |
| `.isFunction()`      | `true`                                      |
| `.isGlobal()`        | `true`                                      |
| `.isIterator()`      | `false`                                     |
| `.isNested()`        | `false`                                     |
| `.isObject()`        | `false`                                     |
| `.isPrimitive()`     | `false`                                     |
| `.isStringifiable()` | `true`                                      |
| `.isSyntatic()`      | `false`                                     |
| `.isTypedArray()`    | `true`                                      |
| `.ownKeys()`         | `[length,name,prototype,BYTES_PER_ELEMENT]` |
| `.toString()`        | `function toString() { [native code] }`     |
| `.typeOf()`          | `function`                                  |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
