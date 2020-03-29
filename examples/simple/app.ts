/**
 * @format
 * @Author: Alvin
 * @Date 2020-03-29
 * @Last modified by: Alvin
 * @Last modified time: 2020-03-29
 */
import adapter from '../../src'

adapter({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})
