// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation
//  and its resulting value. Promises provide a cleaner, more readable way to handle asynchronous code compared to callbacks,
//   and they help avoid "callback hell."

// Promise States
// A Promise has three states:

// Pending: The initial state; the operation hasn't completed yet.
// Fulfilled: The operation has completed successfully, and the promise has a resolved value.
// Rejected: The operation has failed, and the promise has a reason for the failure.





// let p3= new Promise((res,rej)=>{
//     res("rrrr")
// })
// p3.then((val)=>console.log(val))

// let p = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("hello p")

//     }, 1000);
// })

// let p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("hello p1")

//     }, 1000);
// })
//using .then

// p.then((value) => {
//     console.log(value)
//     p1.then((val) => {
//         console.log(val)
//     }).catch(err => { console.log("err") })
// }).catch(err => console.log(object))


//using await

// Function to handle both promises using async/await
// async function handlePromises() {
//     try {
//       // Wait for both promises to resolve
//       const result1 = await p
//       console.log(result1); // Logs: "Promise 1 resolved" after 2 seconds

//       const result2 = await p1
//       console.log(result2); // Logs: "Promise 2 resolved" after 1 more second
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   }

//   // Call the async function
//   handlePromises();




//Promise API
// What is Promise.all?
// Promise.all is a method in JavaScript that allows you to run multiple promises concurrently and wait until all of them are 
// resolved (or any one is rejected). It is a powerful way to handle asynchronous operations when you need all results to proceed.

// How it Works:
// Input: Promise.all takes an array of promises (or any iterable of promises).
// Execution: It runs all the promises concurrently.
// Output: Returns a single promise that:
// Resolves when all the promises in the array are resolved. The resolution value is an array of the resolved values,
//  in the same order as the input promises.
// Rejects if any of the promises reject. The rejection reason is the error of the first promise that rejects

// const promise1 = Promise.resolve(10);
// const promise2 = Promise.resolve(20);
// const promise3 = Promise.resolve(30);

// Promise.all([promise1, promise2, promise3])
//   .then(values => console.log(values)) // [10, 20, 30]
//   .catch(error => console.error(error));

// const promise1 = Promise.resolve(10);
// const promise2 = Promise.reject("Error in promise2");
// const promise3 = Promise.resolve(30);

// Promise.all([promise1, promise2, promise3])
//   .then(values => console.log(values))
//   .catch(error => console.error(error)); // "Error in promise2"

// What is Promise.allSettled?
// Promise.allSettled is a method in JavaScript that waits for all promises in an iterable to settle (either resolve or reject). 
// It differs from Promise.all because it doesn’t short-circuit if a promise rejects. Instead, it returns the outcome of all 
// promises (resolved and rejected) as an array of objects.


// How it Works:
// Input: An array of promises (or any iterable of promises).
// Execution: All promises run concurrently.
// Output: Returns a single promise that resolves with an array of objects, each describing the outcome of a promise:
// For resolved promises: { status: "fulfilled", value: <resolved value> }
// For rejected promises: { status: "rejected", reason: <error reason> }

// const promise1 = Promise.resolve(10);
// const promise2 = Promise.resolve(20);
// const promise3 = Promise.resolve(30);

// Promise.allSettled([promise1, promise2, promise3])
//   .then(results => console.log(results));

// [
//     { status: "fulfilled", value: 10 },
//     { status: "fulfilled", value: 20 },
//     { status: "fulfilled", value: 30 }
//   ]
  
// const promise1 = Promise.resolve(10);
// const promise2 = Promise.reject("Error in promise2");
// const promise3 = Promise.resolve(30);

// Promise.allSettled([promise1, promise2, promise3])
//   .then(results => console.log(results));

// [
//     { status: "fulfilled", value: 10 },
//     { status: "rejected", reason: "Error in promise2" },
//     { status: "fulfilled", value: 30 }
//   ]
  
// Key Points:
// No Short-Circuiting: Unlike Promise.all, it doesn’t stop if a promise rejects. It waits for all promises to settle.
// Detailed Results: Each promise’s outcome is captured in a structured object.
// Useful for Aggregation: Ideal when you need the results of all promises, regardless of whether they succeed or fail.


// const promise1 = Promise.resolve(10);
// const promise2 = 20; // Not a promise
// const promise3 = new Promise((resolve, reject) => setTimeout(reject, 1000, "Timeout Error"));

// Promise.allSettled([promise1, promise2, promise3])
//   .then(results => console.log(results));

// [
//     { status: "fulfilled", value: 10 },
//     { status: "fulfilled", value: 20 },
//     { status: "rejected", reason: "Timeout Error" }
//   ]

// When to Use Promise.allSettled:
// When you want to wait for all promises to complete, even if some fail.
// When you need to handle both success and failure cases for each promise individually.
// When none of the promises should block the others.

// Comparison with Promise.all:
// Feature	                               Promise.all	                                                             Promise.allSettled
// Behavior on Rejection	Rejects immediately if any promise rejects.                             	Resolves when all promises settle.
// Result	                Array of resolved values (if no rejections).                      	Array of objects (status & value/reason).
// Use Case               	Use when all promises must succeed.                         	Use when you need all results, regardless.
  


// What is Promise.race?
// Promise.race is a method in JavaScript that takes an iterable of promises and returns a single promise that resolves or rejects
//  as soon as the first promise in the iterable settles (resolves or rejects). The result of the first settled promise becomes the
//   result of the Promise.race.

// How it Works:
// Input: An array of promises (or any iterable of promises).
// Execution: All promises run concurrently.
// Output: Returns a single promise that settles with the result (resolve or reject) of the first settled promise

// const promise1 = new Promise(resolve => setTimeout(resolve, 500, "First"));
// const promise2 = new Promise(resolve => setTimeout(resolve, 1000, "Second"));

// Promise.race([promise1, promise2])
//   .then(result => console.log(result)) // "First"
//   .catch(error => console.error(error));

// const promise1 = new Promise((_, reject) => setTimeout(reject, 500, "Error in First"));
// const promise2 = new Promise(resolve => setTimeout(resolve, 1000, "Second"));

// Promise.race([promise1, promise2])
//   .then(result => console.log(result))
//   .catch(error => console.error(error)); // "Error in First"


// What is Promise.any?
// Promise.any is a method in JavaScript that takes an iterable of promises and returns a single promise 
// that resolves as soon as any one of the promises resolves. If none of the promises resolve (i.e., all are rejected), 
// Promise.any rejects with an AggregateError that contains all the rejection reasons.

// Key Behavior:
// Resolves with the value of the first resolved promise.
// If all promises reject, the returned promise itself rejects with an AggregateError.

// const promise1 = new Promise((resolve, reject) => setTimeout(reject, 100, "Error in Promise 1"));
// const promise2 = new Promise(resolve => setTimeout(resolve, 200, "Promise 2 resolved"));
// const promise3 = new Promise(resolve => setTimeout(resolve, 300, "Promise 3 resolved"));

// Promise.any([promise1, promise2, promise3])
//   .then(result => console.log(result)) // "Promise 2 resolved"
//   .catch(error => console.error(error));


// const promise1 = Promise.reject("Error in Promise 1");
// const promise2 = Promise.reject("Error in Promise 2");

// Promise.any([promise1, promise2])
//   .then(result => console.log(result))
//   .catch(error => console.error(error)); // AggregateError: All promises were rejected

// Promise.any is a great choice when you're focused on success-first scenarios and don't care if some promises fail, 
// as long as at least one succeeds!


// 🧠 Why Do We Need Promises?
// Because JavaScript is single-threaded and uses the event loop.

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data received");
//         }, 2000);
//     });
// }

// fetchData()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// console.log("Hello");


// const p = new Promise((resolve, reject) => {
//   resolve("Success");
//   reject("Fail");
// });

// p.then(console.log).catch(console.log);
//Success
// 👉 Once resolved → promise is settled
// Reject is ignored.

// async function test() {
//   console.log("1");     // runs immediately when test() is called
//   await Promise.resolve();  // pauses here (microtask)
//   console.log("2");
// }

// console.log("3");  // 1️⃣
// test();            // 2️⃣ prints "1"
// console.log("4");  // 3️⃣
// then microtask runs → prints "2"
