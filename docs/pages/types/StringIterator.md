# TypeTags `.StringIterator`

### Overview

The `[@@iterator]()` method returns a new iterator object that iterates over the code points of a `String` value, returning each code point as a `String` value.

### Usage

```js
import { TypeTags } from 'typetags'

const str = "The quick red fox jumped over the lazy dog's back."

const iterator = str[Symbol.iterator]()
let char = iterator.next()

while (!char.done && char.value !== ' ') {
  console.log(char.value)
  theChar = iterator.next()
}

TypeTags.get(str)
// → [object String]

TypeTags.get(iterator) === TypeTags.StringIterator
// → true

console.log(TypeTags.StringIterator)
// → [object String Iterator]
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `String.Iterator`                       |
| `.tag`               | `[object String Iterator]`              |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object String Iterator]`              |
| `.hasSpecialArgs()`  | `false`                                 |
| `.instance()`        | `undefined`                             |
| `.instanceTypeOf()`  | `object`                                |
| `.info()`            | [see more]()                            |
| `.isAvailable()`     | `true`                                  |
| `.isConstructor()`   | `false`                                 |
| `.isFactory()`       | `false`                                 |
| `.isFunction()`      | `false`                                 |
| `.isGlobal()`        | `false`                                 |
| `.isIterator()`      | `true`                                  |
| `.isNested()`        | `false`                                 |
| `.isObject()`        | `true`                                  |
| `.isPrimitive()`     | `false`                                 |
| `.isStringifiable()` | `true`                                  |
| `.isSyntatic()`      | `false`                                 |
| `.isTypedArray()`    | `false`                                 |
| `.ownKeys()`         | `[]`                                    |
| `.toString()`        | `function toString() { [native code] }` |
| `.typeOf()`          | `object`                                |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)
