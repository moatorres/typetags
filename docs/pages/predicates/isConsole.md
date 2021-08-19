# TypeTags `.isConsole`

### Usage

#### `TypeTags .isConsole(value)`

- Checks if `value` **is** or **has** a default `Console` type tag.

```js
const { TypeTags } = require('typetags')

let consoleTag = TypeTags.get(console)

TypeTags.isConsoleTag(console.toString())
// → true

TypeTags.isConsoleTag(consoleTag)
// → true
```

### Signature

```ts
isConsole(value: any): boolean
```
