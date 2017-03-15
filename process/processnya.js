const kue = require('kue');
const queue = kue.createQueue();

const api_key = 'key-dc9c01674b3c394829bb4fc8a06cc4f0';
const domain = 'sandboxa0d3491da32b4702af3f4ff2ce83039e.mailgun.org';
const mailgun = require('mailgun-js')({
  apiKey: api_key,
  domain: domain
});

queue.process('sendEmail', function(job, done){
  email(job.data, done);
});

function email(dataEmail, done) {
  mailgun.messages().send(dataEmail, function (error, body) {
    console.log(body);
  });
  done();
}
