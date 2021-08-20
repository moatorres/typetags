# TypeTags `.isAsyncFunction`

### Usage

##### `TypeTags.isAsyncFunction(value)`

- Checks if `value` **is** or **has** a default `AsyncFunction` type tag.

```js
const { TypeTags } = require('typetags')

let fn = async () => 'oh, hi!'
let maybeTag = fn.toString()

TypeTags.isAsyncFunction(maybeTag)
// → false

let tag = TypeTags.get(fn)

TypeTags.isAsyncFunction(tag)
// → true
```

### Signature

```ts
isAsyncFunction(value: any): boolean
```
