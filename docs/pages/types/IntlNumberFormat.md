# TypeTags `.IntlNumberFormat`

### Overview

The `Intl.NumberFormat` object enables language-sensitive number formatting.

### Usage

```js
import { TypeTags } from 'typetags'

const japanese = new Intl.NumberFormat('ja-JP', {
  style: 'currency',
  currency: 'JPY',
})

TypeTags.IntlNumberFormat === TypeTags.get(japanese)
// → true

console.log(japanese.format(number))
// expected output: '￥123,457'
```

### Metadata (TType)

| Metadata             | Value                                           |
| -------------------- | ----------------------------------------------- |
| `.type`              | `Intl.NumberFormat`                             |
| `.tag`               | `[object Intl.NumberFormat]`                    |
| `.builtin()`         | `undefined`                                     |
| `.getTag()`          | `[object Intl.NumberFormat]`                    |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
