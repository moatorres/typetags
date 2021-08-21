# TypeTags `.isGlobal`

### Usage

#### `TypeTags.isGlobal(value)`

- Checks if `value` **is** or **has** a default `global` type tag.

```js
const { TypeTags } = require('typetags')

let tag = TypeTags.get(global)

TypeTags.isGlobal(tag)
// → true

TypeTags.isGlobal(global)
// → true
```

### Signature

```ts
isGlobal(value: any): boolean
```
