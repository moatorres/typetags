# TypeTags `.RangeError`

### Overview

The `RangeError` object indicates an error when a value is not in the set or range of allowed values.

Note that, since error objects do **not** have unique type tags, a `RangeError` tag would be the same as any other `Error` object. If you need to check if an object is a `RangeError` object, use `instanceof` instead.

### Usage

```js
import { TypeTags } from 'typetags'

function check(n) {
  if (!(n >= -500 && n <= 500)) {
    return new TypeError() // not a RangeError
  }
}

const res = check(2000)

TypeTags.get(res) === TypeTags.RangeError
// → true

TypeTags.TypeError === TypeTags.RangeError
// → true

res instanceof RangeError
// → false
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `RangeError`                            |
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

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
