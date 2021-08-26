# [TypeTags](https://typetags.org)

### String Representations of Node.js Built-in Objects

This package contains a list of default string representations of [built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) and types of Node.js — [see the full list here](https://github.com/moatorres/typetags/blob/master/lib/constants.d.ts).

### Features

- Simple API
- Comprehensive [documentation](https://typetags.org) and test set
- No dependencies
- Includes TypeScript `d.ts` files

### Install

NPM

```sh
npm install typetags
```

Yarn

```sh
yarn add typetags
```

### Bundles

`esm`

```js
import { TypeTags } from 'typetags'
```

`cjs`

```js
const { TypeTags } = require('typetags')
```

`umd`

```html
<script src="dist/umd/typetags.min.js"></script>
```

### Usage

<sup>In the examples below `console.log` and `toString` calls are not shown.</sup>

The `TypeTags` object contains a set of **properties**, **methods** and **predicates**, each representing an object type.

The library exports a single object `TypeTags`.

```js
import { TypeTags } from 'typetags'

const o = { foo: 'bar' }

if (TypeTags.get(o) !== TypeTags.Object) {
  doSomething()
}
```

We can use it to check if an object's type tag matches the default tag of a data type.

```js
TypeTags.get({})
// → [object Object]
```

```js
TypeTags.has(new Map())
// → true
```

```js
TypeTags.of([1, '2', [3]])
// → [ '[object Number]', '[object String]', '[object Array]' ]
```

## Using `TypeTags` to detect Object Class

Every object has a `toString()` method that is automatically called when the object is to be represented as a text value or when an object is referred to in a manner in which a string is expected.

By default, the `toString()` method is inherited by every object descended from `Object`. If this method is not overridden in a custom object, `toString()` returns "`[object type]`", where `type` is the object type. The following code illustrates this:

```js
const o = new Object()
o.toString() // → [object Object]
```

Although using `toString()` in this way is unreliable, as **objects can change the behavior of `Object.prototype.toString()`** this library might be helpful when you need to compare objects' tags inside a procedure call or if you just need a quick reference.

```js
const { TypeTags } = require('typetags')

function isArray(value) {
  return typeof value === 'object' && TypeTags.get(value) === TypeTags.Array
}
```

## Tests

`jest --coverage`

```sh
Test Suites: 66 passed, 66 total
Tests:       2 skipped, 417 passed, 419 total
Snapshots:   0 total
Time:        5.342 s
Ran all test suites.
✨  Done in 6.72s.
```

## TypeScript

Using TypeScript? We've got you [covered](https://github.com/moatorres/typetags/blob/master/lib/resources/TypeTags.d.ts). Check out our `d.ts` declaration files.

<sub>⚡️ Powered by [**Moka Tecnologia**](https://github.com/mokatecnologia) — `< >` with ☕️ by [**Moa Torres**](https://github.com/moatorres)</sub>
