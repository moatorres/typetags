# TypeTags.`enhance`

### Overview

The `.enhance` method wraps a built-in type into a `TType` object and provides us methods for introspection.

### Usage

#### `TypeTags.enhance(name)`

- Returns an enhanced [`TType`](https://localhost:3000/ttype) object introspective methods.

```js
import { TypeTags } from 'typetags'

const ArrayType = TypeTags.enhance('Array')

ArrayType.isAvailable() // → true
ArrayType.isConstructor() // → true
ArrayType.instance(1, 2, 3) // → [1, 2, 3]
```

### Signature

```ts
enhance<T>(name: Types | NestedTypes): TTypeInterface<T>
```
