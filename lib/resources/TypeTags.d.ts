import { Types, Tags, NestedTypes, NestedPredicates } from '../.internal/types'

import { TTypeInterface } from './TType'

declare type PredicateNames = `is${Types | NestedPredicates}`

declare interface Predicate {
  predicate(value: any): boolean
}

declare type PredicateMapper<Type> = {
  [Prop in keyof Type as PredicateNames]: Type[Prop]
}

declare type IPredicates = PredicateMapper<Predicate>

declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}

declare type TypeTagHelpers = {
  get(name: Types | NestedTypes): Tags | undefined
  of<T>(value: Types | NestedTypes | Array<T>): Array<Tags> | Tags
  enhance<T>(name: Types | NestedTypes): TTypeInterface<T>
  hasToStringMethod(obj: any): boolean
  isDefaulTag(tag: string): boolean
  isIterator(obj: any): boolean
  isTypedArray(obj: any): boolean
}

export declare const TypeTags: ITypeTags & IPredicates & TypeTagHelpers
