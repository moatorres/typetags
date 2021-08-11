import { InstanceReport, ReportOptions } from './Report'
import { TType } from './TType'

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
  isConstructor(): boolean
  isFactory(): boolean
  isStringifiable(): boolean
  create(...args: any): T
  build(...args: any): T
  from(...args: any): T
  of(...args: any): T
  info(options?: ReportOptions): InstanceReport<T> | never
  instance(...args: any): string | object | T
  isAvailable(): boolean
  ownKeys(): Array<keyof T>
}

export declare const TType: ITTypeClass<T>
