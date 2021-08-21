# TypeTags `.Function`

### Overview

Every JavaScript function is actually a `Function` object. This can be seen with the code `(function(){}).constructor === Function`, which returns true.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Function)
// → [object Function]
```

### Predicate

#### `.isFunction(value)`

- Checks if `value` **is** or **has** a default `Function` type tag.

```js
const { TypeTags } = require('typetags')

function sayHi() {
  return 'Oh, hi!'
}

TypeTags.isFunction(sayHi)
// → true

TypeTags.isFunction(sayHi.toString())
// → false
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `Function`                              |
| `.tag`               | `[object Function]`                     |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object Function]`                     |
| `.hasSpecialArgs()`  | `false`                                 |
| `.instance()`        | `undefined`                             |
| `.instanceTypeOf()`  | `function`                              |
| `.info()`            | [see more]()                            |
| `.isAvailable()`     | `true`                                  |
| `.isConstructor()`   | `true`                                  |
| `.isFactory()`       | `true`                                  |
| `.isFunction()`      | `true`                                  |
| `.isGlobal()`        | `true`                                  |
| `.isIterator()`      | `false`                                 |
| `.isNested()`        | `false`                                 |
| `.isObject()`        | `false`                                 |
| `.isPrimitive()`     | `true`                                  |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
