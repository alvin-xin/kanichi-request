/**
 * @format
 * @Author: Alvin
 * @Date 2020-03-30
 * @Last modified by: Alvin
 * @Last modified time: 2020-03-30
 */
import compose from './compose'

/**
 * 通过洋葱模型的中间件模型执行
 */
class Union {

  // 存储中间件
  use(newMiddleware: any, opts = { global: false, core: false, defaultInstance: false }): void {

  }

  // 执行中间件
  execute(params = null) {
    const fn = compose([]);
    return fn(params);
  }

}

export default Union;
