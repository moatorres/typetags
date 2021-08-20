# TypeTags `.AbortController`

### Overview

The `AbortController` interface represents a controller object that allows you to abort one or more Web requests as and when desired.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.AbortController)
// → [object AbortController]
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
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
