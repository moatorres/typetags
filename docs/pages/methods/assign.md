# TypeTags `.assign`

### Overview

The `.assign` method allows us assign the well-known [`Symbol.toStringTag`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property to an object. If it receives an object withtout a `toString` method defined, it will assign `Object.prototype.toString` to it prior to the received `tag` string-value.

### Usage

##### `TypeTags.assign(object, tag)`

- Assign or alter the `Symbol.toStringTag` property of an object.

```js
import { TypeTags } from 'typetags'

const proto = {}
const tag = 'CustomTag'

TypeTags.assign(proto, tag)

TypeTags.get(proto)
// → [object CustomTag]

proto[Symbol.toStringTag]
// → 'CustomTag'
```

If `object` doesn't have a `toString` method defined, `assign` will add `Object.prototype.toString` to the object prior to its `tag` value.

We can use the [`has`](https://typetags.org/methods/has) method to check if `toString` has already been defined.

```js
import { TypeTags } from 'typetags'

const user = Object.create(null) // null prototype

TypeTags.get(user)
// → undefined

if (!TypeTags.has(user)) {
  TypeTags.assign(user, 'User')
}

TypeTags.get(user)
// → '[object User]'

user[Symbol.toStringTag]
// → 'User'
```

### Signature

```ts
assign<T>(object: T, tag: string): T
```
