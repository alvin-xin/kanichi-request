/**
 * @format
 * @Author: Alvin
 * @Date 2020-03-29
 * @Last modified by: Alvin
 * @Last modified time: 2020-03-29
 */

const xhrAdapter = function(config: any): any {

  return new Promise(function dispatchXhrRequest(resolve, rejkect) {
    const {url, headers, data, method = 'get'} = config;

    const request = new XMLHttpRequest();

    request.open(method.toUpperCase(), url, true);

    request.send(data);
  })
}

export default xhrAdapter;
