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

  const words = [
      "apple",
      "banana",
      "orange",
      "banana",
      "apple",
      "orange",
      "apple",
      "grape",
    ];

    const freqMap = words.reduce(function(frequencyMap, word){
        if(frequencyMap.hasOwnProperty(word) === true){
            frequencyMap[word] += 1;
        }
        else{
            frequencyMap[word] = 0;
        }
        return frequencyMap;
    }, {});

    console.log(freqMap);

    //NOTE -> reduce method takes few arguements that are:
    // array.reduce(callback(accumulator, currentValue, index, array), initialValue)

    //here accumulator is assigned with initialValue and the current value stores current element in the iteration.

    //after each iteration accumulator is returned to reduce method and reduce method updates the accumultor for the next callback function call after the last callback function call accumulator is returned to reduce method and from there as there is no next call to be made reduce method returns the final accumulator.

  // ------------------------------------