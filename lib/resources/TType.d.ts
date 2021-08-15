import { InstanceReport, ReportOptions } from './Report'

declare interface TTypeProps {
  type: string
  tag: string
}

declare type ITTypeClass<T> = {
  create(props: TTypeProps): ITType<T>
}

declare type ITType<T> = {
  name: string
  type: string
  tag: string
  isNotAvailable: string | boolean
  toString(): string
  hasSpecialArgs(): boolean
  isSyntatic(): boolean
  isTypedArray(): boolean
  isConstructor(): boolean
  isFactory(): boolean
  isStringifiable(): boolean
  isObject(): boolean
  isFunction(): boolean
  info(options?: ReportOptions): InstanceReport<T> | never
  instance(...args: any): string | object | T
  isAvailable(): boolean
  ownKeys(): Array<keyof T>
}

export declare const TType: ITTypeClass<any>
