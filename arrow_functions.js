//concise and short way of using functions.
const greet = (params) => `Hello Manas`;
//incase of one parameter then you can omit the params parenthesis.
//and incase if your function has one line of code then we can omit curly braces and automatically that one line gets returned without writing return keyword.


const calc = n => n*2;//this code takes one parameter 'n' and returns n*2 as this is onely one line function
console.log(calc(5));

setTimeout(()=>{
    console.log("Hello");
    setTimeout(()=>{
        console.log("Hey");
        setTimeout(()=>{
            console.log("Namaste");
            setTimeout(()=>{
                console.log("Hi");
                setTimeout(()=>{
                    console.log("Bonjour");
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);