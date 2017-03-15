const kue = require('kue');
const queue = kue.createQueue();

var dataEmail = queue.create('sendEmail', {
  from: 'Mailgun Sandbox <postmaster@sandboxa0d3491da32b4702af3f4ff2ce83039e.mailgun.org>',
  to: 'wahyu <wahyuwajjoo@gmail.com>',
  subject: 'Pesan pertama',
  text: 'Test kirim pesan pertama !!!'
}).save( function(err){
   if( !err ) console.log( dataEmail.id );
});
