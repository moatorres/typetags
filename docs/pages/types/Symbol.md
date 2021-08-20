# TypeTags `.Symbol`

### Overview

The `Symbol`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Symbol)
// → [object Symbol]
```

### Metadata (TType)

| Metadata             | Value                                                                                                                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.type`              | `Symbol`                                                                                                                                                                                    |
| `.tag`               | `[object Symbol]`                                                                                                                                                                           |
| `.builtin()`         | `undefined`                                                                                                                                                                                 |
| `.getTag()`          | `[object Symbol]`                                                                                                                                                                           |
| `.hasSpecialArgs()`  | `true`                                                                                                                                                                                      |
| `.instance()`        | `undefined`                                                                                                                                                                                 |
| `.instanceTypeOf()`  | `symbol`                                                                                                                                                                                    |
| `.info()`            | [see more]()                                                                                                                                                                                |
| `.isAvailable()`     | `true`                                                                                                                                                                                      |
| `.isConstructor()`   | `false`                                                                                                                                                                                     |
| `.isFactory()`       | `true`                                                                                                                                                                                      |
| `.isFunction()`      | `true`                                                                                                                                                                                      |
| `.isGlobal()`        | `true`                                                                                                                                                                                      |
| `.isIterator()`      | `false`                                                                                                                                                                                     |
| `.isNested()`        | `false`                                                                                                                                                                                     |
| `.isObject()`        | `false`                                                                                                                                                                                     |
| `.isPrimitive()`     | `true`                                                                                                                                                                                      |
| `.isStringifiable()` | `true`                                                                                                                                                                                      |
| `.isSyntatic()`      | `false`                                                                                                                                                                                     |
| `.isTypedArray()`    | `false`                                                                                                                                                                                     |
| `.ownKeys()`         | `[length, name, prototype, for, keyFor, asyncIterator, hasInstance, isConcatSpreadable, iterator, match, matchAll, replace, search, species, split, toPrimitive, toStringTag, unscopables]` |
| `.toString()`        | `function toString() { [native code] }`                                                                                                                                                     |
| `.typeOf()`          | `function`                                                                                                                                                                                  |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
