//forEach method
//when we call forEach method on some array it basically calls the passed callback function on each element of the array and it passes three arguements to the function its upto us how many of them we need to accepts but we need to care that first is always element, second is index and third is the array itself.

//Three arguements are passed by forEach method to our callback function:
/*
1. element
2. index
3. array
*/
//its upto us how many of these we have to accept
let arr = [1, 2, 3, 4];
arr.forEach(function(element){
    console.log(element);
});
