# TypeTags `.isFloat64Array`

### Usage

#### `TypeTags.isFloat64Array(value)`

- Checks if `value` **is** or **has** a default `Float64Array` type tag.

```js
const { TypeTags } = require('typetags')

let float = new Float64Array()

TypeTags.isFloat64Array(float)
// → true

TypeTags.isFloat64Array(float.toString())
// → true
```

### Signature

```ts
isFloat64Array(value: any): boolean
```
