import { NestedTypes, Types } from './constants'

declare type Initializers = {
  readonly [key in Types | NestedTypes]: any
}

export declare const initializers: Initializers
