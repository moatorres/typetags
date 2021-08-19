# `isAtomics()`

### Usage

#### `TypeTags.isAtomics(value)`

- Checks if `value` **is** or **has** a default `Atomics` type tag.

```js
const { TypeTags } = require('typetags')

const buffer = new SharedArrayBuffer(16)
const uint8 = new Uint8Array(buffer)

let atom = Atomics.add(uint8, 0, 2) // → 0

TypeTags.isAtomics(atom.toString()) // → false
TypeTags.isAtomics(Atomics.toString()) // → true
```

### Signature

```ts
isAtomics(value: any): boolean
```
