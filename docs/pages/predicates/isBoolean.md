# TypeTags `.isBoolean`

### Usage

##### `TypeTags.isBoolean(value)`

- Checks if `value` **is** or **has** a default `Boolean` type tag.

```js
const { TypeTags } = require('typetags')

let bool = false

TypeTags.isBoolean(bool)
// → true

TypeTags.isBoolean(true)
// → true

TypeTags.Boolean === TypeTags.get(bool)
// → true
```

### Signature

```ts
isBoolean(value: any): boolean
```
