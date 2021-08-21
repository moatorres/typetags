# TypeTags `.isGeneratorFunction`

### Usage

#### `TypeTags.isGeneratorFunction(value)`

- Checks if `value` **is** or **has** a default `GeneratorFunction` type tag.

```js
const { TypeTags } = require('typetags')

function* generator(i) {
  yield i
  yield i + 10
}

const gen = generator(10)

TypeTags.isGeneratorFunction(gen)
// → false

TypeTags.isGeneratorFunction(generator)
// → true
```

### Signature

```ts
isGeneratorFunction(value: any): boolean
```
