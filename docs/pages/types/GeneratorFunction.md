# TypeTags `.GeneratorFunction`

### Overview

The `GeneratorFunction` constructor creates a new generator function object. In JavaScript, every generator function is actually a `GeneratorFunction` object.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.GeneratorFunction)
// → [object GeneratorFunction]
```

### Predicate

#### `.isGeneratorFunction(value)`

- Checks if `value` **is** or **has** a default `GeneratorFunction` type tag.

```js
const { TypeTags } = require('typetags')

function* generator(i) {
  yield i
  yield i + 10
}

const gen = generator(10)

TypeTags.isGeneratorFunction(gen)
// → false

TypeTags.isGeneratorFunction(generator)
// → true
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `GeneratorFunction`                     |
| `.tag`               | `[object GeneratorFunction]`            |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object GeneratorFunction]`            |
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
| `.ownKeys()`         | `[length, name, prototype]`             |
| `.toString()`        | `function toString() { [native code] }` |
| `.typeOf()`          | `function`                              |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction)
