# TypeTags `.Undefined`

### Overview

The global `undefined` property represents the primitive value `undefined`. It is one of JavaScript's primitive types.

### Usage

```js
import { TypeTags } from 'typetags'

function test(t) {
  if (t === undefined) {
    return TypeTags.Undefined
  }
  return t
}

let something

console.log(test(something))
// → [object Undefined]
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `undefined`                             |
| `.tag`               | `undefined`                             |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `undefined`                             |
| `.hasSpecialArgs()`  | `undefined`                             |
| `.instance()`        | `undefined`                             |
| `.instanceTypeOf()`  | `undefined`                             |
| `.info()`            | [see more]()                            |
| `.isAvailable()`     | `false`                                 |
| `.isConstructor()`   | `undefined`                             |
| `.isFactory()`       | `undefined`                             |
| `.isFunction()`      | `undefined`                             |
| `.isGlobal()`        | `undefined`                             |
| `.isIterator()`      | `undefined`                             |
| `.isNested()`        | `undefined`                             |
| `.isObject()`        | `undefined`                             |
| `.isPrimitive()`     | `undefined`                             |
| `.isStringifiable()` | `undefined`                             |
| `.isSyntatic()`      | `undefined`                             |
| `.isTypedArray()`    | `undefined`                             |
| `.ownKeys()`         | `[undefined]`                           |
| `.toString()`        | `function toString() { [native code] }` |
| `.typeOf()`          | `undefined`                             |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
