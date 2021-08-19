# `isBoolean()`

### Usage

#### `TypeTags.isBoolean(value)`

- Checks if `value` **is** or **has** a default `Boolean` type tag.

```js
const { TypeTags } = require('typetags')

let bool = false
TypeTags.isBoolean(bool) // → true
TypeTags.isBoolean(bool.toString()) // → false

let tag = TypeTags.get(bool)
TypeTags.isBoolean(tag) // → true
```

### Signature

```ts
isBoolean(value: any): boolean
```
