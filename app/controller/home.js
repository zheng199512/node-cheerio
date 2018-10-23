'use strict';

const Controller = require('egg').Controller;
// const cluster = require('cluster');

class HomeController extends Controller {
  async index() {
    // console.log('hahah');
    this.logger.warn('asd');
    this.ctx.body = `search:${this.ctx.query.name}`;

  }
}

module.exports = HomeController;
