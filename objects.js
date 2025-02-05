//allows to store collection of data with a label i.e a key-value pair.
const person = {
    //key->strings       value
    firstName: "Manas",
    lastName: "Mittal",
    age: 21,
    localtion: ["Dehradun", "Kanpur"],
    isProgrammer: true,
};
console.log(person);
//Accessing items from object
console.log(person.firstName);
console.log(person.lastName);

console.log(person["firstName"]);
console.log(person["age"]);

//adding new properties to the object
person.company = "NA";
person.address = ["kanpur", "Govind Nagar"];

//Deleting property from object
delete person.isProgrammer;
