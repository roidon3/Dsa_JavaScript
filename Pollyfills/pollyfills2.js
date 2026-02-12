Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;

  context.fn = this;   // attach function
  const result = context.fn(...args);
  delete context.fn;   // cleanup

  return result;
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
