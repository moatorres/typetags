# TypeTags.`Intl.NumberFormat`

### Overview

The `Intl.NumberFormat`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags['Intl.NumberFormat']) // → [object Intl.NumberFormat]
```

### Metadata (TType)

| Metadata             | Value                                        |
| -------------------- | -------------------------------------------- |
| `.type`              | `Intl.NumberFormat`                          |
| `.tag`               | `[object Intl.NumberFormat]`                 |
| `.builtin()`         | `undefined`                                  |
| `.getTag()`          | `[object Intl.NumberFormat]`                 |
| `.hasSpecialArgs()`  | `false`                                      |
| `.instance()`        | `undefined`                                  |
| `.instanceTypeOf()`  | `object`                                     |
| `.info()`            | [see more]()                                 |
| `.isAvailable()`     | `true`                                       |
| `.isConstructor()`   | `true`                                       |
| `.isFactory()`       | `true`                                       |
| `.isFunction()`      | `true`                                       |
| `.isGlobal()`        | `false`                                      |
| `.isIterator()`      | `false`                                      |
| `.isNested()`        | `true`                                       |
| `.isObject()`        | `false`                                      |
| `.isPrimitive()`     | `false`                                      |
| `.isStringifiable()` | `true`                                       |
| `.isSyntatic()`      | `false`                                      |
| `.isTypedArray()`    | `false`                                      |
| `.ownKeys()`         | `[length,name,prototype,supportedLocalesOf]` |
| `.toString()`        | `function toString() { [native code] }`      |
| `.typeOf()`          | `function`                                   |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
