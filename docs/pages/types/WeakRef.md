# TypeTags `.WeakRef`

### Overview

A `WeakRef` object lets you hold a weak reference to another object, without preventing that object from getting garbage-collected.

### Usage

```js
import { TypeTags } from 'typetags'

class Counter {
  constructor(element = 0) {
    this.ref = new WeakRef(element)
    this.start()
  }

  static getRefType() {
    return TypeTags.get(this.ref)
  }
}

TypeTags.WeakRef === Counter.getRefType()
// → true

console.log(TypeTags.WeakRef)
// → [object WeakRef]
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `WeakRef`                               |
| `.tag`               | `[object WeakRef]`                      |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object WeakRef]`                      |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)
