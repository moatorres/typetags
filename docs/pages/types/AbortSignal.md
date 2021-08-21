# TypeTags `.AbortSignal`

### Overview

The `signal` read-only property of the `AbortController` interface returns an `AbortSignal` object instance, which can be used to communicate with/abort a DOM request as desired.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.AbortSignal)
// → [object AbortSignal]

TypeTags.get(new AbortController().signal)
// → [object AbortSignal]
```

### Predicate

#### `.isAbortSignal(value)`

- Checks if `value` **is** or **has** a default `AbortSignal` type tag.

```js
const { TypeTags } = require('typetags')

let abort = new AbortController()

TypeTags.isAbortSignal(abort.signal)
// → true

TypeTags.get(abort.signal)
// → [object AbortSignal]
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `AbortSignal`                           |
| `.tag`               | `[object AbortSignal]`                  |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object AbortSignal]`                  |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal)
