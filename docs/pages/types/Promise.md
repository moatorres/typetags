# TypeTags `.Promise`

### Overview

The `Promise` object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

### Usage

```js
import { TypeTags } from 'typetags'

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo')
  }, 300)
})

console.log(TypeTags.Promise)
// → [object Promise]

console.log(TypeTags.get(myPromise))
// → [object Promise]
```

### Metadata (TType)

| Metadata             | Value                                                                    |
| -------------------- | ------------------------------------------------------------------------ |
| `.type`              | `Promise`                                                                |
| `.tag`               | `[object Promise]`                                                       |
| `.builtin()`         | `undefined`                                                              |
| `.getTag()`          | `[object Promise]`                                                       |
| `.hasSpecialArgs()`  | `true`                                                                   |
| `.instance()`        | `undefined`                                                              |
| `.instanceTypeOf()`  | `object`                                                                 |
| `.info()`            | [see more]()                                                             |
| `.isAvailable()`     | `true`                                                                   |
| `.isConstructor()`   | `true`                                                                   |
| `.isFactory()`       | `false`                                                                  |
| `.isFunction()`      | `true`                                                                   |
| `.isGlobal()`        | `true`                                                                   |
| `.isIterator()`      | `false`                                                                  |
| `.isNested()`        | `false`                                                                  |
| `.isObject()`        | `false`                                                                  |
| `.isPrimitive()`     | `false`                                                                  |
| `.isStringifiable()` | `true`                                                                   |
| `.isSyntatic()`      | `false`                                                                  |
| `.isTypedArray()`    | `false`                                                                  |
| `.ownKeys()`         | `[length, name, prototype, all, allSettled, any, race, resolve, reject]` |
| `.toString()`        | `function toString() { [native code] }`                                  |
| `.typeOf()`          | `function`                                                               |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
