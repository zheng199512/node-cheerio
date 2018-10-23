'use strict';

const Controller = require('egg').Controller;
const cluster = require('cluster');

class CookieController extends Controller {
  async add() {
    const ctx = this.ctx;
    ctx.redirect(this.ctx.origin + '/public/index.html');
  }
  async remove() {
    const ctx = this.ctx;
    ctx.cookies.set('count', null);
    ctx.status = 204;
  }
}

module.exports = CookieController;
