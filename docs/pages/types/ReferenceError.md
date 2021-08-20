# TypeTags `.ReferenceError`

### Overview

The `ReferenceError` object represents an error when a non-existent variable is referenced.

Note that, since error objects do **not** have unique type tags, a `ReferenceError` type tag is the same as any other `Error` object. If you need to check if an object is an instance of a `ReferenceError` object, use `instanceof` instead.

### Usage

```js
import { TypeTags } from 'typetags'

const catchRefError = () => {
  let res
  try {
    let a = undefinedVariable
  } catch (error) {
    return (res = error instanceof ReferenceError)
  }
}

TypeTags.get(catchRefError) === TypeTags.ReferenceError
// → false

TypeTags.Error === TypeTags.ReferenceError
// → true

console.log(res)
// → true
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `ReferenceError`                        |
| `.tag`               | `[object Error]`                        |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object Error]`                        |
| `.hasSpecialArgs()`  | `false`                                 |
| `.instance()`        | `undefined`                             |
| `.instanceTypeOf()`  | `object`                                |
| `.info()`            | [see more]()                            |
| `.isAvailable()`     | `true`                                  |
| `.isConstructor()`   | `true`                                  |
| `.isFactory()`       | `true`                                  |
| `.isFunction()`      | `true`                                  |
| `.isGlobal()`        | `true`                                  |
| `.isIterator()`      | `false`                                 |
| `.isNested()`        | `false`                                 |
| `.isObject()`        | `false`                                 |
| `.isPrimitive()`     | `false`                                 |
| `.isStringifiable()` | `true`                                  |
| `.isSyntatic()`      | `false`                                 |
| `.isTypedArray()`    | `false`                                 |
| `.ownKeys()`         | `[length, name, prototype]`             |
| `.toString()`        | `function toString() { [native code] }` |
| `.typeOf()`          | `function`                              |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
