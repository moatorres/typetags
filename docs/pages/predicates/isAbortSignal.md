# TypeTags `.isAbortSignal`

### Usage

##### `TypeTags.isAbortSignal(value)`

- Checks if `value` **is** or **has** a default `AbortSignal` type tag.

```js
const { TypeTags } = require('typetags')

let abort = new AbortController()
TypeTags.isAbortSignal(abort.signal.toString()) // → true

let tag = TypeTags.get(abort.signal)
TypeTags.isAbortSignal(tag) // → true
```

### Signature

```ts
isAbortSignal(value: any): boolean
```
