# TypeTags `.isFinalizationRegistry`

### Usage

#### `TypeTags.isFinalizationRegistry(value)`

- Checks if `value` **is** or **has** a default `FinalizationRegistry` type tag.

```js
const { TypeTags } = require('typetags')

let end = new FinalizationRegistry()

TypeTags.isFinalizationRegistry(end)
// → true

TypeTags.isFinalizationRegistry(end.toString())
// → true
```

### Signature

```ts
isFinalizationRegistry(value: any): boolean
```
