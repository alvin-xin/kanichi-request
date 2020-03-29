/**
 * @format
 * @Author: Alvin
 * @Date 2020-03-29
 * @Last modified by: Alvin
 * @Last modified time: 2020-03-29
 */

const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}
