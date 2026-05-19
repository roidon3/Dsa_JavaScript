const array = new Array(1,3,5,7,9);
const array1 =[2,4,6,8,10]

// let arr= array.length
// let arr = array.concat(array1)
// let arr=array.push(5)//returns length to see the org array check the org array
// let arr = array.pop()
// let arr = array.shift();// Removes the first element from an array and returns that element.
// let arr = array.unshift(4)//returns length`  Adds one or more elements to the beginning of an array.
// splice() – Adds, removes, or replaces elements in an array.

// The splice() method in JavaScript is used to add, remove, or replace elements in an array. 
// It modifies the original array and returns an array of the removed elements (if any)

// let arr = array.splice(1, 2); // Removes 2 elements starting from index 1, arr becomes [1, 4] returns removed ele
// let arr = array.splice(1, 0, 'a'); // Inserts 'a' at index 1, arr becomes [1, 'a', 4]
// slice() – Returns a shallow copy of a portion of an array without modifying the 
// original array.
// arr = array.slice(1, 3);
// let arr = array.indexOf(7)//Returns the first index at which a given element can be found in the array, or -1 if not found.
// let arr= array.includes(3)//Checks if an array includes a certain value, returning true or false.
// let arr= array.forEach(ele=>console.log(ele))
// map() – Creates a new array with the results of calling a provided function on every element in the calling array.
//filter() – Creates a new array with all elements that pass the test implemented by the provided function.
// let arr = array.filter(el => el % 2 !== 0);
// let arr= array.reduce((acc,el)=>acc+el,0)// Executes a reducer function on each element of the array, resulting in a single output value.
// find() – Returns the first element in the array that satisfies the provided testing function. Otherwise, returns undefined.
// let arr = array.find(el => el > 2); // found is 3
// findIndex() – Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, returns -1.
// let arr = array.join("-")// join() – Joins all elements of an array into a string.
// sort() – Sorts the elements of an array in place and returns the sorted array.
//reverse() – Reverses the order of the elements in an array in place.
//  let arr =array.every(ele=>ele >0)//every() – Tests whether all elements in the array pass the test implemented by the provided function.//ret boolean
//some() – Tests whether at least one element in the array passes the test implemented by the provided function.//ret boolean
// console.log(arr);
// console.log(array.indexOf(7))


// slice in js
let arr =[1,2,3,4,5,6,7]
let fruits = ["apple", "banana", "mango", "orange"];

let result = fruits.slice(1, 3);

console.log(result);  // ["banana", "mango"]
console.log(fruits); // original array unchanged

// array.slice(startIndex, endIndex)


// splice in js

// slice() vs splice() (INTERVIEW FAVORITE)
// Feature	slice()	splice()
// Modifies original array	❌ No	✅ Yes
// Returns value	New array	Removed elements
// Use case	Copy / extract	Add / remove
let a = [10, 20, 30];
let b = a.slice();
// console.log(a,b,"hhh");

// console.log(a === b); // false (new array)


// 🔁 map()
// ❓ Does it create a new array?

// ✅ YES

// ❓ What does it return?

// ➡️ A new array of the same length

// ❓ What is it used for?

// ➡️ Transform each element

// 🔍 filter()
// ❓ Does it create a new array?

// ✅ YES

// ❓ What does it return?

// ➡️ A new array with only matching elements

// ❓ What is it used for?

// ➡️ Select / remove items

// 🧮 reduce() (Most confusing but powerful 🔥)
// ❓ Does it create a new array?

// ❌ NO

// ❓ What does it return?

// ➡️ ONE single value (any type)