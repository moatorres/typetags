# Node.js Object [TypeTags](https://github.com/moatorres/typetags)

String representations of objects in Node.js

This package is a list of default string representations of objects in Node.js as returned from calling `toString()` — [see the full list here](https://github.com/moatorres/typetags/blob/master/lib/type-tags.js).

## Installation

NPM

```sh
npm install typetags
```

Yarn

```sh
yarn add typetags
```

Check the reference [here](https://github.com/moatorres/typetags/blob/master/type-tags.d.ts)

## Usage ⚡️

#### Using `typetags` to detect object class

Every object has a `toString()` method that is automatically called when the object is to be represented as a text value or when an object is referred to in a manner in which a string is expected.

By default, the `toString()` method is inherited by every object descended from `Object`. If this method is not overridden in a custom object, `toString()` returns "`[object type]`", where `type` is the object type. The following code illustrates this:

```js
const o = new Object()
o.toString() // → [object Object]
```

<sup>See [Mozilla MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString#description)</sup>

Although using `toString()` in this way is unreliable, as **objects can change the behavior of `Object.prototype.toString()`** this library might be helpful when you need to compare objects' tags inside a procedure call or if you just need a quick reference.

```js
import { TypeTags } from 'typetags'

const o = { foo: 'bar' }

if (o.toString() === TypeTags.Object) {
  doSomething()
}
```

#### Bundles

`esm`

```js
import { isDefaultTag } from 'typetags'
```

`cjs`

```js
const { isDefaultTag } = require('typetags')
```

`umd`

```html
<script src="dist/umd/typetags.min.js"></script>
```

## Reference

#### `TypeTags`

- Object containing all available tags

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.Array) // → [object Array]
console.log(TypeTags.Function) // → [object Function]
console.log(TypeTags.Float64Array) // → [object Float64Array]
```

**It has convenience methods (predicates) to assert objects' type tags:**

#### `isDefaultTag()` ⚡️

- Checks if a string is a native default tag

```js
import { isDefaultTag } from 'typetags'

console.log(isDefaultTag('[object Hey]')) // → false
console.log(isDefaultTag('[object Function]')) // → true
```

#### `hasDefaultTag()` ⚡️

- Checks if the received datatype has a native default tag

```js
import { hasDefaultTag } from 'typetags'

function User(name) {
  this.name = name
}

User.prototype.toString = function () {
  return `${this.name}`
}

const jack = new User('Jack')

console.log(hasDefaultTag(jack)) // → false
console.log(hasDefaultTag([1, 2, 3])) // → true
```

## Tests

```sh
---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------|---------|----------|---------|---------|-------------------
All files      |     100 |      100 |     100 |     100 |
 get-tag.js    |     100 |      100 |     100 |     100 |
 predicates.js |     100 |      100 |     100 |     100 |
 type-tags.js  |     100 |      100 |     100 |     100 |
---------------|---------|----------|---------|---------|-------------------

Test Suites: 3 passed, 3 total
Tests:       73 passed, 73 total
Snapshots:   0 total
Time:        0.766 s, estimated 1 s
Ran all test suites.
✨  Done in 1.98s.
```

## TypeScript

Using TypeScript? We've got you [covered](https://github.com/moatorres/typetags/blob/master/lib/type-tags.d.ts). The package comes with `d.ts` declaration files.

<sub>⚡️ Powered by [**Moka Tecnologia**](https://github.com/mokatecnologia) — `< >` with lots of ☕️ by [**Moa Torres**](https://github.com/moatorres)</sub>
