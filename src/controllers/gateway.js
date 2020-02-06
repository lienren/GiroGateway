/*
 * @Author: Lienren
 * @Date: 2019-01-28 17:26:09
 * @Last Modified by: Lienren
 * @Last Modified time: 2019-01-29 10:02:21
 */
'use strict';

module.exports = {
  to: async (ctx, next) => {
    console.log('request:', ctx.request);
    ctx.body = {
      state: ctx.state,
      request: ctx.request,
      app: ctx.app,
      cookies: ctx.cookies
    };
  }
};
