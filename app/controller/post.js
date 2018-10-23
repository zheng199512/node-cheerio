'use strict';
const Controller = require('egg').Controller;
class PostController extends Controller {
  async create() {
    const { ctx } = this;
    // console.log('asd');
    // const createRule = {
    //   title: { type: 'string' },
    //   content: { type: 'string' },
    // };
    // console.log('asd');
    // ctx.validate(createRule);
    // const author = ctx.session.userId;
    // const req = Object.assign(ctx.request.body, { author });
    // this.ctx.body = 'author';
    // const res = await ctx.service.post.create(req);
    ctx.body = { id: '12' };
    // ctx.status = 200;
  }
}

module.exports = PostController;
