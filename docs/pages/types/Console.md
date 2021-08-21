# TypeTags `.Console`

### Overview

The `console` object provides access to the browser's debugging console (e.g. the Web console in Firefox). The specifics of how it works varies from browser to browser, but there is a _de facto_ set of features that are typically provided.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Console)
// → [object console]
```

### Predicate

#### `.isConsole(value)`

- Checks if `value` **is** or **has** a default `Console` type tag.

```js
const { TypeTags } = require('typetags')

let consoleTag = TypeTags.get(console)

TypeTags.isConsoleTag(console.toString())
// → true

TypeTags.isConsoleTag(consoleTag)
// → true
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

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/console)
