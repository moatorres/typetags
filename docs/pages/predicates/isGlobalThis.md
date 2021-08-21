# TypeTags `.isGlobalThis`

### Usage

#### `TypeTags.isGlobalThis(value)`

- Checks if `value` **is** or **has** a default `globalThis` type tag.

```js
const { TypeTags } = require('typetags')

let tag = TypeTags.get(globalThis)

TypeTags.isGlobalThis(tag)
// → true

TypeTags.isGlobalThis(globalThis)
// → true
```

### Signature

```ts
isGlobalThis(value: any): boolean
```
