# TypeTags `.has`

### Overview

The `.has` method allows us to check if an object has a valid `toString` method **and/or** if its value is equal to the received `tag` value. If `tag` is not defined, it will check only for the existence of the `toString` method.

### Usage

##### `TypeTags.has(value, tag?)`

- Checks if `value` has a `toString` method. Accepts an optional `tag` argument of type string.

```js
import { TypeTags } from 'typetags'

const user = {
  id: 1,
  name: 'Foo',
}

TypeTags.has(user)
// → true

TypeTags.has(user, 'Array')
// → false

TypeTags.has(user, 'Object')
// → true
```

### Signature

```ts
has(object: any, tag?: string): boolean
```
