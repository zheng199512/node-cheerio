'use strict';

const cluster = require('cluster');


module.exports = app => {
  app.beforeStart(async () => {
    if (cluster.isMaster) {
      const worker = cluster.fork();
      worker.send('hi,there');
      worker.on('message', msg => {
        console.log(`msg:${msg} from worker # ${worker.id}`);
      });
    } else if (cluster.isWorker) {
      process.on('message', msg => {
        process.send(msg);
      });
    }
  });
};
