# TypeTags `.IntlListFormat`

### Overview

The `Intl.ListFormat` object enables language-sensitive list formatting.

### Usage

```js
import { TypeTags } from 'typetags'

const vehicles = ['Motorcycle', 'Bus', 'Car']

const englishFormatter = new Intl.ListFormat('en', {
  style: 'long',
  type: 'conjunction',
})

TypeTags.get(englishFormatter)
// → [object Intl.ListFormat]

console.log(englishFormatter.format(vehicles))
// expected output: 'Motorcycle, Bus, and Car'

const germanFormatter = new Intl.ListFormat('de', {
  style: 'short',
  type: 'disjunction',
})

TypeTags.get(germanFormatter)
// → [object Intl.ListFormat]

console.log(germanFormatter.format(vehicles))
// expected output: 'Motorcycle, Bus oder Car'
```

### Predicate

#### `.isIntlListFormat(value)`

- Checks if `value` **is** or **has** a default `IntlListFormat` type tag.

```js
const { TypeTags } = require('typetags')

const formatter = new Intl.ListFormat('en-GB')

TypeTags.isIntlListFormat(formatter)
// → true
```

### Metadata (TType)

| Metadata             | Value                                           |
| -------------------- | ----------------------------------------------- |
| `.type`              | `Intl.ListFormat`                               |
| `.tag`               | `[object Intl.ListFormat]`                      |
| `.builtin()`         | `undefined`                                     |
| `.getTag()`          | `[object Intl.ListFormat]`                      |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat)
