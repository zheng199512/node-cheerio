'use strict';

const Controller = require('egg').Controller;

class NpmController extends Controller {
  async put() {
    const ctx = this.ctx;
    const result = await ctx.curl('https://www.baidu.com/put', {
      method: 'PUT', contentType: 'json', data: {
        update: 'foo bar',
      },
      dataType: 'string',
    });
    ctx.body = result.data;
  }
}
module.exports = NpmController;
