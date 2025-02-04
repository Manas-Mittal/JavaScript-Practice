//strings are indexed
//length property->gives number of characters in string
let str = "Manas";
var len = str.length;//property

//toUpperCase->do not changes in actual string
let str1 = str.toUpperCase();
//toLowerCase
let str2 = str.toLowerCase();

//trim->removes unnecessary spaces and not change the original string
let str3 = "    Hello iam Manas   ";
let str4 = str3.trim();
//trimStart()->removes unnecessary spaces from start
//trimEnd()->removes unnecessary spaces from end

//includes()->checks that a given string exist in string from which includes is called
console.log(str.includes("M"));

//indexOf()->gives us index of any given character in string, it will give the index of first occurrence of the specified character, and returns -1 if not found
console.log(str.indexOf('a'));
//if you pass a string in indexOf() method then it will return index from where specified string start.

//replace()->replaces a particular string from specified string, it will only replace the first occurrence.
let str6 = str.replace("M", "Z");//(string to be replaced, string which will replace)
console.log(str6);
//replaceAll()->it will replace each and every occurrence.

//conact()->joins two or more strings together just like '+' operator, we can pass 'n' number of arguements in concat method because it uses rest operator internally.
let one = "Hello I am";
let two = "Manas Mittal";
let result = one.concat(" ", two);
console.log(result);

//padStart()->add a specified string before a string
let accnt = "1234";
console.log(accnt.padStart(16, "ab"));//first arg. is total number of characters we want in the result string and second is the string which we want to pad in the start.

//padEnd()->works same as padStart but it pads the specified string at the end. 

//Slice->takes start, end and return a sections of string, start will be index based and end will be position based.
console.log(str.slice(0, 1));

//split and join method
//split->split string into substring and returns them into an array.
//join method joins the contents of array back into string on the basis of specified separator

//quotes will not allow us to store multiline strings but backticks will allow us to do that.
//also using backticks appending variables between string is easy.
let str8 = `My name is ${str}`;
console.log(str8);
