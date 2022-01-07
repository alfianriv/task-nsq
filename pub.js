const nsq = require('nsqjs');
require('dotenv').config();

const pub = new nsq.Writer(process.env.NSQD_HOST, +process.env.NSQD_PORT);

pub.connect();

pub.on('ready', () => {
  pub.publish('task_topic', {
    id: '123',
    name: 'task1',
    status: 'pending',
  });
  console.log('publish message to task_topic');
  
  pub.close();
});

pub.on('closed', () => {
  console.log('Publisher closed');
});