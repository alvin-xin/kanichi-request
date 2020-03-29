/**
 * @format
 * @Author: Alvin
 * @Date 2020-03-30
 * @Last modified by: Alvin
 * @Last modified time: 2020-03-30
 */
import Union from './unoin'

class Core {
  request(config: any): any {
    const union = new Union()

    // 执行请求中间件
    return Promise.resolve(union.execute())
  }
}

export default Core
