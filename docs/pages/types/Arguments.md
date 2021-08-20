# TypeTags `.Arguments`

### Overview

`arguments` is an `Array-like` object accessible inside functions that contains the values of the arguments passed to that function.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Arguments)
// → [object Arguments]
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `Arguments`                             |
| `.tag`               | `[object Arguments]`                    |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object Arguments]`                    |
| `.hasSpecialArgs()`  | `false`                                 |
| `.instance()`        | `undefined`                             |
| `.instanceTypeOf()`  | `object`                                |
| `.info()`            | [see more]()                            |
| `.isAvailable()`     | `true`                                  |
| `.isConstructor()`   | `false`                                 |
| `.isFactory()`       | `false`                                 |
| `.isFunction()`      | `false`                                 |
| `.isGlobal()`        | `false`                                 |
| `.isIterator()`      | `false`                                 |
| `.isNested()`        | `false`                                 |
| `.isObject()`        | `true`                                  |
| `.isPrimitive()`     | `false`                                 |
| `.isStringifiable()` | `false`                                 |
| `.isSyntatic()`      | `true`                                  |
| `.isTypedArray()`    | `false`                                 |
| `.ownKeys()`         | `[0, 1, 2, 3, 4, 5, length, callee]`    |
| `.toString()`        | `function toString() { [native code] }` |
| `.typeOf()`          | `object`                                |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
