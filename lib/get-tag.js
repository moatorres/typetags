/**
 * Gets the `toStringTag` of `value`.
 *
 * @param {*} value The `value` to query.
 * @returns {string} Returns the `toStringTag`.
 */
function getTag(value) {
  const toString = Object.prototype.toString

  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }

  return toString.call(value)
}

export default getTag
