# Methods

The `TypeTags` object contains a list of properties, predicates and helper methods that we can use to check an object's type tag.

### Usage

```js
import { TypeTags } from 'typetags'

const o = { foo: 'bar' }

if (o.toString() !== TypeTags.Object) {
  doSomething()
}
```

### Signature

```ts
import { TTypeInterface } from './TType'
import { NestedTypes, Types, Tags } from '../constants'

declare type TypeTagMethods = {
  get(name: Types | NestedTypes): Tags
  get(value: any): Tags
  of<T>(value: Types | NestedTypes | Array<T>): Array<Tags> | Tags
  enhance<T>(name: Types | NestedTypes): TTypeInterface<T>
  hasToStringMethod(object: any): boolean
  isDefaulTag(tag: string): boolean
  isIterator(object: any): boolean
  isTypedArray(object: any): boolean
  assign<T>(object: T, tag: string): T
}
```
