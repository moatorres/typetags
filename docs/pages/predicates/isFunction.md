# TypeTags `.isFunction`

### Usage

#### `TypeTags.isFunction(value)`

- Checks if `value` **is** or **has** a default `Function` type tag.

```js
const { TypeTags } = require('typetags')

function sayHi() {
  return 'Oh, hi!'
}

TypeTags.isFunction(sayHi)
// → true

TypeTags.isFunction(sayHi.toString())
// → false
```

### Signature

```ts
isFunction(value: any): boolean
```
