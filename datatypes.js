"use strict"; // treat all JS code as newer version
//alert("hello"); // it can be used in browser but not in node
//There are two types of datatypes :
// Primitive
// Non Primitive
//Primitive
/*
number
string
boolean
undefined
null
bigint
symbol
*/
var a = 7;
console.log(typeof a); // can be used to determine typeof any variable

let b = "Manas" // string
console.log(typeof b);

//another better way of declaring string
let x = `Manas Mittal studies in Graphic Era`; //using template literal

//convert string to number
let z = `100`;
z = +z; // works with - also
console.log(typeof z);

//Another way
let d = `100abcd`;
//if we will convert this string to number using previous method you will get NaN i.e. not a number
d = parseInt(d);//it converts only 100 to number and neglects rest of the string
console.log(d);

//converting number to string
console.log(typeof (""+100));
//plus operator adds two numbers of both operands are numbers if any of them are string it will convert the result into string, minus operator is strictly mathematical

//boolean -> true/false

//undefined -> variable is declared but not initialised, it basically signifies that the variable is declared but not initialised

//null is used when we explicitly want to show that this variable currently donot have any value.

//null is a falsy value because it corresponds to 0 in number and undefined gives NaN.

console.log(typeof(undefined+"")); // undefined converted to string
console.log(typeof(null+""));//null can also be converted to string

//number can store values safely upto -2^53+1 to 2^53-1 but if you go beyond this range it will give precision issues.

//this problem is solved by bigint
let bigvar = 123456789101213n;//bigint number is intialised with 'n' as suffix.
//or by using BigInt() constructor
let variable = BigInt(1234567891023547);







