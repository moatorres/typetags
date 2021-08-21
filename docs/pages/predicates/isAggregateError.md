# TypeTags `.isAggregateError`

### Usage

##### `TypeTags.isAggregateError(value)`

- Checks if `value` **is** or **has** a default `AggregateError` type tag.

```js
const { TypeTags } = require('typetags')

let error = new AggregateError([])

TypeTags.isAggregateError(error)
// → true

TypeTags.get(error)
// → [object AggregateError]
```

### Signature

```ts
isAggregateError(value: any): boolean
```
