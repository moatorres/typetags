# TypeTags `.MapIterator`

### Overview

The initial value of the `@@iterator` property is the same function object as the initial value of the `entries` method.

### Usage

```js
import { TypeTags } from 'typetags'

const iterator = map[Symbol.iterator]()

const tag = TypeTags.get(iterator)

console.log(tag)
// → [object Map Iterator]

console.log(TypeTags.MapIterator)
// → [object Map Iterator]
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `Map.Iterator`                          |
| `.tag`               | `[object Map Iterator]`                 |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object Map Iterator]`                 |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator)
