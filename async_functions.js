//setInterval() -> repeat a function in some intervals again and again.

setInterval(fn, 2000); //pass time in milliseconds, on every 2th second fn will get executed.
function fn(){
    console.log("Hello");
}

//setTimeout() -> execute a function on the specified amount of time.
setTimeout(function(){
    console.log("Hello");
}, 3000);//function without name is called anonymous function and this also takes time in milliseconds.

const intervalId = setInterval(function(){
    console.log("Hello");
}, 1000);
//when i write a function insdide setInterval tells node to execute this function at every 1 sec and at that time node creates a timout object for this particular execution now everytime node take a look on this object sees which function to execute as it contains the ref. also sees isnt the execution stopped if yes then stop it if no then continue it so setInterval is just like a on switch once it started node and timout object will take care.

//this is how timeout object looks like:
/*

Timeout {
  _idleTimeout: 1000,
  _idlePrev: [TimersList],
  _idleNext: [TimersList],
  _idleStart: 1234,
  _onTimeout: [Function],
  _timerArgs: undefined,
  _repeat: 1000,
  _destroyed: false
}

*/

//here some importsnt properties are _idleTimeout(tells nodejs to wait this much time after completing one iteration), _onTimeout(tells nodejs to call this function after timeout), _destroyed(indicates this field as true when clearInterval is called to stop the execution).

setTimeout(function(){
    clearInterval(intervalId);
    console.log("Interval Cleared");
}, 5000);
//so at 5th second this function will get executed and clearInterval will mark the _destroyed field of ref. of timeout object that is in intervalId as true and when this field will be seen by nodejs then it will stop the interval.

//IMPORTANT
//on 5th second clearInterval will get executed so hello will be printed 4 times
