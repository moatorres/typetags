# `isAsyncFunction()`

### Usage

#### `TypeTags.isAsyncFunction(value)`

- Checks if `value` **is** or **has** a default `AsyncFunction` type tag.

```js
const { TypeTags } = require('typetags')

let fn = async () => 'oh, hi!'
console.log(isAsyncFunction(fn.toString())) // → false

let typetag = TypeTags.get(fn)
console.log(isAsyncFunction(typetag)) // → true
```

### Signature

```ts
isAsyncFunction(value: any): boolean
```
