# TypeTags `.isArray`

### Usage

#### `TypeTags .isArray(value)`

- Checks if `value` **is** or **has** a default `Array` type tag.

```js
const { TypeTags } = require('typetags')

let tag = TypeTags.get([])

TypeTags.isArray(tag)
// → true

TypeTags.isArray([1, 2, 3])
// → true

TypeTags.isArray([1, 2, 3].toString())
// → false
```

### Signature

```ts
isArray(value: any): boolean
```
