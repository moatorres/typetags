# [`typetags`](https://typetags.org)

### String Representations of Node.js Built-in Objects

This package contains a list of default string representations of [built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) and types of Node.js — [see the full list here](https://github.com/moatorres/typetags/blob/master/lib/constants.d.ts).

## Usage

```js
import { TypeTags } from 'typetags'

TypeTags.Array
// → [object Array]

TypeTags.Function
// → [object Function]

TypeTags.Float64Array
// → [object Float64Array]
```

## API Reference [→ typetags.org](https://typetags.org)

The `TypeTags` object contains a set of **properties**, **methods** and **predicates**, each representing an object type.

We can use it to check if an object's type tag matches the default tag of a data type.

```js
import { TypeTags } from 'typetags'

const o = { foo: 'bar' }

if (o.toString() !== TypeTags.String) {
  doSomething()
}
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

## Install

NPM

```sh
npm install typetags
```

Yarn

```sh
yarn add typetags
```

## Bundles

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

## Tests

`jest --coverage`

```sh
------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------|---------|----------|---------|---------|-------------------
All files         |   96.02 |       65 |    83.7 |     100 |
 lib              |   98.21 |    53.85 |   57.69 |     100 |
  assign-tag.js   |     100 |      100 |     100 |     100 |
  constants.js    |     100 |      100 |     100 |     100 |
  get-tag.js      |     100 |      100 |     100 |     100 |
  initializers.js |     100 |       50 |       0 |     100 | 3-142
  utils.js        |    97.3 |      100 |   91.67 |     100 |
 lib/resources    |   95.17 |    85.71 |   93.94 |     100 |
  TType.js        |   90.79 |    81.82 |     100 |     100 | 73,98-105,129-146
  TTypeUtils.js   |     100 |    66.67 |      60 |     100 | 52,59,78-80
  TextUtils.js    |     100 |      100 |     100 |     100 |
  TypeTags.js     |     100 |      100 |     100 |     100 |
------------------|---------|----------|---------|---------|-------------------

Test Suites: 66 passed, 66 total
Tests:       2 skipped, 417 passed, 419 total
Snapshots:   0 total
Time:        5.342 s
Ran all test suites.
✨  Done in 6.72s.
```

## TypeScript

Using TypeScript? We've got you [covered](https://github.com/moatorres/typetags/blob/master/lib/resources/TypeTags.d.ts). Check out our `d.ts` declaration files.

---

<sub>
  ⚡️ Powered by [**Moka Tecnologia**](https://github.com/mokatecnologia) — `< >` with lots of ☕️ by [**Moa Torres**](https://github.com/moatorres)
</sub>
