# TypeTags.`Console`

### Overview

The `Console`...

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Console) // → [object console]
```

### Metadata (TType)

| Metadata             | Value                                                                                                                                                                                                                                                                                         |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.type`              | `Console`                                                                                                                                                                                                                                                                                     |
| `.tag`               | `[object console]`                                                                                                                                                                                                                                                                            |
| `.builtin()`         | `undefined`                                                                                                                                                                                                                                                                                   |
| `.getTag()`          | `[object console]`                                                                                                                                                                                                                                                                            |
| `.hasSpecialArgs()`  | `false`                                                                                                                                                                                                                                                                                       |
| `.instance()`        | `undefined`                                                                                                                                                                                                                                                                                   |
| `.instanceTypeOf()`  | `object`                                                                                                                                                                                                                                                                                      |
| `.info()`            | [see more]()                                                                                                                                                                                                                                                                                  |
| `.isAvailable()`     | `true`                                                                                                                                                                                                                                                                                        |
| `.isConstructor()`   | `false`                                                                                                                                                                                                                                                                                       |
| `.isFactory()`       | `false`                                                                                                                                                                                                                                                                                       |
| `.isFunction()`      | `false`                                                                                                                                                                                                                                                                                       |
| `.isGlobal()`        | `false`                                                                                                                                                                                                                                                                                       |
| `.isIterator()`      | `false`                                                                                                                                                                                                                                                                                       |
| `.isNested()`        | `false`                                                                                                                                                                                                                                                                                       |
| `.isObject()`        | `true`                                                                                                                                                                                                                                                                                        |
| `.isPrimitive()`     | `false`                                                                                                                                                                                                                                                                                       |
| `.isStringifiable()` | `true`                                                                                                                                                                                                                                                                                        |
| `.isSyntatic()`      | `false`                                                                                                                                                                                                                                                                                       |
| `.isTypedArray()`    | `false`                                                                                                                                                                                                                                                                                       |
| `.ownKeys()`         | `[log, warn, dir, time, timeEnd, timeLog, trace, assert, clear, count, countReset, group, groupEnd, table, debug, info, dirxml, error, groupCollapsed, _stdout, _stderr, _stdoutErrorHandler, _stderrErrorHandler, _ignoreErrors, _times, _buffer, _counters, _timers, _groupDepth, Console]` |
| `.toString()`        | `function toString() { [native code] }`                                                                                                                                                                                                                                                       |
| `.typeOf()`          | `object`                                                                                                                                                                                                                                                                                      |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
