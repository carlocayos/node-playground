const EventEmitter = require('events');

class MyEventEmitter extends EventEmitter {
  constructor() {
    super();
  }

  write(data) {

    process.nextTick(() => {
      var count = 0;
      this.emit('start');

      var t = setInterval(() => {
        this.emit('data', ++count);

        if (count === data) {
          this.emit('end');
          clearInterval(t);
        }
      }, 1000)
    });
  }
}

module.exports = MyEventEmitter;


