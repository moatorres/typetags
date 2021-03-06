# TypeTags `.Generator`

### Overview

The `Generator` object is returned by a [generator function](https://typetags.org/types/GeneratorFunction) and it conforms to both the [iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) and the [iterator protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Generator)
// → [object Generator]
```

### Predicate

#### `.isGenerator(value)`

- Checks if `value` **is** or **has** a default `Generator` type tag.

```js
const { TypeTags } = require('typetags')

function* idMaker() {
  let idx = 0
  yield ++idx
}

const generator = idMaker()

TypeTags.isGenerator(generator)
// → true

TypeTags.isGenerator(idMaker.toString())
// → false
```

### Metadata (TType)

| Metadata             | Value                                   |
| -------------------- | --------------------------------------- |
| `.type`              | `Generator`                             |
| `.tag`               | `[object Generator]`                    |
| `.builtin()`         | `undefined`                             |
| `.getTag()`          | `[object Generator]`                    |
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
| `.isStringifiable()` | `true`                                  |
| `.isSyntatic()`      | `true`                                  |
| `.isTypedArray()`    | `false`                                 |
| `.ownKeys()`         | `[]`                                    |
| `.toString()`        | `function toString() { [native code] }` |
| `.typeOf()`          | `object`                                |

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}

declare interface Predicate {
  predicate(value: any): boolean
}
```

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
