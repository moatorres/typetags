import { PrimitiveTypes, Tags, Types } from '../.internal/types'
import { InstanceReport, ReportOptions } from './Report'

declare interface TTypeProps {
  type: string
  tag: string
}

declare type ITTypeClass<T> = {
  create(props: TTypeProps): ITType<T>
}

export declare type ITType<T> = {
  type: Types
  tag: Tags
  isAvailable(): boolean
  isSyntatic(): boolean
  isTypedArray(): boolean
  isConstructor(): boolean
  isFactory(): boolean
  isObject(): boolean
  isFunction(): boolean
  isNested(): boolean
  isIterator(): boolean
  isStringifiable(): boolean
  hasSpecialArgs(): boolean
  getTag(): Tags
  typeOf(): PrimitiveTypes | 'object'
  toString(): Tags
  inGlobal(): boolean
  info(options?: ReportOptions): InstanceReport<T> | never
  instance(...args: any): T | string | object
  ownKeys<T>(): Array<keyof T>
}

export declare const TType: ITTypeClass<any>
