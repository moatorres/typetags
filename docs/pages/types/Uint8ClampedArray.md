# TypeTags `.Uint8ClampedArray`

### Overview

The `Uint8ClampedArray` typed array represents an array of 8-bit unsigned integers clamped to `0-255`; if you specified a value that is out of the range of `[0, 255]`, `0` or `255` will be set instead; if you specify a non-integer, the nearest integer will be set.

### Usage

```js
import { TypeTags } from 'typetags'

let iterable = (function* () {
  yield* [1, 2, 3]
})()

TypeTags.get(iterable)
// → [object Generator]

let clamped = new Uint8ClampedArray(iterable)

TypeTags.get(clamped)
// → [object Uint8ClampedArray]

TypeTags.get(clamped) === TypeTags.Uint8ClampedArray
// → true
```

### Metadata (TType)

| Metadata             | Value                                          |
| -------------------- | ---------------------------------------------- |
| `.type`              | `Uint8ClampedArray`                            |
| `.tag`               | `[object Uint8ClampedArray]`                   |
| `.builtin()`         | `undefined`                                    |
| `.getTag()`          | `[object Uint8ClampedArray]`                   |
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

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)
