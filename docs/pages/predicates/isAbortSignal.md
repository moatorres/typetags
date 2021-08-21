# TypeTags `.isAbortSignal`

### Usage

##### `TypeTags.isAbortSignal(value)`

- Checks if `value` **is** or **has** a default `AbortSignal` type tag.

```js
const { TypeTags } = require('typetags')

let abort = new AbortController()

TypeTags.isAbortSignal(abort.signal)
// → true

TypeTags.get(abort.signal)
// → [object AbortSignal]
```

### Signature

```ts
isAbortSignal(value: any): boolean
```
