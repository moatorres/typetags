# TypeTags `.isGenerator`

### Usage

#### `TypeTags.isGenerator(value)`

- Checks if `value` **is** or **has** a default `Generator` type tag.

```js
const { TypeTags } = require('typetags')

function* idMaker() {
  let idx = 0
  yield ++idx
}

const generator = idMaker()

TypeTags.isGenerator(generator)
// → true

TypeTags.isGenerator(idMaker.toString())
// → false
```

### Signature

```ts
isGenerator(value: any): boolean
```
