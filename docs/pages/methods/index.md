# Methods

### Overview

The `TypeTags` object contains a set of **properties**, **methods** and **predicates** that we can use to check an object's type tag.

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
import { Types, Tags, NestedTypes, NestedPredicates } from '../constants'

declare type PredicateNames = `is${Types | NestedPredicates}`

declare interface Predicate {
  predicate(value: any): boolean
}

declare type PredicateMapper<Type> = {
  [Prop in keyof Type as PredicateNames]: Type[Prop]
}

declare type Predicates = PredicateMapper<Predicate>

declare type TypeTagsInterface = {
  [key in Types | NestedTypes]: Tags
}

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

export declare const TypeTags: TypeTagsInterface & Predicates & TypeTagMethods
```
