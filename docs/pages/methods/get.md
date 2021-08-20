# TypeTags `.get`

### Overview

The `.get` method allows us to lookup the type tag of an object by its type or retrieve its type tag. Behind the curtains, all it does is to call `Object.prototype.toString` over any value and return the result.

### Usage

##### `TypeTags.get(name | value)`

- Returns the type tag a named type. If it can't find by its `name`, it will return the `value`'s type tag.

```js
import { TypeTags } from 'typetags'

TypeTags.get('Array')
// → [object Array]

TypeTags.get('Tuple')
// → [object String]

TypeTags.get([])
// → [object Array]
```

We could use it to get the type tags of a list of type names.

```js
import { TypeTags } from 'typetags'

const list = ['Map', 'String', 'Boolean']
const tags = list.map((type) => TypeTags.get(type))

console.log(tags)
// → [ '[object Map]', '[object String]', '[object Boolean]' ]
```

### Signature

```ts
get(name: Types | NestedTypes): Tags
get(value: any): Tags
```
