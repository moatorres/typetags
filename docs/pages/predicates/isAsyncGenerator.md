# `isAsyncGenerator()`

### Usage

#### `TypeTags.isAsyncGenerator(value)`

- Checks if `value` **is** or **has** a default `AsyncGenerator` type tag.

```js
const { TypeTags } = require('typetags')

let asyncgenerator = new AsyncGenerator()
TypeTags.isAsyncGenerator(asyncgenerator.toString()) // → true

let tag = TypeTags.get(asyncgenerator)
TypeTags.isAsyncGenerator(tag) // → true
```

### Signature

```ts
isAsyncGenerator(value: any): boolean
```
