# TypeTags `.ArrayIterator`

### Overview

The `@@iterator` method is part of [The Iterable Protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), that defines how to synchronously iterate over a sequence of values.

The initial value of the `@@iterator` property is the same function object as the initial value of the `values()` property.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.ArrayIterator)
// → [object Array Iterator]
```

### Predicate

#### `.isArrayIterator(value)`

- Checks if `value` **is** or **has** a default `Array Iterator` type tag.

```js
const { TypeTags } = require('typetags')

let iterator = [][Symbol.iterator]()

TypeTags.isArrayIterator(iterator)
// → true

let tag = TypeTags.get(iterator)

TypeTags.isArrayIterator(tag)
// → true
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `Array.Iterator`                        |
| `.tag`               | `[object Array Iterator]`               |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object Array Iterator]`               |
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

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
