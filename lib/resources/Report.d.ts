declare interface ReportOptions {
  descriptors?: boolean
  prototype?: boolean
}

declare interface InstanceReport<T> {
  name: string
  value: T
  typeof: string
  prototype: T | Function | string
  instanceof: string
  constructor: Function | object
  typetag: string
  toString: {
    self: string
    tag: string
    behavior: 'custom' | 'default'
  }
  symbols: {
    species: any
    iterator: Function | undefined
    toStringTag: string | undefined
    hasInstance: boolean
  }
  properties: {
    ownKeys: Array<any | undefined>
    ownDescriptors?: Array<any | undefined>
    prototypeKeys?: Array<any | undefined>
    prototypeDescriptors?: Array<any | undefined>
  }
}

declare interface BuiltinReport<T> {
  name: string
  typeof: string
  instance: T | Function | object
  properties: Array<string | undefined>
}

declare interface InstrospectReport<T> {
  typeof: string
  tag: string
  toString: string
  toStringTag: string | undefined
  toStringBehavior: 'custom' | 'default'
  constructor: T | Function | object
  properties: {
    ownKeys: Array<any | undefined>
    ownDescriptors?: Array<any | undefined>
    prototypeKeys?: Array<any | undefined>
    prototypeDescriptors?: Array<any | undefined>
  }
}

declare type ReportType<T> = {
  instance(value: T, options?: ReportOptions): InstanceReport<T>
  builtin(value: T, options?: ReportOptions): BuiltinReport<T>
  introspect(value: T, options?: ReportOptions): InstrospectReport<T>
}

export declare const Report: ReportType<T>
