/**
 * Using Object prototype check type constructor.
 * @param {string} type Constructor name.
 * @param {any} value
 * @returns {boolean}
 */
function is(type, value) {
  return Object.prototype.toString.call(value) === `[object ${type}]`
}

export default is
