# TypeTags `.IntlRelativeTimeFormat`

### Overview

The `Intl.RelativeTimeFormat` object enables language-sensitive relative time formatting.

### Usage

```js
import { TypeTags } from 'typetags'

const rtf = new Intl.RelativeTimeFormat('en', { style: 'narrow' })

TypeTags.IntlRelativeFormat === TypeTags.get(rtf)
// → true

console.log(rtf.format(3, 'quarter'))
// expected output: 'in 3 qtrs.'
```

### Metadata (TType)

| Metadata             | Value                                           |
| -------------------- | ----------------------------------------------- |
| `.type`              | `Intl.RelativeTimeFormat`                       |
| `.tag`               | `[object Intl.RelativeTimeFormat]`              |
| `.builtin()`         | `undefined`                                     |
| `.getTag()`          | `[object Intl.RelativeTimeFormat]`              |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat)
