/*
 * @Author: Lienren
 * @Date: 2019-01-28 16:47:23
 * @Last Modified by: Lienren
 * @Last Modified time: 2019-01-28 17:20:59
 */

module.exports = {
  hello: async (ctx, next) => {
    ctx.body = {
      data: 'hello world'
    };
  }
};
