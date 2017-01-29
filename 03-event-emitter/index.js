'use strict';

const EventEmitter = require('events').EventEmitter;


console.log("Event Emitter sample code");


var getResource = function (c) {

  var e = new EventEmitter();

  // finishes
  process.nextTick(() => {
    var count = 0;
    e.emit('start');

    // The setImmediate(), setInterval(), and setTimeout() methods each return objects that
    // represent the scheduled timers. These can be used to cancel the timer and prevent it from triggering.
    var t = setInterval(() => {
      e.emit('data', ++count);

      if (count === c) {
        e.emit('end');

        // cancels the timer, if this is not defined then timer will not stop. Counting infinitely
        clearInterval(t);
      }

    }, 1000);

  });

  return e;
}

var r = getResource(3);

r.on('start', () => {
  console.log("event emitter started");
});

r.on('data', (result) => {
  console.log("Result: " + result);
});

r.on('end', () => {
  console.log("event emitter ended");
});