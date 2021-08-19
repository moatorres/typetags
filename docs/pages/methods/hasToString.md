# TypeTags `.hasToString`

### Overview

The `.hasToString` method allow us to check if an object or data type has a `toString` method attached to it.

### Usage

##### `TypeTags.hasToString(value)`

- Checks if `value` has a `toString` method.

```js
import { TypeTags } from 'typetags'

const user = {
  id: 1,
  name: 'Foo',
}

TypeTags.hasToString(user)
// → true
```

### Signature

```ts
hasToStringMethod(obj: any): boolean
```
