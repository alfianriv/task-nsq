const nsq = require('nsqjs');
require('dotenv').config();

const reader = new nsq.Reader('task_topic', 'task_channel', {
  lookupdHTTPAddresses: `${process.env.NSQ_LOOKUPD_HOST}:${process.env.NSQ_LOOKUPD_PORT}`,
});

reader.connect();

reader.on('message', msg => {
  console.log(msg.id, msg.json());
  msg.finish();
});