# TypeTags `.AbortController`

### Overview

The `AbortController` interface represents a controller object that allows you to abort one or more Web requests as and when desired.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.AbortController)
// → [object AbortController]
```

### Predicate

#### `.isAbortController(value)`

- Checks if `value` **is** or **has** a default `AbortController` type tag.

```js
const { TypeTags } = require('typetags')

let abort = new AbortController()

TypeTags.isAbortController(abort)
// → true

let tag = TypeTags.get(abort)

TypeTags.isAbortController(tag)
// → true
```

### Metadata (TType)

| Metadata             | Value                         |
| -------------------- | ----------------------------- |
| `.type`              | `AbortController`             |
| `.tag`               | `[object AbortController]`    |
| `.builtin()`         | `[Function: AbortController]` |
| `.getTag()`          | `[object AbortController]`    |
| `.hasSpecialArgs()`  | `false`                       |
| `.instance()`        | `[]`                          |
| `.instanceTypeOf()`  | `object`                      |
| `.info()`            | [see more]()                  |
| `.isAvailable()`     | `true`                        |
| `.isConstructor()`   | `true`                        |
| `.isFactory()`       | `true`                        |
| `.isFunction()`      | `true`                        |
| `.isGlobal()`        | `true`                        |
| `.isIterator()`      | `false`                       |
| `.isNested()`        | `false`                       |
| `.isObject()`        | `false`                       |
| `.isPrimitive()`     | `false`                       |
| `.isStringifiable()` | `true`                        |
| `.isSyntatic()`      | `false`                       |
| `.isTypedArray()`    | `false`                       |
| `.ownKeys()`         | `[length, prototype, name]`   |
| `.toString()`        | `''`                          |
| `.typeOf()`          | `function`                    |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
