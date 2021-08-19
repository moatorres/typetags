# `isAsyncGeneratorFunction()`

### Usage

#### `TypeTags.isAsyncGeneratorFunction(value)`

- Checks if `value` **is** or **has** a default `AsyncGeneratorFunction` type tag.

```js
const { TypeTags } = require('typetags')

let asyncgeneratorfunction = new AsyncGeneratorFunction()
TypeTags.isAsyncGeneratorFunction(asyncgeneratorfunction.toString()) // → true

let tag = TypeTags.get(asyncgeneratorfunction)
TypeTags.isAsyncGeneratorFunction(tag) // → true
```

### Signature

```ts
isAsyncGeneratorFunction(value: any): boolean
```
