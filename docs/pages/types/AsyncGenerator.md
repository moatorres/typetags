# TypeTags `.AsyncGenerator`

### Overview

The `AsyncGenerator` object is returned by an async generator function and it conforms to both the iterable protocol and the iterator protocol.

### Usage

```js
import { TypeTags } from 'typetags'

async function* infinite() {
  let index = 0

  while (true) {
    yield index++
  }
}

const asyncGenerator = infinite()

console.log(TypeTags.AsyncGenerator)
// → [object AsyncGenerator]
```

### Predicate

#### `.isAsyncGenerator(value)`

- Checks if `value` **is** or **has** a default `AsyncGenerator` type tag.

```js
const { TypeTags } = require('typetags')

let asyncGen = (async function* () {})()

TypeTags.isAsyncGenerator(asyncGen)
// → true

let maybeTag = asyncGen.toString()

TypeTags.isAsyncGenerator(maybeTag)
// → true
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `AsyncGenerator`                        |
| `.tag`               | `[object AsyncGenerator]`               |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object AsyncGenerator]`               |
| `.hasSpecialArgs()`  | `false`                                 |
| `.instance()`        | `undefined`                             |
| `.instanceTypeOf()`  | `object`                                |
| `.info()`            | [see more]()                            |
| `.isAvailable()`     | `true`                                  |
| `.isConstructor()`   | `false`                                 |
| `.isFactory()`       | `false`                                 |
| `.isFunction()`      | `false`                                 |
| `.isGlobal()`        | `false`                                 |
| `.isIterator()`      | `false`                                 |
| `.isNested()`        | `false`                                 |
| `.isObject()`        | `true`                                  |
| `.isPrimitive()`     | `false`                                 |
| `.isStringifiable()` | `true`                                  |
| `.isSyntatic()`      | `true`                                  |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
