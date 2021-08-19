# TypeTags `.isBigInt`

### Usage

#### `TypeTags .isBigInt(value)`

- Checks if `value` **is** or **has** a default `BigInt` type tag.

```js
const { TypeTags } = require('typetags')

let bigint = BigInt(45n)
TypeTags.isBigInt(bigint)
// → true

TypeTags.isBigInt(bigint.toString())
// → false

let tag = TypeTags.get(bigint)
TypeTags.isBigInt(tag)
// → true
```

### Signature

```ts
isBigInt(value: any): boolean
```
