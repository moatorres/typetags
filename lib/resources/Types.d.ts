import {
  Types as TypeNames,
  Tags,
  NestedTypes,
  PrimitiveTypes,
} from '../.internal/types'

declare interface TypeMeta {
  inGlobal: boolean
  isAvailable: boolean
  isConstructor: boolean
  isFactory: boolean
  isIterator: boolean
  isNested: boolean
  isPrimitive: boolean
  isSyntatic: boolean
  isStringifiable: boolean
  name: TypeNames | NestedTypes
  tag: Tags
  typeof: PrimitiveTypes
}

declare interface TypeMetaEmpty {
  isAvailable: false
}

declare interface ITypes {
  init(): void
  initializers(): { [key in TypeNames | NestedTypes]: any }
  metadata(options?: {
    refresh: boolean
  }): { [key in TypeNames | NestedTypes]: TypeMeta | TypeMetaEmpty }
  tags(options?: { refresh: boolean }): Array<{
    type: TypeNames | NestedTypes
    tag: Tags
  }>
  get(name: TypeNames | NestedTypes): any
  list(): Array<[string, any]>
  available(): Array<[string, any]>
  unavailable(): Array<[string, any]>
  report(): {
    types: number
    available: number
    unavailable: number
  }
}

export declare const Types: ITypes
