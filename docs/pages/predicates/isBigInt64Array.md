# TypeTags `.isBigInt64Array`

### Usage

#### `TypeTags .isBigInt64Array(value)`

- Checks if `value` **is** or **has** a default `BigInt64Array` type tag.

```js
const { TypeTags } = require('typetags')

let bigint64 = new BigInt64Array(24)

TypeTags.isBigInt64Array(bigint64.toString())
// → false

TypeTags.isBigInt64Array(bigint64)
// → true
```

### Signature

```ts
isBigInt64Array(value: any): boolean
```
