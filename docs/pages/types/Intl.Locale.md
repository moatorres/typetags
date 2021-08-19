# TypeTags.`Intl.Locale`

### Overview

The `Intl.Locale`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags['Intl.Locale']) // → [object Intl.Locale]
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `Intl.Locale`                           |
| `.tag`               | `[object Intl.Locale]`                  |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object Intl.Locale]`                  |
| `.hasSpecialArgs()`  | `true`                                  |
| `.instance()`        | `undefined`                             |
| `.instanceTypeOf()`  | `object`                                |
| `.info()`            | [see more]()                            |
| `.isAvailable()`     | `true`                                  |
| `.isConstructor()`   | `true`                                  |
| `.isFactory()`       | `false`                                 |
| `.isFunction()`      | `true`                                  |
| `.isGlobal()`        | `false`                                 |
| `.isIterator()`      | `false`                                 |
| `.isNested()`        | `true`                                  |
| `.isObject()`        | `false`                                 |
| `.isPrimitive()`     | `false`                                 |
| `.isStringifiable()` | `true`                                  |
| `.isSyntatic()`      | `false`                                 |
| `.isTypedArray()`    | `false`                                 |
| `.ownKeys()`         | `[length,name,prototype]`               |
| `.toString()`        | `function toString() { [native code] }` |
| `.typeOf()`          | `function`                              |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
