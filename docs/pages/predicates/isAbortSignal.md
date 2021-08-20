# TypeTags `.isAbortSignal`

### Usage

##### `TypeTags.isAbortSignal(value)`

- Checks if `value` **is** or **has** a default `AbortSignal` type tag.

```js
const { TypeTags } = require('typetags')

let abort = new AbortController()

TypeTags.isAbortSignal(abort.signal)
// → true

let tag = TypeTags.get(abort.signal)

console.log(tag)
// → [object AbortSignal]
```

### Signature

```ts
isAbortSignal(value: any): boolean
```
