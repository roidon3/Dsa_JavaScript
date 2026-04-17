function greet() {
  console.log(this.name);
}

const user = { name: "Roidon" };

greet.call(user); // Roidon

// 🔹 How It Works (Step-by-step)
// this → refers to the function (greet)
// Add function to object → context.fn = this
// Call it → context.fn()
// Remove it → delete context.fn
// 👉 Trick: Functions behave differently when attached to objects → this changes

Function.prototype.myCall = function (context, ...args) {
  // context is the object you want to bind as this.
  // Step 1: handle null/undefined
  context = context || globalThis;
  // 👉 globalThis is a standard way to access the global object in JavaScript, no matter where your code is running.

  // Step 2: attach function to object
  const fnSymbol = Symbol();
//   You create a unique property key using Symbol.
// This avoids overwriting any existing property on context.
  context[fnSymbol] = this;

  // Step 3: call function
  const result = context[fnSymbol](...args);

  // Step 4: cleanup
  delete context[fnSymbol];

  return result;
};


Function.prototype.myApply = function (context, args) {
  context = context || globalThis;

  const fnSymbol = Symbol();
  context[fnSymbol] = this;

  const result = context[fnSymbol](...(args || []));

  delete context[fnSymbol];

  return result;
};


Function.prototype.myBind = function (context, ...args1) {
  const fn = this;

  return function (...args2) {
    return fn.apply(context, [...args1, ...args2]);
  };
};



Function.prototype.myCall=function(context,...args){
  context =contex||globalThis;
  const fnSymbol=Symbol();
  context[fnSymbol]=this;
  const result=context[fnSymbol](...args)
  delete context[fnSymbol]
  return result;
}