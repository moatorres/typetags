import { TTypeInterface } from './TType'
import { Types, Tags, NestedTypes, NestedPredicates } from '../constants'

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
  get(value: any): Tags
  of<T>(value: Types | NestedTypes | Array<T>): Array<Tags> | Tags
  enhance<T>(name: Types | NestedTypes): TTypeInterface<T>
  has(obj: any, tag?: string): boolean
  isDefaul(tag: string): boolean
  isIterator(obj: any): boolean
  isTypedArray(obj: any): boolean
  assign<T>(o: T, tag: string): T
}

export declare const TypeTags: ITypeTags & IPredicates & TypeTagHelpers
