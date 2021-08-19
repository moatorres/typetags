# `isDataView()`

### Usage

#### `TypeTags.isDataView(value)`

- Checks if `value` **is** or **has** a default `DataView` type tag.

```js
const { TypeTags } = require('typetags')

let buff = new SharedArrayBuffer(1024)
let view = new DataView(buff)

TypeTags.isDataView(view.toString()) // → true
TypeTags.isDataView('[object DataView]') // → true
```

### Signature

```ts
isDataView(value: any): boolean
```
