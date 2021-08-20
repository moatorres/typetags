# TypeTags `.isArguments`

### Usage

##### `TypeTags.isArguments(value)`

- Checks if `value` **is** or **has** a default `arguments` type tag.

```js
const { TypeTags } = require('typetags')

let tag
;(function any() {
  tag = TypeTags.get(arguments)
  return
})()

console.log(isArguments(tag)) // → true
console.log(isArguments(arguments)) // → true
```

### Signature

```ts
isArguments(value: any): boolean
```
