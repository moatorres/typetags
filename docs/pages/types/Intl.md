# TypeTags `.Intl`

### Overview

The `Intl` object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Intl)
// → [object Intl]
```

### Predicate

#### `.isIntl(value)`

- Checks if `value` **is** or **has** a default `Intl` type tag.

```js
const { TypeTags } = require('typetags')

TypeTags.isIntl(Intl)
// → true

TypeTags.isIntl(Intl.toString())
// → true
```

### Metadata (TType)

| Metadata             | Value                                                                                                                                         |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `.type`              | `Intl`                                                                                                                                        |
| `.tag`               | `[object Intl]`                                                                                                                               |
| `.builtin()`         | `undefined`                                                                                                                                   |
| `.getTag()`          | `[object Intl]`                                                                                                                               |
| `.hasSpecialArgs()`  | `false`                                                                                                                                       |
| `.instance()`        | `undefined`                                                                                                                                   |
| `.instanceTypeOf()`  | `object`                                                                                                                                      |
| `.info()`            | [see more]()                                                                                                                                  |
| `.isAvailable()`     | `true`                                                                                                                                        |
| `.isConstructor()`   | `false`                                                                                                                                       |
| `.isFactory()`       | `false`                                                                                                                                       |
| `.isFunction()`      | `false`                                                                                                                                       |
| `.isGlobal()`        | `true`                                                                                                                                        |
| `.isIterator()`      | `false`                                                                                                                                       |
| `.isNested()`        | `false`                                                                                                                                       |
| `.isObject()`        | `true`                                                                                                                                        |
| `.isPrimitive()`     | `false`                                                                                                                                       |
| `.isStringifiable()` | `true`                                                                                                                                        |
| `.isSyntatic()`      | `false`                                                                                                                                       |
| `.isTypedArray()`    | `false`                                                                                                                                       |
| `.ownKeys()`         | `[getCanonicalLocales, DateTimeFormat, NumberFormat, Collator, PluralRules, RelativeTimeFormat, ListFormat, Locale, DisplayNames, Segmenter]` |
| `.toString()`        | `function toString() { [native code] }`                                                                                                       |
| `.typeOf()`          | `object`                                                                                                                                      |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
