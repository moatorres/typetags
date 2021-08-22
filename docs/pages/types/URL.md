# TypeTags `.URL`

### Overview

The `URL` interface is used to parse, construct, normalize, and encode URLs. It works by providing properties which allow you to easily read and modify the components of a URL.

### Usage

```js
import { TypeTags } from 'typetags'

let original = 'https://typetags.org'

let update = new URL('/types/URL', original)
// → 'https://typetags.org/types/URL'

TypeTags.get(original) === TypeTags.URL
// → true

console.log(TypeTags.URL)
// → [object URL]
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `URL`                                   |
| `.tag`               | `[object URL]`                          |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object URL]`                          |
| `.hasSpecialArgs()`  | `true`                                  |
| `.instance()`        | `undefined`                             |
| `.instanceTypeOf()`  | `object`                                |
| `.info()`            | [see more]()                            |
| `.isAvailable()`     | `true`                                  |
| `.isConstructor()`   | `true`                                  |
| `.isFactory()`       | `false`                                 |
| `.isFunction()`      | `true`                                  |
| `.isGlobal()`        | `true`                                  |
| `.isIterator()`      | `false`                                 |
| `.isNested()`        | `false`                                 |
| `.isObject()`        | `false`                                 |
| `.isPrimitive()`     | `false`                                 |
| `.isStringifiable()` | `true`                                  |
| `.isSyntatic()`      | `false`                                 |
| `.isTypedArray()`    | `false`                                 |
| `.ownKeys()`         | `[length, prototype, name]`             |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/URL)
