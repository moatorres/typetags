# TypeTags `.String`

### Overview

The `String` object is used to represent and manipulate a sequence of characters.

### Usage

```js
import { TypeTags } from 'typetags'

const stringPri = 'A string primitive'
const stringObj = new String('A String object')

TypeTags.get(stringObj) === TypeTags.Object
// → true

TypeTags.get(stringPri) === TypeTags.String
// → true

console.log(TypeTags.get(stringPri))
// → [object String]

console.log(TypeTags.get(stringObj))
// → [object Object]
```

### Metadata (TType)

| Metadata             | Value                                                         |
| -------------------- | ------------------------------------------------------------- |
| `.type`              | `String`                                                      |
| `.tag`               | `[object String]`                                             |
| `.builtin()`         | `undefined`                                                   |
| `.getTag()`          | `[object String]`                                             |
| `.hasSpecialArgs()`  | `false`                                                       |
| `.instance()`        | `undefined`                                                   |
| `.instanceTypeOf()`  | `string`                                                      |
| `.info()`            | [see more]()                                                  |
| `.isAvailable()`     | `true`                                                        |
| `.isConstructor()`   | `true`                                                        |
| `.isFactory()`       | `true`                                                        |
| `.isFunction()`      | `true`                                                        |
| `.isGlobal()`        | `true`                                                        |
| `.isIterator()`      | `false`                                                       |
| `.isNested()`        | `false`                                                       |
| `.isObject()`        | `false`                                                       |
| `.isPrimitive()`     | `true`                                                        |
| `.isStringifiable()` | `true`                                                        |
| `.isSyntatic()`      | `false`                                                       |
| `.isTypedArray()`    | `false`                                                       |
| `.ownKeys()`         | `[length, name, prototype, fromCharCode, fromCodePoint, raw]` |
| `.toString()`        | `function toString() { [native code] }`                       |
| `.typeOf()`          | `function`                                                    |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
