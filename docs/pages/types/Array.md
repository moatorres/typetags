# TypeTags.`Array`

### Overview

The JavaScript `Array` class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Array) // → [object Array]
```

### Metadata (TType)

| Metadata             | Value                                          |
| -------------------- | ---------------------------------------------- |
| `.type`              | `Array`                                        |
| `.tag`               | `[object Array]`                               |
| `.builtin()`         | `undefined`                                    |
| `.getTag()`          | `[object Array]`                               |
| `.hasSpecialArgs()`  | `false`                                        |
| `.instance()`        | `undefined`                                    |
| `.instanceTypeOf()`  | `object`                                       |
| `.info()`            | [see more]()                                   |
| `.isAvailable()`     | `true`                                         |
| `.isConstructor()`   | `true`                                         |
| `.isFactory()`       | `true`                                         |
| `.isFunction()`      | `true`                                         |
| `.isGlobal()`        | `true`                                         |
| `.isIterator()`      | `false`                                        |
| `.isNested()`        | `false`                                        |
| `.isObject()`        | `false`                                        |
| `.isPrimitive()`     | `false`                                        |
| `.isStringifiable()` | `true`                                         |
| `.isSyntatic()`      | `false`                                        |
| `.isTypedArray()`    | `false`                                        |
| `.ownKeys()`         | `[length, name, prototype, isArray, from, of]` |
| `.toString()`        | `function toString() { [native code] }`        |
| `.typeOf()`          | `function`                                     |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
