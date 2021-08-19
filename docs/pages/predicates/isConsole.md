# `isConsole()`

### Usage

#### `TypeTags.isConsole(value)`

- Checks if `value` **is** or **has** a default `Console` type tag.

```js
const { TypeTags } = require('typetags')

let consoleTypetag = TypeTags.get(console)

TypeTags.isConsoleTag(console.toString()) // → true
TypeTags.isConsoleTag(consoleTypetag) // → true
```

### Signature

```ts
isConsole(value: any): boolean
```
