# TypeTags.`AsyncFunction`

### Overview

An `AsyncFunction` is a function declared with the `async` keyword, and the `await` keyword is permitted within them. The `async` and `await` keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains. Async functions may also be defined as expressions.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.AsyncFunction) // → [object AsyncFunction]
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `AsyncFunction`                         |
| `.tag`               | `[object AsyncFunction]`                |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object AsyncFunction]`                |
| `.hasSpecialArgs()`  | `true`                                  |
| `.instance()`        | `undefined`                             |
| `.instanceTypeOf()`  | `object`                                |
| `.info()`            | [see more]()                            |
| `.isAvailable()`     | `true`                                  |
| `.isConstructor()`   | `false`                                 |
| `.isFactory()`       | `true`                                  |
| `.isFunction()`      | `true`                                  |
| `.isGlobal()`        | `false`                                 |
| `.isIterator()`      | `false`                                 |
| `.isNested()`        | `false`                                 |
| `.isObject()`        | `false`                                 |
| `.isPrimitive()`     | `false`                                 |
| `.isStringifiable()` | `true`                                  |
| `.isSyntatic()`      | `true`                                  |
| `.isTypedArray()`    | `false`                                 |
| `.ownKeys()`         | `[length,name]`                         |
| `.toString()`        | `function toString() { [native code] }` |
| `.typeOf()`          | `function`                              |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
