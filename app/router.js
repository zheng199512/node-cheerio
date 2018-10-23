'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/user/:id/:name', controller.home.index);
  app.router.get('s', '/search', app.middleware.uppercase(), app.controller.home.index);
  app.router.get('/api/posts', app.controller.post.create);
  app.router.get('/user/:id', app.controller.user.info);
  app.router.get('/', app.controller.cookie.add);
  app.router.get('/captcha', app.controller.captcha.get);
  app.router.get('/catch',app.controller.catch.catch);
};

