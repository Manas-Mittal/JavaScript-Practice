//for-in loop is used iterate over keys i.e. properties of an object or on index of an array.

let person = {
    name: "Manas",
    age: 21,
    gender: "Male"
}
for(let key in person){
    console.log(`Key: ${key} and Value: ${person[key]}`);
}
const arr = [1, 2, 3, 4];
for(let index in arr){
    console.log(`Index: ${index} and Value: ${arr[index]}`);
}