# TypeTags.`get`

### Overview

The `.get` method allows us to lookup the type tag of a built-in type, object or value-property by its name.

### Usage

#### `TypeTags.get(name | value)`

- Returns the type tag of the named type. If it can't find by the received `name`, it will return the `values`'s type tag.

```js
import { TypeTags } from 'typetags'

TypeTags.get('Array') // → [object Array]

TypeTags.get('Tuple') // → [object String]

TypeTags.get([]) // → [object Array]
```

We can also use it to get the type tags of a lista of type names.

```js
import { TypeTags } from 'typetags'

const types = ['Map', 'String', 'Boolean']
const tags = types.map((t) => TypeTags.get(t))

console.log(tags) // → [ '[object Map]', '[object String]', '[object Boolean]' ]
```

### Signature

```ts
get(name: Types | NestedTypes): Tags | undefined
get(value: any): Tags
```
