'use strict';

const Service = require('egg').Service;
class PostService extends Service {
  async create(require) {
    return require;
  }
}
module.exports = PostService;
