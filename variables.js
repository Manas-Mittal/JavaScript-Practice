const acc_id = 1234; //cannot be changed later
let acc_email = "manas@gmail.com";
var acc_pass = "23456";
acc_city = "kanpur"; //this variable is a global variable, even if it is declared inside any scope
let acc_state; //not initialised so its value will be undefined

//acc_id = 2; //error statement because const cannot be changed later
console.log(acc_id);

//can be changed
acc_email = "m@gmail.com";
acc_pass = "212121";
acc_city = "bengaluru";

console.table([acc_id, acc_email, acc_pass, acc_city]); //display in tabular format

// var has some scope related problems
//let is the solution of problems that came due to var
