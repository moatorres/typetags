# TypeTags `.isAsyncGenFn`

### Usage

##### `TypeTags.isAsyncGenFn(value)`

- Checks if `value` **is** or **has** a default `AsyncGeneratorFunction` type tag.

```js
const { TypeTags } = require('typetags')

let myFunction = async function* () {
  yield [1, 2, 3]
}

TypeTags.isAsyncGenFn(myFunction)
// → true
```

### Signature

```ts
isAsyncGenFn(value: any): boolean
```
