'use strict';

const Controller = require('egg').Controller;
const svgCaptcha = require('svg-captcha');

class CaptchaController extends Controller {
  async get() {
    const captcha = svgCaptcha.create();
    this.ctx.body = captcha.data;
  }
}

module.exports = CaptchaController;
