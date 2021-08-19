# TypeTags.`isTypedArray`

### Overview

The `.isTypedArray` predicate allows us to check if an object **is** an [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) object or **has** an typed-array type tag.

### Usage

#### `TypeTags.isTypedArray(value)`

- Checks if `value` is an Iterator data type or is an iterator type tag.

```js
import { TypeTags } from 'typetags'

const float = new Float32Array(12)
const bigint = 12n

TypeTags.isTypedArray(float) // → true
TypeTags.isTypedArray(bigint) // → false

const tag = TypeTags.get(float)

TypeTags.isTypedArray(tag) // → true
```

### Signature

```ts
isTypedArray(obj: any): boolean
```
