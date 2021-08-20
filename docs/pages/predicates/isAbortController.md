# TypeTags `.isAbortController`

### Usage

##### `TypeTags.isAbortController(value)`

- Checks if `value` **is** or **has** a default `AbortController` type tag.

```js
const { TypeTags } = require('typetags')

let abort = new AbortController()

TypeTags.isAbortController(abort)
// → true

let tag = TypeTags.get(abort)

TypeTags.isAbortController(tag)
// → true
```

### Signature

```ts
isAbortController(value: any): boolean
```
