'use strict';

const MyEventModule = require('./myeventmodule');

var myCustomEvent = new MyEventModule();

myCustomEvent.write(3);


myCustomEvent.on('start', () => {
  console.log('Started');
});

myCustomEvent.on('data', (data) => {
  console.log('Result: ' + data);
});

myCustomEvent.on('end', () => {
  console.log('Ended');
});