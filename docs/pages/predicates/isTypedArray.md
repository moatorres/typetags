# TypeTags `.isTypedArray`

### Overview

The `.isTypedArray` predicate allows us to check if an object **is** a [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) object or **has** a typed-array type tag.

### Usage

##### `TypeTags.isTypedArray(value)`

- Checks if `value` **is** an iterator data type or **has** an iterator type tag.

```js
import { TypeTags } from 'typetags'

const float = new Float32Array(12)

TypeTags.isTypedArray(float)
// → true

const tag = TypeTags.get(float)
// → [object Float32Array]

TypeTags.isTypedArray(tag)
// → true

const bigint = 12n

TypeTags.isTypedArray(bigint)
// → false
```

### Signature

```ts
isTypedArray(obj: any): boolean
```
