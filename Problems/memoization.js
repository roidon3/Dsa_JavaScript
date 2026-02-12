//memoization 
let cache = {};
function memoization(n) {

    if (n in cache) {

        return `memoized result ${cache[n]}`
    }
    let result = n * n;
    cache[n] = result;
    return ` without memoized result ${result}`
}
// console.log(memoization(2));
// console.log(memoization(2));
// console.log(memoization(3));
// console.log(memoization(4));
// console.log(memoization(4));


//memoization using closure
function memoization() {
  let cache = {}; // 🔒 private (closure)

  return function (n) {
    if (n in cache) {
      return `memoized result ${cache[n]}`;
    }

    let result = n * n;
    cache[n] = result;
    return `without memoized result ${result}`;
  };
}

const square = memoization();

// console.log(square(2)); // without memoized result 4
// console.log(square(2)); // memoized result 4
// console.log(square(3)); // without memoized result 9
// console.log(square(4)); // without memoized result 16
// console.log(square(4)); // memoized result 16





                                    //closure
function closure1() {
    let count = 0
   return function inner() {
        count = count + 1
        return count
    }
    // return inner
}
const fn1 = closure1()
console.log(fn1());
console.log(fn1());
console.log(fn1());


// 🔐 Real-World Use Cases
// 1️⃣ Data Privacy (Encapsulation)

function counter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log(count);
    },
    decrement() {
      count--;
      console.log(count);
    }
  };
}

const c = counter();
// c.increment(); // 1
// c.increment(); // 2
// c.decrement(); // 1


//2️⃣ setTimeout Example (Very Common)
function timer() {
  let msg = "Time up!";

  setTimeout(function () {
    // console.log(msg);
  }, 2000);
}

timer();


// ❌ Common Mistake (var + closure)
for (var i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1000);
}
// Output: 4 4 4

// ✅ Fix using let
for (let i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1000);
}
// Output: 1 2 3


// 👉 let creates a new block scope for each iteration
// 🧠 Why Closures Are Important
// Used in React hooks
// Used in event handlers
// Used in debouncing / throttling
// Helps in data hiding
// Frequently asked in JS interviews
// Closure = function + its lexical scope