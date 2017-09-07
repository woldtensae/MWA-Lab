const EventEmitter = require('events');

class Clock extends EventEmitter{}

var clockEmitter = new EventEmitter();
clockEmitter.on('tick', function(){
    console.log("wooohoo");
})

setInterval(function(){
    clockEmitter.emit('tick');
}, 1000);


