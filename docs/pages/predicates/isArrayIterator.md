# `isArrayIterator()`

### Usage

#### `TypeTags.isArrayIterator(value)`

- Checks if `value` **is** or **has** a default `Array Iterator` type tag.

```js
const { TypeTags } = require('typetags')

let iterator = [][Symbol.iterator]()
TypeTags.isArrayIterator(iterator) // → true

let tag = TypeTags.get(iterator)
TypeTags.isArrayIterator(tag) // → true
```

### Signature

```ts
isArrayIterator(value: any): boolean
```
