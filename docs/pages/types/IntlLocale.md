# TypeTags `.IntlLocale`

### Overview

The `Intl.Locale` object is a standard built-in property of the Intl object that represents a Unicode locale identifier.

### Usage

```js
import { TypeTags } from 'typetags'

const korean = new Intl.Locale('ko', {
  script: 'Kore',
  region: 'KR',
  hourCycle: 'h24',
  calendar: 'gregory',
})

TypeTags.get(korean)
// → [object Intl.Locale]

console.log(korean.hourCycle)
// expected output: 'h24'
```

### Predicate

#### `.isIntlLocale(value)`

- Checks if `value` **is** or **has** a default `IntlLocale` type tag.

```js
const { TypeTags } = require('typetags')

const formatter = new Intl.Locale('en-GB')

TypeTags.isIntlLocale(formatter)
// → true
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
| `.ownKeys()`         | `[length, name, prototype]`             |
| `.toString()`        | `function toString() { [native code] }` |
| `.typeOf()`          | `function`                              |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)
