# TypeTags.`Object`

### Overview

The `Object`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Object) // → [object Object]
```

### Metadata (TType)

| Metadata             | Value                                                                                                                                                                                                                                                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.type`              | `Object`                                                                                                                                                                                                                                                                                                                  |
| `.tag`               | `[object Object]`                                                                                                                                                                                                                                                                                                         |
| `.builtin()`         | `undefined`                                                                                                                                                                                                                                                                                                               |
| `.getTag()`          | `[object Object]`                                                                                                                                                                                                                                                                                                         |
| `.hasSpecialArgs()`  | `false`                                                                                                                                                                                                                                                                                                                   |
| `.instance()`        | `undefined`                                                                                                                                                                                                                                                                                                               |
| `.instanceTypeOf()`  | `object`                                                                                                                                                                                                                                                                                                                  |
| `.info()`            | [see more]()                                                                                                                                                                                                                                                                                                              |
| `.isAvailable()`     | `true`                                                                                                                                                                                                                                                                                                                    |
| `.isConstructor()`   | `true`                                                                                                                                                                                                                                                                                                                    |
| `.isFactory()`       | `true`                                                                                                                                                                                                                                                                                                                    |
| `.isFunction()`      | `true`                                                                                                                                                                                                                                                                                                                    |
| `.isGlobal()`        | `true`                                                                                                                                                                                                                                                                                                                    |
| `.isIterator()`      | `false`                                                                                                                                                                                                                                                                                                                   |
| `.isNested()`        | `false`                                                                                                                                                                                                                                                                                                                   |
| `.isObject()`        | `false`                                                                                                                                                                                                                                                                                                                   |
| `.isPrimitive()`     | `false`                                                                                                                                                                                                                                                                                                                   |
| `.isStringifiable()` | `true`                                                                                                                                                                                                                                                                                                                    |
| `.isSyntatic()`      | `false`                                                                                                                                                                                                                                                                                                                   |
| `.isTypedArray()`    | `false`                                                                                                                                                                                                                                                                                                                   |
| `.ownKeys()`         | `[length, name, prototype, assign, getOwnPropertyDescriptor, getOwnPropertyDescriptors, getOwnPropertyNames, getOwnPropertySymbols, is, preventExtensions, seal, create, defineProperties, defineProperty, freeze, getPrototypeOf, setPrototypeOf, isExtensible, isFrozen, isSealed, keys, entries, fromEntries, values]` |
| `.toString()`        | `function toString() { [native code] }`                                                                                                                                                                                                                                                                                   |
| `.typeOf()`          | `function`                                                                                                                                                                                                                                                                                                                |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
