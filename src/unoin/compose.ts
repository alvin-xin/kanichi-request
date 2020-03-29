/**
 * @format
 * @Author: Alvin
 * @Date 2020-03-30
 * @Last modified by: Alvin
 * @Last modified time: 2020-03-30
 */

export default function compose(middlewares: any) {
  if (!Array.isArray(middlewares)) throw new TypeError('Middlewares must be an array!');

  const middlewaresLen = middlewares.length;
  for (let i = 0; i < middlewaresLen; i++) {
    if (typeof middlewares[i] !== 'function') {
      throw new TypeError('Middleware must be componsed of function');
    }
  }

  // params 可能是request obj对象
  return function wrapMiddlewares(params: any, next: any = undefined) {
    let index = -1;
    function dispatch(i: any) {
      if (i <= index) {
        return Promise.reject(new Error('next() should not be called multiple times in one middleware!'));
      }
      index = i;
      const fn = middlewares[i] || next;

      // 如果是后续的递归迭代规则，此时的!fn === false
      // 根据传参规则，在onion.exec(params) 此时的next为undefined， 符合下面的条件，进入到Promise.resolve()
      if (!fn) return Promise.resolve();

      try {
        return Promise.resolve(fn(params, () => dispatch(i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return dispatch(0);
  };
}
