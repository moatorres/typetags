# TypeTags.`Promise`

### Overview

The `Promise`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Promise) // → [object Promise]
```

### Metadata (TType)

| Metadata             | Value                                                                    |
| -------------------- | ------------------------------------------------------------------------ |
| `.type`              | `Promise`                                                                |
| `.tag`               | `[object Promise]`                                                       |
| `.builtin()`         | `undefined`                                                              |
| `.getTag()`          | `[object Promise]`                                                       |
| `.hasSpecialArgs()`  | `true`                                                                   |
| `.instance()`        | `undefined`                                                              |
| `.instanceTypeOf()`  | `object`                                                                 |
| `.info()`            | [see more]()                                                             |
| `.isAvailable()`     | `true`                                                                   |
| `.isConstructor()`   | `true`                                                                   |
| `.isFactory()`       | `false`                                                                  |
| `.isFunction()`      | `true`                                                                   |
| `.isGlobal()`        | `true`                                                                   |
| `.isIterator()`      | `false`                                                                  |
| `.isNested()`        | `false`                                                                  |
| `.isObject()`        | `false`                                                                  |
| `.isPrimitive()`     | `false`                                                                  |
| `.isStringifiable()` | `true`                                                                   |
| `.isSyntatic()`      | `false`                                                                  |
| `.isTypedArray()`    | `false`                                                                  |
| `.ownKeys()`         | `[length, name, prototype, all, allSettled, any, race, resolve, reject]` |
| `.toString()`        | `function toString() { [native code] }`                                  |
| `.typeOf()`          | `function`                                                               |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
