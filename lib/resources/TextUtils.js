'use strict'

export class TextUtils {
  static toTag(str) {
    return String('[object ' + String(str) + ']')
  }

  static toLower(str) {
    return String(str).toLowerCase()
  }

  static toUpper(str) {
    return String(str).toUpperCase()
  }

  static toFirstUpper(str) {
    return String(str)[0].toUpperCase() + String(str).substr(1)
  }

  static toFirstLower(str) {
    return String(str)[0].toLowerCase() + String(str).substr(1)
  }

  static toPredicate(str) {
    return String(
      'is' +
        this.toFirstUpper(String(str)).split('.').join('').split(' ').join('')
    )
  }

  static toRemoveDot(str) {
    return String(str).split('.').join(' ')
  }
}
