# TypeTags `.WeakMap`

### Overview

The `WeakMap` object is a collection of key/value pairs in which the keys are weakly referenced. The keys must be objects and the values can be arbitrary values.

### Usage

```js
import { TypeTags } from 'typetags'

const privates = new WeakMap()

function Public() {
  const hidden = {
    // private data goes here
  }
  privates.set(this, hidden)
}

Public.prototype.method = function () {
  const secrets = privates.get(this)
  // do stuff with private data
}

TypeTags.get(privates) === TypeTags.WeakMap
// → true

console.log(TypeTags.WeakMap)
// → [object WeakMap]
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `WeakMap`                               |
| `.tag`               | `[object WeakMap]`                      |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object WeakMap]`                      |
| `.hasSpecialArgs()`  | `false`                                 |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
