'use strict';

const Service = require('egg').Service;
class UserService extends Service {
  async find(uid) {
    const data = {
      name: 'zheng',
      age: '10',
      id: uid,
    };
    return data;
  }
}
module.exports = UserService;
