'use strict';

const rabbit = require('amqplib/callback_api');

rabbit.connect('amqp://localhost', (err, conn) => {
  conn.createChannel((err, ch) => {
    const q = 'hello';
    const msg = 'Hello World!';

    ch.assertQueue(q, {durable: false});
    ch.sendToQueue(q, new Buffer(msg));
    console.log(" [x] Sent %s", msg);
  });
  setTimeout(() => {
  conn.close(); process.exit(0)
  }, 500);
});