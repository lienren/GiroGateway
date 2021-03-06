/*
 * @Author: Lienren
 * @Date: 2018-04-19 13:38:30
 * @Last Modified by: Lienren
 * @Last Modified time: 2019-01-28 17:22:44
 */
'use strict';

const assert = require('assert');
const log = require('../utils/log');
const redirect = require('./request_redirect');
const auth = require('./request_authentication');

module.exports = async function(ctx, next) {
  // 响应开始时间
  const requestStartTime = new Date();

  // 整合query和body内容
  ctx.request.body = {
    ...ctx.request.query,
    ...ctx.request.body
  };

  ctx.work = {
    code: '000000',
    message: 'success'
  };

  try {
    await next();

    // 响应间隔时间
    let ms = new Date() - requestStartTime;

    // 记录响应日志
    log.logResponse(ctx, ms);

    ctx.body = {
      code: ctx.work.code,
      message: ctx.work.message,
      data: ctx.body || {}
    };
  } catch (error) {
    // 响应间隔时间
    let ms = new Date() - requestStartTime;

    // 记录异常日志
    log.logError(ctx, error, ms);

    ctx.body = {
      code: error.code || error.name || error.message,
      message: error.message,
      data: {}
    };
  }
};
