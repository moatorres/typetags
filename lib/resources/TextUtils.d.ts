declare interface ITextUtils {
  toTag(str: string): string
  toLower(str: string): string
  toUpper(str: string): string
  toFirstUpper(str: string): string
  toFirstLower(str: string): string
  toPredicate(str: string): string
  toRemoveDot(str: string): string
}

export declare const TextUtils: ITextUtils
