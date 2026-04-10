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
  context.fn = this;   // attach function to object   this refres to function greet
  context.fn(...args); // call it
  delete context.fn;   // clean up
};


Function.prototype.myApply = function (context, args = []) {
  context = context || globalThis;

  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;

  return result;
};


Function.prototype.myBind = function (context, ...args) {
  const originalFn = this;

  return function (...newArgs) {
    return originalFn.apply(context, [...args, ...newArgs]);
  };
};
