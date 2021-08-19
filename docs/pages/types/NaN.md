# TypeTags.`NaN`

### Overview

The `NaN`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.NaN) // → [object Number]
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `NaN`                                   |
| `.tag`               | `[object Number]`                       |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object Number]`                       |
| `.hasSpecialArgs()`  | `false`                                 |
| `.instance()`        | `undefined`                             |
| `.instanceTypeOf()`  | `number`                                |
| `.info()`            | [see more]()                            |
| `.isAvailable()`     | `true`                                  |
| `.isConstructor()`   | `false`                                 |
| `.isFactory()`       | `false`                                 |
| `.isFunction()`      | `false`                                 |
| `.isGlobal()`        | `true`                                  |
| `.isIterator()`      | `false`                                 |
| `.isNested()`        | `false`                                 |
| `.isObject()`        | `false`                                 |
| `.isPrimitive()`     | `false`                                 |
| `.isStringifiable()` | `true`                                  |
| `.isSyntatic()`      | `false`                                 |
| `.isTypedArray()`    | `false`                                 |
| `.ownKeys()`         | `[]`                                    |
| `.toString()`        | `function toString() { [native code] }` |
| `.typeOf()`          | `number`                                |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
