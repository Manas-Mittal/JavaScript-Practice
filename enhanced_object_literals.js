function user(name, age, work){
    //if the property and the value are same then we can remove one and code will work as same. 
    //and we can write functions in this way directly.
    return {
        name,
        age,
        work,
        intro(){
            console.log(`My name is ${name}`);
        }
    };
}

const person = user("Manas", 21, "Programmer");
console.log(person);