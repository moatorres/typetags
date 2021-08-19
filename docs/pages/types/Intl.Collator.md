# TypeTags.`Intl.Collator`

### Overview

The `Intl.Collator`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags['Intl.Collator']) // → [object Intl.Collator]
```

### Metadata (TType)

| Metadata             | Value                                        |
| -------------------- | -------------------------------------------- |
| `.type`              | `Intl.Collator`                              |
| `.tag`               | `[object Intl.Collator]`                     |
| `.builtin()`         | `undefined`                                  |
| `.getTag()`          | `[object Intl.Collator]`                     |
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
