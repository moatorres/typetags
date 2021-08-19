# Node.js Object [TypeTags](https://github.com/moatorres/typetags)

##### A [list](https://github.com/moatorres/typetags/blob/master/lib/.internal/constants.js) of type tags and string representations of [built-in types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for Node.js.

## [`TypeTags`](https://github.com/moatorres/typetags/wiki/typetags)

The `TypeTags` object contains a list of properties, each representing an object type. You can use it to check if an object's typetag matches the default tag of its data type.

```js
import { TypeTags } from 'typetags'

const o = { foo: 'bar' }

if (o.toString() !== TypeTags.Object) {
  doSomething()
}
```

Check the reference [here](https://github.com/moatorres/typetags#reference)

#### Installation

NPM

```sh
npm install typetags
```

Yarn

```sh
yarn add typetags
```

## Usage

#### `.get(name | value)`

- Returns the tag of any type based on its name, if it can't find the name it will return the _value_'s type tag.

```js
TypeTags.get('Array') // → [object Array]
TypeTags.get([]) // → [object Array]
```

#### `.of(value | [values])`

- Returns the type tag of a single value or an array of type tags.

```js
TypeTags.of([]) // → [object Array]

TypeTags.of([1, 'Hey', []])
// → [ '[object Number]', '[object String]', '[object Array]' ]
```

#### `.enhance(typename)`

- Returns an enhanced [`TType`]() object introspective methods.

```js
const ArrayType = TypeTags.enhance('Array')

ArrayType.isAvailable() // → true
ArrayType.isConstructor() // → true
```

#### `.assign(object, tag)`

- Assigns a `toStringTag` to an object.
  If the object doesn't have a `toString` method, the method will be defined along with the `tag` string value.

```js
let emptyObject = Object.create(null)

TypeTags.assign('Hey')

Object.prototype.toString.call(emptyObject) // → [object Hey]
```

### [`Predicates`](https://github.com/moatorres/typetags/wiki/predicates)

Check [this page](https://github.com/moatorres/typetags/wiki/predicates) for a reference list of all available predicates

### Bundles

`esm`

```js
import { isDefaultTag } from 'typetags'
```

`cjs`

```js
const { isDefaultTag } = require('typetags')
```

## Using `typetags` to detect object class

Every object has a `toString()` method that is automatically called when the object is to be represented as a text value or when an object is referred to in a manner in which a string is expected.

By default, the `toString()` method is inherited by every object descended from `Object`. If this method is not overridden in a custom object, `toString()` returns "`[object type]`", where `type` is the object type. The following code illustrates this:

```js
const o = new Object()
o.toString() // → [object Object]
```

<sup>See [Mozilla MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString#description)</sup>

Although using `toString()` in this way is unreliable, as **objects can change the behavior of `Object.prototype.toString()`** this library might be helpful when you need to compare objects' tags inside a procedure call or if you just need a quick reference.

```js
const { TypeTags, getTag } = require('typetags')

function isArray(value) {
  return typeof value === 'object' && getTag(value) === TypeTags.Array
}
```

See [`typetags` wiki](https://github.com/moatorres/typetags/wiki/helpers) for more info

## Tests

`jest --coverage`

```sh
Test Suites: 65 passed, 65 total
Tests:       353 passed, 353 total
Snapshots:   0 total
Time:        5.579 s
Ran all test suites.
✨  Done in 6.71s.
```

## TypeScript

Using TypeScript? We've got you [covered](https://github.com/moatorres/typetags/blob/master/lib/type-tags.d.ts). The package comes with `d.ts` declaration files.

<sub>⚡️ Powered by [**Moka Tecnologia**](https://github.com/mokatecnologia) — `< >` with lots of ☕️ by [**Moa Torres**](https://github.com/moatorres)</sub>
