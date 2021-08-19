# TypeTags.`enhance`

### Overview

The `.enhance` method wraps a built-in type into a `TType` object which provides us methods for introspection.

### Usage

#### `TypeTags.enhance(name)`

- Returns an enhanced [`TType`](https://localhost:3000/ttype) object with extended methods.

```js
import { TypeTags } from 'typetags'

const ArrayType = TypeTags.enhance('Array')

ArrayType.isConstructor() // → true
ArrayType.instance(1, 2, 3) // → [1, 2, 3]
```

We could use it to check if a built-in is available on our runtime.

```js
import { TypeTags } from 'typetags'

let encoder = TypeTags.enhance('TextEncoder')

if (encoder.isAvailable()) {
  encoder.instance().encode('hey!')
}
```

For a list of all available methods, check out the [TType API reference]().

### Signature

```ts
enhance<T>(name: Types | NestedTypes): TTypeInterface<T>
```
