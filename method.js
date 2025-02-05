//methods are just functions inside object.
function greet(){
    return `Hello iam manas`;
}

let person = {
    name: "Manas",
    greet //method
};
console.log(person.greet());

//another way of creating methods
let obj = {
    name: "Manas",
    age: 21,
    greet: function(){
        return `Hello`;
    }
}