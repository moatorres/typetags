# TypeTags `.SetIterator`

### Overview

The initial value of the `@@iterator` property is the same function object as the initial value of the `values` property.

### Usage

```js
import { TypeTags } from 'typetags'

const mySet = new Set()

mySet.add(42)

const iterator = mySet[Symbol.iterator]()

TypeTags.get(iterator)
// → [object Set Iterator]

TypeTags.SetIterator === TypeTags.get(mySet)
// → false
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `Set.Iterator`                          |
| `.tag`               | `[object Set Iterator]`                 |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object Set Iterator]`                 |
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

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator)
