const curr_date = new Date();
console.log(curr_date);

//year, month, day, hours, minutes, seconds, milliseconds
const new_date = new Date(2025, 2, 24, 12, 30, 0, 0);
console.log(new_date);

//extracting year
const date = new Date();
console.log(date.getFullYear());

//extracting months
console.log(date.getMonth());

//extracting day
console.log(date.getDay());

//extracting time
console.log(date.getTime());

//extracting hours, minutes and seconds

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

//date to string
console.log(date.toDateString()); //Wed Feb 05 2025
console.log(date.toISOString());//2025-02-05T09:45:26.441Z
console.log(date.toLocaleString());//5/2/2025, 3:16:05 pm
console.log(date.toLocaleDateString()); //5/2/2025
console.log(date.toLocaleTimeString());//3:17:05 pm

