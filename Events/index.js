
// const EventEmitter = require('events');

// // Initializing event emitter object 
// var eventEmitter = new EventEmitter();

// // register to myEvent 
// eventEmitter.on('myEvent', (msg) => {
//     console.log(msg);
// });

// // trigger  myEvent
// eventEmitter.emit('myEvent', "Hello There");


//add multiple event listner

const events = require('events');

const myEmitter = new events.EventEmitter();

var listner1 = function listner1() {
    console.log('listner1 executed.');
}

var listner2 = function listner2() {
    console.log('listner2 executed.');
}

myEmitter.addListener('connection', listner1);

myEmitter.on('connection', listner2);

myEmitter.emit('connection');
console.log("Number of Listeners:" + myEmitter.listenerCount('connection'));