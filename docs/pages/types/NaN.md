# TypeTags `.NaN`

### Overview

The global `NaN` property is a value representing Not-A-Number.

### Usage

```js
import { TypeTags } from 'typetags'

function sanitise(x) {
  if (isNaN(x)) {
    return NaN
  }
  return x
}

const res = sanitise('hey')

console.log(TypeTags.NaN === TypeTags.get(res))
// → true
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `NaN`                                   |
| `.tag`               | `[object Number]`                       |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object Number]`                       |
| `.hasSpecialArgs()`  | `false`                                 |
| `.instance()`        | `undefined`                             |
| `.instanceTypeOf()`  | `number`                                |
| `.info()`            | [see more]()                            |
| `.isAvailable()`     | `true`                                  |
| `.isConstructor()`   | `false`                                 |
| `.isFactory()`       | `false`                                 |
| `.isFunction()`      | `false`                                 |
| `.isGlobal()`        | `true`                                  |
| `.isIterator()`      | `false`                                 |
| `.isNested()`        | `false`                                 |
| `.isObject()`        | `false`                                 |
| `.isPrimitive()`     | `false`                                 |
| `.isStringifiable()` | `true`                                  |
| `.isSyntatic()`      | `false`                                 |
| `.isTypedArray()`    | `false`                                 |
| `.ownKeys()`         | `[]`                                    |
| `.toString()`        | `function toString() { [native code] }` |
| `.typeOf()`          | `number`                                |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
