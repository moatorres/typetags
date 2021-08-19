# TypeTags `isBigUint64Array`

### Usage

#### `TypeTags .isBigUint64Array(value)`

- Checks if `value` **is** or **has** a default `BigUint64Array` type tag.

```js
const { TypeTags } = require('typetags')

let biguint = new BigUint64Array(24)
TypeTags.isBigUint64Array(biguint.toString())
// → false

let tag = TypeTags.get(biguint)

TypeTags.isBigUint64Array(tag)
// → true
```

### Signature

```ts
isBigUint64Array(value: any): boolean
```
