# TypeTags `.isDate`

### Usage

#### `TypeTags.isDate(value)`

- Checks if `value` **is** or **has** a default `Date` type tag.

```js
const { TypeTags } = require('typetags')

let now = new Date()

TypeTags.isDate(now.toString())
// → false

TypeTags.isDate(now)
// → true
```

### Signature

```ts
isDate(value: any): boolean
```
