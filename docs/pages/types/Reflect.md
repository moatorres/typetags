# TypeTags `.Reflect`

### Overview

The `Reflect`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Reflect)
// → [object Reflect]
```

### Metadata (TType)

| Metadata             | Value                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.type`              | `Reflect`                                                                                                                                                               |
| `.tag`               | `[object Reflect]`                                                                                                                                                      |
| `.builtin()`         | `undefined`                                                                                                                                                             |
| `.getTag()`          | `[object Reflect]`                                                                                                                                                      |
| `.hasSpecialArgs()`  | `false`                                                                                                                                                                 |
| `.instance()`        | `undefined`                                                                                                                                                             |
| `.instanceTypeOf()`  | `object`                                                                                                                                                                |
| `.info()`            | [see more]()                                                                                                                                                            |
| `.isAvailable()`     | `true`                                                                                                                                                                  |
| `.isConstructor()`   | `false`                                                                                                                                                                 |
| `.isFactory()`       | `false`                                                                                                                                                                 |
| `.isFunction()`      | `false`                                                                                                                                                                 |
| `.isGlobal()`        | `true`                                                                                                                                                                  |
| `.isIterator()`      | `false`                                                                                                                                                                 |
| `.isNested()`        | `false`                                                                                                                                                                 |
| `.isObject()`        | `true`                                                                                                                                                                  |
| `.isPrimitive()`     | `false`                                                                                                                                                                 |
| `.isStringifiable()` | `true`                                                                                                                                                                  |
| `.isSyntatic()`      | `false`                                                                                                                                                                 |
| `.isTypedArray()`    | `false`                                                                                                                                                                 |
| `.ownKeys()`         | `[defineProperty, deleteProperty, apply, construct, get, getOwnPropertyDescriptor, getPrototypeOf, has, isExtensible, ownKeys, preventExtensions, set, setPrototypeOf]` |
| `.toString()`        | `function toString() { [native code] }`                                                                                                                                 |
| `.typeOf()`          | `object`                                                                                                                                                                |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
