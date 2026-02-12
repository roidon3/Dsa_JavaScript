                                       //Map in js
//  In JavaScript, a Map is a collection of key-value pairs where both keys and values can be of any data type. 
//  Unlike regular objects, Map allows any type of key (e.g., objects, functions, or primitive types). 
//  Here's an overview of how you can use a Map in JavaScript:

// Basic Operations on a Map
// Creating a Map:
// let map = new Map();

// Adding elements to the Map (set method):
// map.set('key1', 'value1');    // String key
// map.set(2, 'value2');         // Number key
// map.set(true, 'value3');      // Boolean key
// map.set({ a: 1 }, 'value4');  // Object key


// Accessing elements from the Map (get method):
// console.log(map.get('key1'));  // Output: 'value1'
// console.log(map.get(2));       // Output: 'value2'
// console.log(map.get(true));    // Output: 'value3'


// Checking if a key exists (has method):
// console.log(map.has('key1'));  // Output: true
// console.log(map.has('nonexistent'));  // Output: false


// Removing an element from the Map (delete method):
// map.delete('key1');  // Removes the key 'key1' and its value
// console.log(map.has('key1'));  // Output: false


// Getting the size of the Map:
// console.log(map.size);  // Output: 3 (after deletion, assuming you added 4 initially)


// Iterating over a Map:

// Iterating over keys and values
// for (let [key, value] of map) {
//     console.log(`${key} = ${value}`);
//   }

// Iterating over keys and values
// for (let [key, value] of map) {
//     console.log(`${key} = ${value}`);
//   }

// Clearing the Map (clear method):
// map.clear();  // Removes all key-value pairs
// console.log(map.size);  // Output: 0

  
  

// Differences between Map and a regular object:
// Keys can be of any type in Map, whereas in an object, keys are implicitly converted to strings (except for symbols).
// Map maintains insertion order, whereas object keys do not guarantee order.
// Size is easily retrieved in Map using .size, while for objects, you need to calculate it manually.



                                                        //Set in js
// let set = new Set();
// let set = new Set([1, 2, 3, 4, 4]); // The duplicate 4 will be ignored
// console.log(set); // Output: Set { 1, 2, 3, 4 }
// set.add(5);
// set.add(1); // Duplicate, won't be added again
// set.add('Hello');
// set.add({ name: 'John' });
// console.log(set.has(5));  // Output: true
// console.log(set.has(10)); // Output: false
// set.delete(5);
// console.log(set.has(5));  // Output: false
// console.log(set.size);  // Output: number of unique values in the set
// set.clear();
// console.log(set.size);  // Output: 0
// for (let value of set) {
//     console.log(value);
//   }
//   for (let value of set) {
//     console.log(value);
//   }

  
//   Converting between Sets and Arrays
//   Convert Set to Array
// let arr = [...set];
// console.log(arr);  // Output: [1, 3]


// Convert Array to Set (to remove duplicates):
// let arr = [1, 2, 2, 3, 4, 4];
// let uniqueSet = new Set(arr);
// console.log(uniqueSet);  // Output: Set { 1, 2, 3, 4 }