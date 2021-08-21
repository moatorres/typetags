# TypeTags `.AsyncGenFn`

### Overview

The `async function*` declaration (**async function** keyword followed by an asterisk) defines an async generator function, which returns an `AsyncGenerator` object.

### Usage

```js
import { TypeTags } from 'typetags'

async function* infinite() {
  let index = 0

  while (true) {
    yield index++
  }
}

console.log(TypeTags.AsyncGenFn)
// → [object AsyncGeneratorFunction]

console.log(TypeTags.AsyncGeneratorFunction)
// → [object AsyncGeneratorFunction]
```

### Predicate

#### `.isAsyncGenFn(value)`

- Checks if `value` **is** or **has** a default `AsyncGeneratorFunction` type tag.

```js
const { TypeTags } = require('typetags')

let myFunction = async function* () {
  yield [1, 2, 3]
}

TypeTags.isAsyncGenFn(myFunction)
// → true

TypeTags.isAsyncGeneratorFunction(myFunction)
// → true
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `AsyncGeneratorFunction`                |
| `.tag`               | `[object AsyncGeneratorFunction]`       |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object AsyncGeneratorFunction]`       |
| `.hasSpecialArgs()`  | `true`                                  |
| `.instance()`        | `undefined`                             |
| `.instanceTypeOf()`  | `object`                                |
| `.info()`            | [see more]()                            |
| `.isAvailable()`     | `true`                                  |
| `.isConstructor()`   | `false`                                 |
| `.isFactory()`       | `true`                                  |
| `.isFunction()`      | `true`                                  |
| `.isGlobal()`        | `false`                                 |
| `.isIterator()`      | `false`                                 |
| `.isNested()`        | `false`                                 |
| `.isObject()`        | `false`                                 |
| `.isPrimitive()`     | `false`                                 |
| `.isStringifiable()` | `true`                                  |
| `.isSyntatic()`      | `true`                                  |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
