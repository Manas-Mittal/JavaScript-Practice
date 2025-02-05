//block of code performing specific task
//function_name(parameter_list){.....}

function greet(){
    console.log("Hello");
}
greet();

function sayHello(name){
    console.log(`Hello to ${name}`)
}
sayHello("Manas");

//return keyword
function func(x, y){
    return x+y;
}
console.log(func(10, 20));
//function declaration and function expression

//declaration
function greeting(name){
    console.log(`Hello to ${name}`)
}

//expression -> when we store a function declaration inside a variable and this type of function is anonymous function
const hello = function(name){
    console.log(`Hi ${name} iam Manas`);
}
hello("Mittal");

//hoisting occurs incase of normal functions but incase function expressions no hoisting occurs you need to write function expression and then call it.

//callback function
//when a function is passed as an arguemnet to other function then that function is called as a callback function
function fn(value){
    console.log("Iam callback with value "+value);
}
function callfunc(fn){
    const value = 10;
    fn(value);
}
callfunc(fn);//donot call here just pass ref. of the callback function.
