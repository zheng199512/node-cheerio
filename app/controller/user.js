'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const userId = this.ctx.params.id;
    console.log('zheng');
    const userInfo = await this.ctx.service.user.find(userId);
    this.ctx.body = userInfo;
  }
}

module.exports = UserController;
