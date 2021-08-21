# TypeTags `.isFloat32Array`

### Usage

#### `TypeTags.isFloat32Array(value)`

- Checks if `value` **is** or **has** a default `Float32Array` type tag.

```js
const { TypeTags } = require('typetags')

let float = new Float32Array()

TypeTags.isFloat32Array(float)
// → true

TypeTags.isFloat32Array(float.toString())
// → true
```

### Signature

```ts
isFloat32Array(value: any): boolean
```
