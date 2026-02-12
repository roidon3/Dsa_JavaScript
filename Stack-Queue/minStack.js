function MyStackOne() {
    this.q = [];
}
MyStackOne.prototype.push = function (val) {
    if (this.q.length === 0) {
        this.q.push([val, val])
    } else {
        let minVal = Math.min(val, this.q[this.q.length - 1][1])
        this.q.push([val, minVal])
    }
}
MyStackOne.prototype.pop = function () {
    if (this.q.length === 0) return "stack is empty";
    return this.q.pop()[0]; // return value only
}

MyStackOne.prototype.top = function () {
    return this.q[this.q.length - 1][0]
}
MyStackOne.prototype.minValue = function () {
    return this.q[this.q.length - 1][1]
}

const stackOne = new MyStackOne();
stackOne.push(10);
stackOne.push(20);
stackOne.push(30);
console.log(stackOne.q, "push");
console.log(stackOne.pop(), "pop operation");
console.log(stackOne.top(), "top operation");
console.log(stackOne.minValue(), "minVal operation");