// ... -> rest operator
// the rest parameter syntax allows a function to accept indefinite number of arguements as an array, providing a way to represent variadic functions in JS.

function addInCart(...cartItems){
    console.log(cartItems);
}
addInCart("phone", "laptop", "earphones");
//in the above example we can see that on ecommerce websites we keep on adding items in cart so here rest operator can come in use and it keeps on adding the parameters in an array.

//we can also assign particular values to single variables and rest of the values to the rest arguement.
//for example:
function func(var1, var2, ...restValues){
    console.log(var1);
    console.log(var2);
    console.log(restValues);
}
func("manas", 19, "programmer", "web development", "student", "GEU", "Dehradun", 21021441);
//so here in this example "manas" and 19 goes to var1 and var2 and rest all the paramerters goes to restValues in an array, also the arguement with rest operator comes in the last in arguement list because then only it can know how many values it should take in.