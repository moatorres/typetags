# TypeTags `.IntlPluralRules`

### Overview

The `Intl.PluralRules` object enables plural-sensitive formatting and plural-related language rules.

### Usage

```js
import { TypeTags } from 'typetags'

const arabic = new Intl.PluralRules('ar-EG').select(6)

TypeTags.IntlPluralRules === TypeTags.get(arabic)
// → true

console.log(arabic)
// → 'few'
```

### Metadata (TType)

| Metadata             | Value                                           |
| -------------------- | ----------------------------------------------- |
| `.type`              | `Intl.PluralRules`                              |
| `.tag`               | `[object Intl.PluralRules]`                     |
| `.builtin()`         | `undefined`                                     |
| `.getTag()`          | `[object Intl.PluralRules]`                     |
| `.hasSpecialArgs()`  | `false`                                         |
| `.instance()`        | `undefined`                                     |
| `.instanceTypeOf()`  | `object`                                        |
| `.info()`            | [see more]()                                    |
| `.isAvailable()`     | `true`                                          |
| `.isConstructor()`   | `true`                                          |
| `.isFactory()`       | `false`                                         |
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

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules)
