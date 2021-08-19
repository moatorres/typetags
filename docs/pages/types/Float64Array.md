# TypeTags.`Float64Array`

### Overview

The `Float64Array`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Float64Array) // → [object Float64Array]
```

### Metadata (TType)

| Metadata             | Value                                       |
| -------------------- | ------------------------------------------- |
| `.type`              | `Float64Array`                              |
| `.tag`               | `[object Float64Array]`                     |
| `.builtin()`         | `undefined`                                 |
| `.getTag()`          | `[object Float64Array]`                     |
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
