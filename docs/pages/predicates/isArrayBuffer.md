# `isArrayBuffer()`

### Usage

#### `TypeTags.isArrayBuffer(value)`

- Checks if `value` **is** or **has** a default `ArrayBuffer` type tag.

```js
const { TypeTags } = require('typetags')

let buf = new ArrayBuffer(8)
TypeTags.isArrayBuffer(buf.toString()) // → true

let tag = TypeTags.get(buf)
TypeTags.isArrayBuffer(tag) // → true
```

### Signature

```ts
isArrayBuffer(value: any): boolean
```
