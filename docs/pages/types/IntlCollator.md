# TypeTags `.IntlCollator`

### Overview

The `Intl.Collator` object enables language-sensitive string comparison.

### Usage

```js
import { TypeTags } from 'typetags'

let local = new Intl.Collator('sv')

TypeTags.get(local)
// → [object Intl.Collator]

console.log(['Z', 'a', 'z', 'ä'].sort(local.compare))
// expected output: ["a", "z", "Z", "ä"]

let german = new Intl.Collator('de')

TypeTags.get(german)
// → [object Intl.Collator]

console.log(['Z', 'a', 'z', 'ä'].sort(german.compare))
// expected output: ["a", "ä", "z", "Z"]
```

### Metadata (TType)

| Metadata             | Value                                           |
| -------------------- | ----------------------------------------------- |
| `.type`              | `Intl.Collator`                                 |
| `.tag`               | `[object Intl.Collator]`                        |
| `.builtin()`         | `undefined`                                     |
| `.getTag()`          | `[object Intl.Collator]`                        |
| `.hasSpecialArgs()`  | `false`                                         |
| `.instance()`        | `undefined`                                     |
| `.instanceTypeOf()`  | `object`                                        |
| `.info()`            | [see more]()                                    |
| `.isAvailable()`     | `true`                                          |
| `.isConstructor()`   | `true`                                          |
| `.isFactory()`       | `true`                                          |
| `.isFunction()`      | `true`                                          |
| `.isGlobal()`        | `false`                                         |
| `.isIterator()`      | `false`                                         |
| `.isNested()`        | `true`                                          |
| `.isObject()`        | `false`                                         |
| `.isPrimitive()`     | `false`                                         |
| `.isStringifiable()` | `true`                                          |
| `.isSyntatic()`      | `false`                                         |
| `.isTypedArray()`    | `false`                                         |
| `.ownKeys()`         | `[length, name, prototype, supportedLocalesOf]` |
| `.toString()`        | `function toString() { [native code] }`         |
| `.typeOf()`          | `function`                                      |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)
