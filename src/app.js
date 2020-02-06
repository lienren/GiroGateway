/*
 * @Author: Lienren
 * @Date: 2019-01-28 16:37:01
 * @Last Modified by: Lienren
 * @Last Modified time: 2019-02-27 15:00:35
 */
'use strict';

console.time('Gateway Startup');

const http = require('http');
const { URL } = require('url');
const config = require('./config.js');

let server = http.createServer(function(req, res) {
  console.log('req:', req);

  let options = new URL('http://www.axon.com.cn');

  let opts = {
    protocol: 'http:',
    host: 'www.axon.com.cn',
    hostname: 'www.axon.com.cn',
    pathname: req.url
  };

  let proxy = http.request(opts, function(resProxy) {
    res.writeHead(resProxy.statusCode, resProxy.headers);
    resProxy.pipe(res);

    resProxy.on('data', chunk => {
      // console.log(`响应主体: ${chunk}`);
    });

    resProxy.on('end', () => {
      // console.log('响应中已无数据');
    });
  });
  req.pipe(proxy);

  req.on('error', e => {
    // onsole.error(`请求遇到问题: ${e.message}`);
  });

  proxy.end();
});
server.listen(config.sys.port);

console.timeEnd('Gateway Startup');
console.log(`listening: http://127.0.0.1:${config.sys.port}`);
