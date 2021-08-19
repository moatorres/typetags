# TypeTags `.isAsyncGenerator`

### Usage

#### `TypeTags .isAsyncGenerator(value)`

- Checks if `value` **is** or **has** a default `AsyncGenerator` type tag.

```js
const { TypeTags } = require('typetags')

let asyncGen = (async function* () {})()

TypeTags.isAsyncGenerator(asyncGen)
// → true

let maybeTag = asyncGen.toString()

TypeTags.isAsyncGenerator(maybeTag)
// → true
```

### Signature

```ts
isAsyncGenerator(value: any): boolean
```
