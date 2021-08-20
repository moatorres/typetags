# TypeTags `.WeakSet`

### Overview

The `WeakSet` object lets you store weakly held _objects_ in a collection.

### Usage

```js
import { TypeTags } from 'typetags'

let mySet = new WeakSet()
let foo = {}
let bar = {}

mySet.add(foo)
mySet.add(bar)

TypeTags.get(mySet) === TypeTags.WeakSet
// → true

TypeTags.get(foo) === TypeTags.WeakSet
// → false

console.log(TypeTags.WeakSet)
// → [object WeakSet]
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `WeakSet`                               |
| `.tag`               | `[object WeakSet]`                      |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object WeakSet]`                      |
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
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
