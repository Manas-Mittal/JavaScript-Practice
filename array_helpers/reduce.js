// The "reduce" method executes a reducer function for array element.
// The "reduce" method returns a single value: the function's accumulated result.
// The "reduce" method does not execute the function for empty array elements.
// The "reduce" method does not change the original array.

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// ------------------------------------
// Example 1
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((p, c) => {
//   console.log(`Previous: ${p}`);
//   console.log(`Current: ${c}`);
//   return p + c;
//   // p value: 0
//   // c value: [numbers array]

//   // reduce function will run for every item in the array, basically this is what's gonna happen
//   // 0 + 1 => 1
//   // 1 + 2 => 3
//   // 3 + 3 => 6
//   // 6 + 4 => 10
//   // 10 + 5 => 15
// }, 0);

// console.log(sum);
// ------------------------------------

// ------------------------------------
// Example 2
const people = [
    {
      name: "HuXn WebDev",
      age: 18,
    },
    {
      name: "Alex Mead",
      age: 29,
    },
    {
      name: "Brain Griffin",
      age: 40,
    },
  ];
  
  // Ternary Operator
  const oldestAge = people.reduce((p, c) => (c.age > p ? c.age : p), 0);
  console.log(oldestAge);
  // ------------------------------------