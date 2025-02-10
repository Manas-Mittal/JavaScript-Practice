//destructuring allows us to "unpack" values from data structures (Arrays, objects) into separate distinct variables.

//destructuring with arrays:
const arr = ["one", "two", "three"];
let [var1, var2, var3, var4] = arr;
//this is the destructuring syntax and here we specify the variables in which we want to fetch the values from the array.
//so here, 
/*

var1 -> "one"

var2 -> "two"

var3 -> "three"

var4 -> undefined

here in var4 there is undefined because there is no value in the array that can go in var4

*/

//giving default value to the variables in which destructuring is being done

let a,b;

[a=1, b=5, c=7, d=9] = [7, 8];

//here in above case a and b variables will get the value from the array because first two variables will go in a, b but for c and there are no values in the array hence in this case the default values will take place in c, d.

//ignoring values while destructuring
const [x, , y] = [1, 2, 3];
//here 1 goes in x and 2 was ignored because there is no placeholder variable for 2 and 3 goes in y.
//but this ignoring will only work while array destructuring it will not work in object destructuring.

//using rest operator while array destructuring:
const [a2, ...b2] = ["one", "two", "three", "four"];
//here "one" goes in a2 and rest "two", "three" and "four" goes in b2 as array because there is rest operator before b2. 

//Object destruturing
//in array destructuring there is no label of the data stored in the array but in object there is already a label that is key associated with the data thats why while destructuring we dont need to provide a new label and we directly specify the property name.

const student = {
    name: "Manas",
    age: 21,
    college: "GEU"
};
const {name, age, college} = student;
//here we can directly access name, age and college property without everytime need of doing student.name or student.age, student.college so object destructuring also gives ease in accessing the data.
console.log(name);
console.log(age);
console.log(college);

//NOTE -> incase of object destructuring its mandatory to specify the property name as it is 

//NOTE -> use square brackets while array destructuring and curly braces while object destructuring.

//changing names of properties while object destructuring:
const coords = {
    lat: 100,
    long: 100
};
let {lat: latitude, long: longitude} = coords;
console.log(latitude); //coords.lat
console.log(longitude); //coords.long
//console.log(lat);//now this will give error as variable not defined

//rest operstor while object destructuring
let {a1, b1, ...rest} = {
    a1: 100,
    b1: 200,
    c1: 200,
    d1: 300
}
//when we have used rest opertor while array destructuring it gave the rest of the values inside an array similarly in this case the rest of the values will come inside the object with name specified while destructuring.
//so in this case a1 and b1 are destructured as single values but c1 and d1 will come as key-value pairs inside object named rest.

//Function Destructuring:
const person = {
    name: "Manas",
    age: 21,
    college: "GEU"
}
function printPersonInfo({name = "Un-Named", age = 18, college = "No College"}/*we have given default values to properties while destructuring them*/){
    console.log(name);
    console.log(age);
    console.log(college);
}
printPersonInfo(person);
//here in the above example we can see that we passed the person object in the function and we destructured the person object in function arguement which gave us the ease while accessing the properties inside the object.

const menu = {
    title: "My title",
    items: ["item1", "item2"]
};
function showMenu({
    title,
    width: w = 100,
    height: h = 200,
    //these width and height are not present in the object but here we destructured them also so thats why they will be undefined at first but we have provided default values to them as well as renamed them to w and h.
    items: [item1, item2]//this is the shorthand for:
    //const {items} = menu;
    //const [item1, item2] = items
}){
    console.log(item1);
    console.log(item2);
}
showMenu(menu); 

//nested destructuring
const people = [
    { Fname: "Manas", stuAge: 21 },
    { Fname: "Arjun", stuAge: 25 },
    { Fname: "Isha", stuAge: 22 },
    { Fname: "Riya", stuAge: 28 },
    { Fname: "Karan", stuAge: 24 }
  ];

const [ , {Fname, stuAge}] = people;
// here first array got destructured into individual objects that were inside it and then we skipped 0, 2, 3 and 4rth index objects and we destructured 1st index object and take out Fname and stuAge property from inside.

//Destructuring Mixture
const data = {
    user: {
      id: 123,
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
      address: {
        city: "New York",
        country: "USA",
      },
      hobbies: ["Reading", "Painting", "Cooking"],
      scores: {
        math: 95,
        science: 88,
        history: 75,
      },
    },
    products: [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Phone", price: 800 },
      { id: 3, name: "Tablet", price: 500 },
    ],
    settings: {
      darkMode: true,
      notifications: {
        email: true,
        sms: false,
        push: true,
      },
      language: "English",
    },
  };

const {
    //destructuring user object
    user: {
        name: firstName,
        age: userAge,
        id,
        email,
        //further dest. address object
        address: {
            city,
            country
        },
        //further dest. hobbies array
        hobbies: [hobby1, hobby2, hobby3],
        //fursther dest. scores object
        scores: {
            math,
            science,
            history
        }

    },
    //destructuring products array
    products: [
        //destructuring obj at 0th index.
        {
            name: prod1Name,
            id: id1,
            price: price1
        },
        //dest. obj at 1st index
        {
            name: prod2Name,
            id: id2,
            price: price2
        },
        //dest. obj at 2nd index
        {
            name: prod3Name,
            id: id3,
            price: price3
        }
    ],
    //dest. settings object
    settings: {
        darkMode,
        notifications,
        language
    }
} = data;

// Logging the extracted data using template literals
console.log(`Name: ${firstName}`);
console.log(`Age: ${userAge}`);
console.log(`Address: ${city}, ${country}`);
console.log(`Hobbies: ${hobby1}, ${hobby2}, ${hobby3}`);
console.log(`Math Score: ${math}`);
console.log(`Science Score: ${science}`);
console.log(`History Score: ${history}`);
console.log(`Product 1: ${prod1Name} - $${price1}`);
console.log(`Product 2: ${prod2Name} - $${price2}`);
console.log(`Product 3: ${prod3Name} - $${price3}`);
console.log(`Dark Mode: ${darkMode}`);
console.log(`Language: ${language}`);