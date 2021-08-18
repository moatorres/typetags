# `isAbortController()`

### Signature

```ts
isAbortController(value: any): boolean
```

### Usage

- Checks if _value_ is or has a default `AbortController` type tag

```js
const { TypeTags } = require('typetags')

let abort = new AbortController()
isAbortController(abort.toString()) // → true

let tag = TypeTags.get(abort)
isAbortController(tag) // → true
```
