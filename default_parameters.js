//when an arguement is not passed in the function call then the default value will come in place to handle edge cases.
//we can set any default value according to our use case that 
function countTo5(count = true){
    if(count){
        for(let i = 1; i <= 5; i++){
            console.log(`Count: ${i}`);
        }
    }
}
