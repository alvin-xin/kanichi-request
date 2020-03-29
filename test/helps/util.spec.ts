/**
 * @format
 * @Author: Alvin
 * @Date 2020-03-29
 * @Last modified by: Alvin
 * @Last modified time: 2020-03-29
 */
import { isDate } from '../../src/helps/util'

describe("helps:util", () => {
  describe('isDate', () => {
    test('should validate Date', () => {
      expect(isDate(new Date)).toBeTruthy()
      expect(isDate(Date.now())).toBeFalsy()
    })
  })
})

