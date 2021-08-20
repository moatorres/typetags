# TypeTags `.Reflect`

### Overview

`Reflect` is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of proxy handlers. `Reflect` is not a function object, so it's not constructible.

### Usage

```js
import { TypeTags } from 'typetags'

function grades(a, b, c) {
  this.sum = a + b + c
}

const args = [1, 2, 3]

const res = Reflect.construct(grades, args)

console.log(res.sum)
// expected output: 6

TypeTags.get(res) === TypeTags.Reflect
// → false

TypeTags.get(Reflect) === TypeTags.Reflect
// → true

console.log(TypeTags.Reflect)
// → [object Reflect]
```

### Metadata (TType)

| Metadata             | Value                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.type`              | `Reflect`                                                                                                                                                               |
| `.tag`               | `[object Reflect]`                                                                                                                                                      |
| `.builtin()`         | `undefined`                                                                                                                                                             |
| `.getTag()`          | `[object Reflect]`                                                                                                                                                      |
| `.hasSpecialArgs()`  | `false`                                                                                                                                                                 |
| `.instance()`        | `undefined`                                                                                                                                                             |
| `.instanceTypeOf()`  | `object`                                                                                                                                                                |
| `.info()`            | [see more]()                                                                                                                                                            |
| `.isAvailable()`     | `true`                                                                                                                                                                  |
| `.isConstructor()`   | `false`                                                                                                                                                                 |
| `.isFactory()`       | `false`                                                                                                                                                                 |
| `.isFunction()`      | `false`                                                                                                                                                                 |
| `.isGlobal()`        | `true`                                                                                                                                                                  |
| `.isIterator()`      | `false`                                                                                                                                                                 |
| `.isNested()`        | `false`                                                                                                                                                                 |
| `.isObject()`        | `true`                                                                                                                                                                  |
| `.isPrimitive()`     | `false`                                                                                                                                                                 |
| `.isStringifiable()` | `true`                                                                                                                                                                  |
| `.isSyntatic()`      | `false`                                                                                                                                                                 |
| `.isTypedArray()`    | `false`                                                                                                                                                                 |
| `.ownKeys()`         | `[defineProperty, deleteProperty, apply, construct, get, getOwnPropertyDescriptor, getPrototypeOf, has, isExtensible, ownKeys, preventExtensions, set, setPrototypeOf]` |
| `.toString()`        | `function toString() { [native code] }`                                                                                                                                 |
| `.typeOf()`          | `object`                                                                                                                                                                |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
