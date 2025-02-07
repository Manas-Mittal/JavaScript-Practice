//spread operator expands an iterable into individual elements
//use with functions
function func(a, b, c, d){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
let colors = ["red", "green", "blue", "black"];
func(colors);//if we do this then the colors value will be only assigned to local variable 'a' and rest of the variables will remain undefined.

func(...colors);//if we do this then colors array will get spread into single values and each value will get assigned to respective variable.

//incase of function call these individual values are passed as arguemnets but we cant o something like this:
// let var1 = ...colors; this will throw error as we need to hold the individual values

//use with arrays
const nums = ["one", "two", "three"];
const nums2 = ["four", "five", "six"];
const result = [...nums, ...nums2];//this will concat the two arrays as we are spreading both the arrays and storing the values in one single array.

//use with objects
const obj1 = {
    x:1,
    y:2
}
const obj2 = {
    z:3
}
//if we merge the objects like then it will create two nested objects inside obj3 rather then creating a one single objects.
let obj3 = {
    obj1, //obj1 = obj1
    obj2 // obj2 = obj2 
    //here we used the shorthand because name of property and value are same
}
console.log(obj3);
//using spread operator
obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3);

//some more examples
let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let res = [...arr, arr2, 9, 10, 11];
//here in above example all elements of arr will be spread and come as individual elements in res on the other hand arr2 will come as nested array.
console.log(res);
