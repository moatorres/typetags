# TypeTags `.Uint32Array`

### Overview

The `Uint32Array` typed array represents an array of 32-bit unsigned integers in the platform byte order.

### Usage

```js
import { TypeTags } from 'typetags'

var x = new Uint32Array([21, 31])
var y = new Uint32Array(x)

TypeTags.get(x)
// → [object Uint32Array]

TypeTags.get(y)
// → [object Uint32Array]

TypeTags.get(x) === TypeTags.Uint32Array
// → true

TypeTags.get(y) === TypeTags.Uint32Array
// → true
```

### Metadata (TType)

| Metadata             | Value                                          |
| -------------------- | ---------------------------------------------- |
| `.type`              | `Uint32Array`                                  |
| `.tag`               | `[object Uint32Array]`                         |
| `.builtin()`         | `undefined`                                    |
| `.getTag()`          | `[object Uint32Array]`                         |
| `.hasSpecialArgs()`  | `false`                                        |
| `.instance()`        | `undefined`                                    |
| `.instanceTypeOf()`  | `object`                                       |
| `.info()`            | [see more]()                                   |
| `.isAvailable()`     | `true`                                         |
| `.isConstructor()`   | `true`                                         |
| `.isFactory()`       | `false`                                        |
| `.isFunction()`      | `true`                                         |
| `.isGlobal()`        | `true`                                         |
| `.isIterator()`      | `false`                                        |
| `.isNested()`        | `false`                                        |
| `.isObject()`        | `false`                                        |
| `.isPrimitive()`     | `false`                                        |
| `.isStringifiable()` | `true`                                         |
| `.isSyntatic()`      | `false`                                        |
| `.isTypedArray()`    | `true`                                         |
| `.ownKeys()`         | `[length, name, prototype, BYTES_PER_ELEMENT]` |
| `.toString()`        | `function toString() { [native code] }`        |
| `.typeOf()`          | `function`                                     |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)
