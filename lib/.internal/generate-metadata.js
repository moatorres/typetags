'use strict'

import { ALL_TYPES } from '../constants'
import { TType } from '../resources/TType'

const getReport = (name) => {
  const type = TType.create(name)

  return {
    name: name,
    tag: type.tag,
    hasSpecialArgs: type.hasSpecialArgs(),
    isGlobal: type.isGlobal(),
    isAvailable: type.isAvailable(),
    isConstructor: type.isConstructor(),
    isFactory: type.isFactory(),
    isFunction: type.isFunction(),
    isIterator: type.isIterator(),
    isNested: type.isNested(),
    isObject: type.isObject(),
    isPrimitive: type.isPrimitive(),
    isStringifiable: type.isStringifiable(),
    isSyntatic: type.isSyntatic(),
    isTypedArray: type.isTypedArray(),
    ownKeys: type.ownKeys(),
    typeOf: type.typeOf(),
    instanceTypeOf: type.instanceTypeOf(),
  }
}

export const generateMetadata = () =>
  ALL_TYPES.reduce((result, name) => {
    result[name] = getReport(name)

    if (!result[name].isAvailable) result[name] = { isAvailable: false }

    return result
  }, {})
