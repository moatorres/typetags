# TypeTags.`of`

### Overview

The `.of` method allows you to map through the values of any Array object and return the type tag of each array entry.

### Usage

#### `TypeTags.of(value | [values])`

- Returns the type tag of a single value or an array of type tags.

```js
import { TypeTags } from 'typetags'

const myArray = [1, 'Hey', new Map()]

const tags = TypeTags.of(myArray)

console.log(tags) // → [ '[object Number]', '[object String]', '[object Map]' ]
```

If it receives a single value or an empty array, it will return the type tag of the value itself.

```js
import { TypeTags } from 'typetags'

const emptyArray = []

TypeTags.of(emptyArray) // → [object Array]
TypeTags.of('') // → [object String]
```

Values must be wrapped on an array, otherwise it will return the type tag of the its first argument.

```js
TypeTags.of(12, '', []) // → [object Number]
```

You can also use the `.of` method in [point-free]() style.

```js
import { TypeTags } from 'typetags'

const myArray = [{ id: 1, name: 'Foo' }, [1, 2, 3]]

myArray.map(TypeTags.of) // → [ '[object Object]', '[object Array]' ]

const hasObject = (a) => a.map(TypeTags.of).some(TypeTags.isObject)

hasObject(myArray) // → true
```

### Signature

```ts
of<T>(value: Types | NestedTypes | Array<T>): Array<Tags> | Tags
```
