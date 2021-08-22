# TypeTags `.Symbol`

### Overview

`Symbol` is a built-in object whose constructor returns a symbol primitive — also called a `Symbol` value or just a `Symbol` — that’s guaranteed to be unique.

### Usage

```js
import { TypeTags } from 'typetags'

let sym = Symbol('foo')

TypeTags.get(sym) === TypeTags.Symbol
// → true

let symObj = Object(sym)

TypeTags.get(symObj) === TypeTags.Symbol
// → false

console.log(TypeTags.Symbol)
// → [object Symbol]
```

### Metadata (TType)

| Metadata             | Value                                                                                                                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.type`              | `Symbol`                                                                                                                                                                                    |
| `.tag`               | `[object Symbol]`                                                                                                                                                                           |
| `.builtin()`         | `undefined`                                                                                                                                                                                 |
| `.getTag()`          | `[object Symbol]`                                                                                                                                                                           |
| `.hasSpecialArgs()`  | `true`                                                                                                                                                                                      |
| `.instance()`        | `undefined`                                                                                                                                                                                 |
| `.instanceTypeOf()`  | `symbol`                                                                                                                                                                                    |
| `.info()`            | [see more]()                                                                                                                                                                                |
| `.isAvailable()`     | `true`                                                                                                                                                                                      |
| `.isConstructor()`   | `false`                                                                                                                                                                                     |
| `.isFactory()`       | `true`                                                                                                                                                                                      |
| `.isFunction()`      | `true`                                                                                                                                                                                      |
| `.isGlobal()`        | `true`                                                                                                                                                                                      |
| `.isIterator()`      | `false`                                                                                                                                                                                     |
| `.isNested()`        | `false`                                                                                                                                                                                     |
| `.isObject()`        | `false`                                                                                                                                                                                     |
| `.isPrimitive()`     | `true`                                                                                                                                                                                      |
| `.isStringifiable()` | `true`                                                                                                                                                                                      |
| `.isSyntatic()`      | `false`                                                                                                                                                                                     |
| `.isTypedArray()`    | `false`                                                                                                                                                                                     |
| `.ownKeys()`         | `[length, name, prototype, for, keyFor, asyncIterator, hasInstance, isConcatSpreadable, iterator, match, matchAll, replace, search, species, split, toPrimitive, toStringTag, unscopables]` |
| `.toString()`        | `function toString() { [native code] }`                                                                                                                                                     |
| `.typeOf()`          | `function`                                                                                                                                                                                  |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
