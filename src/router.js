/*
 * @Author: Lienren
 * @Date: 2019-01-28 16:47:47
 * @Last Modified by: Lienren
 * @Last Modified time: 2019-01-28 17:27:59
 */
'use strict';

const Router = require('koa-router');
const ctrl = require('./controllers/index.js');

const router = new Router();

router.all('/to/(.*)', ctrl.gateway.to);

module.exports = router.routes();
