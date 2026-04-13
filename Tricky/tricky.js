// let x = "5";
// let y = 3;
// console.log(x + y);//53
// Explanation: Since x is a string and the + operator is used, JavaScript performs string concatenation. 
// The number 3 is converted to a string and concatenated with "5", resulting in "53".



// let a = "6";
// let b = 2;
// console.log((+a) - b);
// Output: 4

// Explanation: The unary + operator converts the string "6" to the number 6. Then, 6 - 2 is evaluated, resulting in 4.


// let p = 4;
// let q = "7";
// console.log(p * q);
// Output: 28

// Explanation: The * operator performs numeric multiplication.
//  JavaScript converts the string "7" to the number 7 and multiplies it by 4, resulting in 28.



// let m = "9";
// let n = "2";
// console.log(m / n);
// Output: 4.5

// Explanation: The / operator performs numeric division. JavaScript converts both strings "9" and "2" 
// to numbers and evaluates 9 / 2, resulting in 4.5.


// let num = 10;
// let str = "20";
// console.log(num + Number(str) + 5);
// Output: 35

// Explanation: Number(str) converts the string "20" to the number 20. Then the expression becomes 10 + 20 + 5, which equals 35.


// let c = "10px";
// let d = 5;
// console.log(parseInt(c) + d);
// Output: 15

// Explanation: parseInt(c) extracts the numeric part from the string "10px",
//  which results in 10. Then, 10 + 5 is evaluated, giving 15.




// let x = "2";
// let y = "3";
// console.log(x - y);
// Output: -1

// Explanation: The - operator forces numeric subtraction, so JavaScript converts both "2" and "3" to numbers.
//  Then 2 - 3 is evaluated, resulting in -1.



// console.log(2 * null)//0
// null is treated as 0 in numeric contexts in JavaScript.
// When you multiply 2 by null, it's effectively 2 * 0, which equals 0.
// So the output of console.log(2 * null) is 0.



// 2. What is the output of console.log(5 - "3")?
// Answer:

// Copy code
// 2
// Explanation: The - operator performs numeric subtraction. The string "3" is coerced into the number 3, resulting in 5 - 3 = 2.



// . What is the output of console.log("2" * "3")?
// Explanation: Both strings "2" and "3" are coerced into numbers, so the multiplication occurs as 2 * 3 = 6.


// What is the output of console.log(0 == false)?
// Answer:

// true
// Explanation: The == operator performs type coercion. 0 is considered equal to false in this context.


// 5. What is the output of console.log(undefined == null)?
// Answer:
// true
// Explanation: In JavaScript, undefined and null are loosely equal (==), so the output is true.

// 6. What is the output of console.log([] == false)?
// Answer:

// true
// Explanation: An empty array is coerced to an empty string (""), which is then coerced to 0 in a numeric context. 
// Since 0 is loosely equal to false, the output is true.

// 7. What is the output of console.log([] + {})?
// Answer:

// "[object Object]"
// Explanation: An empty array is coerced into an empty string (""), and an empty object is coerced into the string "[object Object]".
//  Thus, the result is "" + "[object Object]", which gives "[object Object]".

// 8. What is the output of console.log("5" - 2)?
// Answer:

// Copy code
// 3
// Explanation: The - operator triggers numeric conversion, converting "5" to the number 5, resulting in 5 - 2 = 3.

// 9. What is the output of console.log(2 == "2")?
// Answer:
// true
// Explanation: The == operator performs type coercion, so the string "2" is converted to the number 2, resulting in 2 == 2.

// 10. What is the output of console.log(null + 1)?
// Answer:

// Copy code
// 1
// Explanation: null is coerced to 0 in numeric contexts, so the operation is 0 + 1, resulting in 1

// typeof null
// javascript
// Copy code
// typeof null; // "object"
// Explanation:

// null is a special value that represents the intentional absence of any object value.
// However, due to a historical bug in JavaScript, typeof null returns "object" instead of "null". 
// This behavior dates back to the early implementation of JavaScript and cannot be changed due to backward compatibility.
// 2. typeof undefined
// javascript
// Copy code
// typeof undefined; // "undefined"
// Explanation:

// undefined is the value assigned to variables that have been declared but not yet assigned a value, 
// or when a function doesn't return anything.
// typeof undefined correctly returns "undefined


// The difference between ?? (nullish coalescing operator) and || (logical OR operator) lies in the values they consider 
// "falsy" or "invalid" when determining which operand to return.

// 1. let a = x ?? y; (Nullish Coalescing Operator)
// Purpose: The ?? operator returns the right-hand operand if the left-hand operand is either null or undefined. Otherwise,
//  it returns the left-hand operand.
// Works with: Only null and undefined.
// Example:

// javascript
// Copy code
// let x = null;
// let y = "default";
// let a = x ?? y;
// console.log(a); // Output: "default" because x is null

// x = 0;
// a = x ?? y;
// console.log(a); // Output: 0 because x is not null or undefined
// 2. let a = x || y; (Logical OR Operator)
// Purpose: The || operator returns the right-hand operand if the left-hand operand is "falsy." Otherwise, it returns the left-hand operand.
// Works with: All "falsy" values, which include:
// false
// 0
// "" (empty string)
// null
// undefined
// NaN
// Example:

// javascript
// Copy code
// let x = 0;
// let y = "default";
// let a = x || y;
// console.log(a); // Output: "default" because x is 0, which is falsy

// x = "Hello";
// a = x || y;
// console.log(a); // Output: "Hello" because x is truthy
// Key Differences:
// ?? checks only for null or undefined values.
// || checks for any "falsy" value, such as 0, false, "", NaN, null, or undefined.
// Example Comparing Both:
// javascript
// Copy code
// let x = 0;
// let y = "default";

// let a1 = x ?? y; // 0 because x is neither null nor undefined
// let a2 = x || y; // "default" because x is a falsy value (0)

// console.log(a1); // Output: 0
// console.log(a2); // Output: "default"
// Summary:
// Use ?? when you want to return a default value only if the variable is null or undefined.
// Use || when you want to return a default value if the variable is any "falsy" value (such as 0, false, null, undefined, NaN, or "").





// You said:
// for (var i = 0; i <= 5; i++) {
 
//     setTimeout(() => {
 
//         console.log(i); // Output
 
//     }, 1000);
 
// }
// ChatGPT said:
// ChatGPT
// In the given code:

// javascript
// Copy code
// for (var i = 0; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i); // Output
//     }, 1000);
// }
// Explanation:
// The for loop runs 6 times (i goes from 0 to 5).
// var is function-scoped, so the variable i is not block-scoped. This means that the same i is referenced across all iterations.
// When setTimeout is called, it schedules the callback function to be executed after 1000 milliseconds (1 second).
//  By the time this callback is actually executed, the loop has already completed, and i will have a value of 6 (the value after the loop terminates).
// Thus, all the console.log(i) statements will output 6, because i has already reached 6 when the callbacks run.
// Output:
// Copy code
// 6
// 6
// 6
// 6
// 6
// 6
// Solution (using let for block-scoping):
// If you want the correct value of i during each iteration, 
// you can change var to let, as let is block-scoped and a new i will be created for each iteration:

// javascript
// Copy code
// for (let i = 0; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i); // Output
//     }, 1000);
// }
// Output with let:
// Copy code
// 0
// 1
// 2
// 3
// 4
// 5
// Now, each setTimeout callback captures the correct value of i at the time of its iteration.

// console.log(null === undefined)//false
// === is the strict equality operator, which checks for both value and type equality.
// null and undefined are different types: null is an object, and undefined is a primitive type.
// Therefore, they are not strictly equal, and the result is false.

// console.log(null == undefined)//true

// null == undefined is true because they are considered equal in loose comparison (type coercion).
// null == 0 is false.
// undefined == 0 is false.


// 1. What is the result of console.log(0 == false);?
// Answer: true
// Explanation: In loose equality (==), JavaScript converts false to 0 before comparison. Since 0 == 0, the result is true.
// 2. What is the result of console.log('' === false);?
// Answer: false
// Explanation: The strict equality operator (===) checks both type and value. An empty string '' is a string, 
// and false is a boolean, so they are not strictly equal.
// 3. What is the result of console.log(1 == '1');?
// Answer: true
// Explanation: The loose equality operator (==) converts the string '1' to the number 1, and since 1 == 1, the result is true.
// 4. What is the result of console.log([] == 0);?
// Answer: true
// Explanation: JavaScript coerces the empty array [] to a primitive value when using loose equality (==). 
// An empty array is converted to an empty string '', which is then converted to 0 when compared to a number. So 0 == 0 is true.
// 5. What is the result of console.log(null === 0);?
// Answer: false
// Explanation: The strict equality operator (===) does not perform type coercion, so it directly compares null and 0. 
// Since null is not the same as 0, the result is false.
// 6. What is the result of console.log(undefined == false);?
// Answer: false
// Explanation: In loose equality (==), undefined is only equal to null and not to any other values like false, so the result is false.
// 7. What is the result of console.log('0' == false);?
// Answer: true
// Explanation: In loose equality (==), false is converted to 0, and '0' is also converted to the number 0. Since 0 == 0, the result is true.
// 8. What is the result of console.log(NaN == NaN);?
// Answer: false
// Explanation: In JavaScript, NaN is not equal to anything, including itself. Therefore, NaN == NaN is false.
// 9. What is the result of console.log([] == ![]);?
// Answer: true
// Explanation:
// ![] evaluates to false (because [] is truthy, so ![] is false).
// [] == false then undergoes type coercion. The empty array is coerced into an empty string '',
//  and false is coerced into 0. So it becomes '' == 0, which is true.
// 10. What is the result of console.log(true === 1);?
// Answer: false
// Explanation: The strict equality operator (===) checks both type and value. true is a boolean, and 1 is a number,
//  so they are not strictly equal.
//const str = "abc" + + "def";  //abcNAN



// 1. What is the result of the following code?
// javascript
// Copy code
// var arr1 = [1, 2, 3];
// var arr2 = arr1;
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);
// Answer:
// arr1: [1, 2, 3, 4]
// arr2: [1, 2, 3, 4]
// Explanation: arr2 is assigned a reference to arr1, meaning both variables point to the same array in memory. 
// Modifying arr2 also modifies arr1.


// 2. What is the result of the following code?
// javascript
// Copy code
// var obj1 = {a: 1, b: 2};
// var obj2 = {...obj1};
// obj2.c = 3;
// console.log(obj1);
// console.log(obj2);
// Answer:
// obj1: {a: 1, b: 2}
// obj2: {a: 1, b: 2, c: 3}
// Explanation: The spread operator creates a shallow copy of obj1. Modifications to obj2 do not affect obj1 because
//  they are independent objects.


// 3. What is the result of the following code?
// javascript
// Copy code
// var arr1 = [1, 2, 3];
// var arr2 = [...arr1];
// arr2[0] = 10;
// console.log(arr1);
// console.log(arr2);
// Answer:
// arr1: [1, 2, 3]
// arr2: [10, 2, 3]
// Explanation: The spread operator creates a shallow copy of arr1, so changes to arr2 do not affect arr1.


// 4. What is the result of the following code?
// javascript
// Copy code
// var arr1 = [1, 2, {name: 'John'}];
// var arr2 = [...arr1];
// arr2[2].name = 'Jane';
// console.log(arr1);
// console.log(arr2);
// Answer:
// arr1: [1, 2, {name: 'Jane'}]
// arr2: [1, 2, {name: 'Jane'}]
// Explanation: The spread operator creates a shallow copy, meaning the object inside the array is still referenced in 
// both arr1 and arr2. Changing the name property affects both arrays.


// 5. What is the result of the following code?
// javascript
// Copy code
// var arr1 = [1, 2, 3];
// var arr2 = arr1.slice();
// arr2.pop();
// console.log(arr1);
// console.log(arr2);
// Answer:
// arr1: [1, 2, 3]
// arr2: [1, 2]
// Explanation: The slice() method creates a shallow copy of arr1. Modifications to arr2 do not affect arr1.


// 6. What is the result of the following code?
// javascript
// Copy code
// var obj1 = {a: 1, b: {c: 2}};
// var obj2 = {...obj1};
// obj2.b.c = 3;
// console.log(obj1);
// console.log(obj2);
// Answer:
// obj1: {a: 1, b: {c: 3}}
// obj2: {a: 1, b: {c: 3}}
// Explanation: The spread operator creates a shallow copy of obj1, but the nested object b is still shared by reference.
//  Modifying b.c in obj2 will also modify it in obj1.


// 7. What is the result of the following code?
// javascript
// Copy code
// var arr1 = [1, 2, 3];
// var arr2 = arr1.concat(4, 5);

// console.log(arr1);
// console.log(arr2);
// Answer:
// arr1: [1, 2, 3]
// arr2: [1, 2, 3, 4, 5]
// Explanation: The concat() method returns a new array without modifying the original arr1. So, 
// arr1 remains unchanged, and arr2 is the new array with additional elements.


// 8. What is the result of the following code?
// javascript
// Copy code
// var arr1 = [[1], [2], [3]];
// var arr2 = [...arr1];
// arr2[0].push(4);
// console.log(arr1);
// console.log(arr2);
// Answer:
// arr1: [[1, 4], [2], [3]]
// arr2: [[1, 4], [2], [3]]
// Explanation: The spread operator creates a shallow copy, but the inner arrays are still shared by reference.
//  Modifying arr2[0] affects arr1[0] as well.


// 9. What is the result of the following code?
// javascript
// Copy code
// var arr1 = [1, 2, 3];
// var arr2 = [...arr1, ...[4, 5, 6]];
// console.log(arr2);
// Answer:
// arr2: [1, 2, 3, 4, 5, 6]


// Explanation: The spread operator merges both arrays into a new array, resulting in [1, 2, 3, 4, 5, 6].
// 10. What is the result of the following code?
// javascript
// Copy code
// var arr = [1, 2, 3];
// var [a, ...rest] = arr;
// console.log(a);
// console.log(rest);
// Answer:
// a: 1
// rest: [2, 3]
// Explanation: Destructuring assignment extracts the first element 1 into a and the remaining elements into rest, which becomes [2, 3].



// var i;
// for(i=0;i<=10;i++){
// }
// console.log(i)//11

// var a;
// a = 20;
// console.log(a) 

// var i;
// let a;
// for (i = 0; i <= 10; i++) {
//     a = i;
// }

// console.log(i, a)//i=11,a=10

// setTimeout(() => { console.log(1) }, 1000)
// console.log(3)
// setTimeout(() => { console.log(2) }, 1)

//'https://dummyjson.com/products'

// for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000 * i);
// }



// console.log(1);
// setTimeout(() => console.log(2));
// Promise.resolve().then(() => console.log(3));
// Promise.resolve().then(() => setTimeout(() => console.log(4)));
// Promise.resolve().then(() => console.log(5));
// setTimeout(() => console.log(6));
// console.log(7);

// function sayHi() {
//     console.log(name); //undefined
//     console.log(age);//error
//     var name = 'Lydia';
//     let age = 21;
//   }
   
//   sayHi();


  // Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// function number(){
//     var k ;
//             for(let i=0;i<=10;i++){
//                 setTimeout(()=>{
//         console.log(i)
//     },1000 * i)
//         }

// }
// number()

// What happens when you use delete on an array element?
// const arr = [1, 2, 3, 4];
// delete arr[1]; 
// console.log(arr); // [1, empty, 3, 4] (index 1 is `undefined`, not removed)

// How do you empty an array in JavaScript?
// let arr = [1, 2, 3];
// arr.length = 0; 
// console.log(arr); // []

// 1. What happens when you access an out-of-bounds index in an array?
// const arr = [10, 20, 30];
// console.log(arr[5]); // undefined


// How can you make an array immutable?
// const arr = Object.freeze([1, 2, 3]);
// arr[0] = 10; 
// console.log(arr); // [1, 2, 3] (unchanged)


// console.log([] + []); // ""

// 7. How do you remove falsy values from an array?
// const arr = [0, 1, false, 2, "", 3, null, undefined, NaN];
// const cleanArr = arr.filter(Boolean);
// console.log(cleanArr); // [1, 2, 3]
//else we can do const result = arr.filter(item => item);
//waht is u want 0 const result = arr.filter(item => item !== false && item != null && item !== '');


// console.log([1, 2, 3] + [4, 5, 6]); // "1,2,34,5,6"

//console.log(["a", "b", "c"].reverse().push("d"));  //output 4

// 13. How do you convert an array to an object?
// const arr = ["a", "b", "c"];
// const obj = Object.assign({}, arr);
// console.log(obj); // { "0": "a", "1": "b", "2": "c" }

// console.log([] + []);
// [].toString() results in an empty string ("").
// So, "" + "" results in "" (an empty string).

// console.log([] + ""); //same as above ""
// console.log({} + {});[object Object][object Object]

// console.log({} + []);
// Answer: "[object Object]"

// console.log(true + true);
// Answer: 2


// console.log([] - 1);
// Answer: -1

// console.log({} - 1);
// Answer: NaN
// Explanation:
// {} is treated as an object.
// Objects can't be directly converted to numbers, so subtraction results in NaN.


// console.log([] + 1);
// Answer: "1"
// Explanation:
// [] converts to "" (empty string).
// "" + 1 results in "1" (string concatenation).


// console.log([] == ![]);
// Answer: true
// Explanation:
// ![] → false (since [] is truthy, ![] becomes false).
// [] == false → true because:
// [] is converted to an empty string ("").
// "" == false is true because "" is falsy.


// console.log([] == 0);
// Answer: true
// Explanation:
// [] is converted to an empty string ("").
// "" is converted to 0.
// 0 == 0 is true.

// let obj1 = { name: "Alice" };
// let obj2 = obj1; // obj2 now references the same object as obj1

// obj2.name = "Bob"; // Modifying obj2 also affects obj1

// console.log(obj1.name); // "Bob"
// console.log(obj2.name); // "Bob"




// let obj1 = { name: "Alice" };
// let obj2 = obj1; // obj2 refers to obj1

// obj2 = { name: "Bob" }; // obj2 now points to a new object

// console.log(obj1.name); // "Alice" (unchanged)
// console.log(obj2.name); // "Bob"


// let obj1 = { name: "Alice" };
// let obj2 = Object.assign({}, obj1); // Creates a shallow copy

// obj2.name = "Bob"; // Modifying obj2 does not affect obj1

// console.log(obj1.name); // "Alice"
// console.log(obj2.name); // "Bob"


// let obj1 = { name: "Alice", details: { age: 25 } };
// let obj2 = JSON.parse(JSON.stringify(obj1)); // Deep copy

// obj2.details.age = 30; // Modifying obj2 does not affect obj1

// console.log(obj1.details.age); // 25
// console.log(obj2.details.age); // 30




// Object.freeze() in JavaScript
// Object.freeze(obj) prevents modifications to an object. This means:

// You cannot add, delete, or change properties.
// The object becomes immutable, but only at the top level (shallow freeze).


// const obj = { name: "Alice", age: 25 };

// Object.freeze(obj);

// obj.age = 30; // ❌ Does nothing (silent fail in non-strict mode)
// delete obj.name; // ❌ Cannot delete property
// obj.city = "New York"; // ❌ Cannot add new properties

// console.log(obj); // { name: "Alice", age: 25 }


// const obj = { name: "Alice", age: 25 };

// Object.freeze(obj);

// obj.age = 30; // ❌ Does nothing (silent fail in non-strict mode)
// delete obj.name; // ❌ Cannot delete property
// obj.city = "New York"; // ❌ Cannot add new properties

// console.log(obj); // { name: "Alice", age: 25 }

// function deepFreeze(obj){
//     let keys=Object.keys(obj);
//     for(let key of keys){
//         if(typeof obj[key]==="object" && obj[key]!==null){
//             deepFreeze(obj[key])
//         }
//     }
//     return Object.freeze(obj)
    
// }

// const obj = { name: "Alice", details: { age: 25 } };

// deepFreeze(obj);

// obj.details.age = 30; // ❌ Now this won't work

// console.log(obj.details.age); // 25


// Object.seal(obj) (Prevents Adding/Removing, But Allows Modifying)
// Prevents adding new properties.
// Prevents deleting existing properties.
// ✅ Allows modifying existing properties.





async function getData() {
    return await Promise.resolve('I made it!');
  }
   
  const data = getData();
//   data.then(res => console.log(res))
//   console.log(data);

// The reason it's not printing "I made it!" is because the getData() function is asynchronous and returns a Promise,
//  but you're not awaiting the result when you call the function.
  
  
  
  
// console.log([3,2,3,4,3].find(i => i == 3));//3 or undefined if not found 3
// console.log([3,2,3,4,3].filter(i => i == 3)); //[3,3,3] else []
// let f = "8";
// let a = 1;
// console.log((+f)+a+1);

var a = [1,2,3,4,5]
var b = [...a];
b.push(6)
console.log(b)
console.log(a)

// const arr = ['a', 'b', 'a', 'a', 'c', 'c'];
// console.log(count);  {a: 3, b: 1, c: 2}


// function repeat(){
//     const arr = ['a', 'b', 'a', 'a', 'c', 'c'];
//     let store={}
//     for(let i of arr){
//         store[i]= (store[i] || 0 )+ 1
//     }
//     return store

// }

// console.log(repeat());


// console.log("Start");
// setTimeout(() => {
//   console.log("Inside setTimeout");
// }, 0);
 
// Promise.resolve().then(() => {
//   console.log("Inside Promise");
// });

// import { useEffect, useState } from "react";
 
// export default function App() {

//   const [count, setCount] = useState(0);

//   useEffect(() => {

//     setCount(count+1)
//     setCount(count+1)

//     setCount(count + 1);

//   }, []);

//   return (<div className="App">
// <h1>{count}</h1></div>)

// }


//https://www.youtube.com/watch?v=s53pTpFw-94
 