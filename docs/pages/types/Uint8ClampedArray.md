# TypeTags `.Uint8ClampedArray`

### Overview

The `Uint8ClampedArray`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Uint8ClampedArray)
// → [object Uint8ClampedArray]
```

### Metadata (TType)

| Metadata             | Value                                          |
| -------------------- | ---------------------------------------------- |
| `.type`              | `Uint8ClampedArray`                            |
| `.tag`               | `[object Uint8ClampedArray]`                   |
| `.builtin()`         | `undefined`                                    |
| `.getTag()`          | `[object Uint8ClampedArray]`                   |
| `.hasSpecialArgs()`  | `false`                                        |
| `.instance()`        | `undefined`                                    |
| `.instanceTypeOf()`  | `object`                                       |
| `.info()`            | [see more]()                                   |
| `.isAvailable()`     | `true`                                         |
| `.isConstructor()`   | `true`                                         |
| `.isFactory()`       | `false`                                        |
| `.isFunction()`      | `true`                                         |
| `.isGlobal()`        | `true`                                         |
| `.isIterator()`      | `false`                                        |
| `.isNested()`        | `false`                                        |
| `.isObject()`        | `false`                                        |
| `.isPrimitive()`     | `false`                                        |
| `.isStringifiable()` | `true`                                         |
| `.isSyntatic()`      | `false`                                        |
| `.isTypedArray()`    | `true`                                         |
| `.ownKeys()`         | `[length, name, prototype, BYTES_PER_ELEMENT]` |
| `.toString()`        | `function toString() { [native code] }`        |
| `.typeOf()`          | `function`                                     |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
