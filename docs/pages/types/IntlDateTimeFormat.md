# TypeTags `.IntlDateTimeFormat`

### Overview

The `Intl.DateTimeFormat` object enables language-sensitive date and time formatting.

### Usage

```js
import { TypeTags } from 'typetags'

let us = new Intl.DateTimeFormat('en-US')

TypeTags.get(us)
// → [object Intl.DateTimeFormat]

console.log(us.format(date))
// expected output: '12/20/2020'

let pt = new Intl.DateTimeFormat('pt-BR')

TypeTags.get(pt)
// → [object Intl.DateTimeFormat]

console.log(pt.format(date))
// expected output: '20/12/2020'
```

### Metadata (TType)

| Metadata             | Value                                           |
| -------------------- | ----------------------------------------------- |
| `.type`              | `Intl.DateTimeFormat`                           |
| `.tag`               | `[object Intl.DateTimeFormat]`                  |
| `.builtin()`         | `undefined`                                     |
| `.getTag()`          | `[object Intl.DateTimeFormat]`                  |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
