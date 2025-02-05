//Scope determines where we can access a particular variable or not.

//couple of curly braces determines the scope.
// {
//scope
//}

let hellomsg = "hi"; //global variable
console.log(hellomsg);
function show(){
    //scope of this variable is only within its scope which is the function show
    let hellomsg = "hello";//local variable 
    console.log(hellomsg);
}