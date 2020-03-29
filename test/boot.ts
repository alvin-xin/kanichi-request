/**
 * @format
 * @Author: Alvin
 * @Date 2020-03-29
 * @Last modified by: Alvin
 * @Last modified time: 2020-03-29
 */

const JasmineCore = require('jasmine-core')

// @ts-ignore
global.getJasmineRequireObj = function() {
  return JasmineCore
}

require('jasmine-ajax')

