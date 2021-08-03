import { Tags } from './type-tags'

declare const tags: Tags
declare type StringPredicate = (str: string) => boolean
declare type AnyPredicate = (value: any) => boolean

export declare const hasDefaultTag: AnyPredicate
export declare const hasToStringMethod: AnyPredicate
export declare const isAbortControllerTag: StringPredicate
export declare const isAbortSignalTag: StringPredicate
export declare const isDefaultTag: StringPredicate
export declare const isAggregateErrorTag: StringPredicate
export declare const isArgumentsTag: StringPredicate
export declare const isArrayTag: StringPredicate
export declare const isArrayIteratorTag: StringPredicate
export declare const isArrayBufferTag: StringPredicate
export declare const isAsyncFunctionTag: StringPredicate
export declare const isAtomicsTag: StringPredicate
export declare const isBigIntTag: StringPredicate
export declare const isBigInt64ArrayTag: StringPredicate
export declare const isBigUint64ArrayTag: StringPredicate
export declare const isBooleanTag: StringPredicate
export declare const isConsoleTag: StringPredicate
export declare const isDataViewTag: StringPredicate
export declare const isDateTag: StringPredicate
export declare const isErrorTag: StringPredicate
export declare const isEvalErrorTag: StringPredicate
export declare const isFinalizationRegistryTag: StringPredicate
export declare const isFloat32ArrayTag: StringPredicate
export declare const isFloat64ArrayTag: StringPredicate
export declare const isFunctionTag: StringPredicate
export declare const isGeneratorTag: StringPredicate
export declare const isGeneratorFunctionTag: StringPredicate
export declare const isGlobalThisTag: StringPredicate
export declare const isInfinityTag: StringPredicate
export declare const isInt8ArrayTag: StringPredicate
export declare const isInt16ArrayTag: StringPredicate
export declare const isInt32ArrayTag: StringPredicate
export declare const isIntlTag: StringPredicate
export declare const isIntlCollatorTag: StringPredicate
export declare const isIntlDateTimeFormatTag: StringPredicate
export declare const isIntlListFormatTag: StringPredicate
export declare const isIntlLocaleTag: StringPredicate
export declare const isIntlNumberFormatTag: StringPredicate
export declare const isIntlPluralRulesTag: StringPredicate
export declare const isIntlRelativeTimeFormatTag: StringPredicate
export declare const isIteratorTag: StringPredicate
export declare const isJsonTag: StringPredicate
export declare const isMapTag: StringPredicate
export declare const isMapIteratorTag: StringPredicate
export declare const isMathTag: StringPredicate
export declare const isNaNTag: StringPredicate
export declare const isNullTag: StringPredicate
export declare const isNumberTag: StringPredicate
export declare const isObjectTag: StringPredicate
export declare const isProcessTag: StringPredicate
export declare const isPromiseTag: StringPredicate
export declare const isRangeErrorTag: StringPredicate
export declare const isReferenceErrorTag: StringPredicate
export declare const isReflectTag: StringPredicate
export declare const isRegExpTag: StringPredicate
export declare const isSetTag: StringPredicate
export declare const isSetIteratorTag: StringPredicate
export declare const isSharedArrayBufferTag: StringPredicate
export declare const isStringTag: StringPredicate
export declare const isStringIteratorTag: StringPredicate
export declare const isSymbolTag: StringPredicate
export declare const isSyntaxErrorTag: StringPredicate
export declare const isTypedArrayTag: StringPredicate
export declare const isTypeErrorTag: StringPredicate
export declare const isUint8ArrayTag: StringPredicate
export declare const isUint8ClampedArrayTag: StringPredicate
export declare const isUint16ArrayTag: StringPredicate
export declare const isUint32ArrayTag: StringPredicate
export declare const isUndefinedTag: StringPredicate
export declare const isURIErrorTag: StringPredicate
export declare const isURLTag: StringPredicate
export declare const isWeakMapTag: StringPredicate
export declare const isWeakRefTag: StringPredicate
export declare const isWeakSetTag: StringPredicate
export declare const isWasmTag: StringPredicate
export declare const isWasmModuleTag: StringPredicate
export declare const isWasmGlobalTag: StringPredicate
export declare const isWasmInstanceTag: StringPredicate
export declare const isWasmMemoryTag: StringPredicate
export declare const isWasmTableTag: StringPredicate
export declare const isWasmCompileErrorTag: StringPredicate
export declare const isWasmLinkErrorTag: StringPredicate
export declare const isWasmRuntimeErrorTag: StringPredicate
export declare const isWindowTag: StringPredicate
export declare const isWorkerTag: StringPredicate
