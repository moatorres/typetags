# TypeTags `.isAsyncGeneratorFunction()`

### Usage

#### `TypeTags .isAsyncGeneratorFunction(value)`

- Checks if `value` **is** or **has** a default `AsyncGeneratorFunction` type tag.

```js
const { TypeTags } = require('typetags')

let asyncGenFn = async function* () {}

TypeTags.isAsyncGeneratorFunction(asyncGenFn)
// → true
```

### Signature

```ts
isAsyncGeneratorFunction(value: any): boolean
```
