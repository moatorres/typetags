# TypeTags.`String.Iterator`

### Overview

The `String.Iterator`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags['String.Iterator']) // → [object String Iterator]
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
