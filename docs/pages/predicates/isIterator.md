# TypeTags `.isIterator`

### Overview

The `.isIterator` predicate allows us to check if an object **is** an iterator type or **has** a native well-know `Symbol.iterator` type tag value.

### Usage

##### `TypeTags.isIterator(value)`

- Checks if `value` is an Iterator data type or is an iterator type tag.

```js
import { TypeTags } from 'typetags'

const int8 = new Int8Array(8)

TypeTags.isIterator(int8.values())
// → true

const array = [1, 2, 3]

TypeTags.isIterator(array)
// → false
```

### Signature

```ts
isIterator(obj: any): boolean
```
