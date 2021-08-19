# `isBigInt()`

### Usage

#### `TypeTags.isBigInt(value)`

- Checks if `value` **is** or **has** a default `BigInt` type tag.

```js
const { TypeTags } = require('typetags')

let bigint = BigInt(45n)
TypeTags.isBigInt(bigint) // → true
TypeTags.isBigInt(bigint.toString()) // → false

let typetag = TypeTags.get(bigint)
TypeTags.isBigInt(typetag) // → true
```

### Signature

```ts
isBigInt(value: any): boolean
```
