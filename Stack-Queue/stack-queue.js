let stack = [];
stack.push(10);
stack.push(11);
stack.push(12);
stack.push(13);
stack.push(14);
stack.push(15);

// console.log(stack);
stack.pop()
// console.log(stack);

// console.log(stack[stack.length-1])//to acess top element

// stack[3]//invalid stack operation in js it'll work
// console.log(stack[3]);
//in stack only 3 operations push,pop,and top(find last element using array.length - 1)



let q = []
q.push(10)//enqueue
q.shift()//dequeue remove the first element
//find peak/or front ele in queue
// console.log(q[0]);
q.pop()//invalid operation but it's valid in js

//implemnet stack using 2 queue

//this is an constructor function
function MyStack() {
    this.q1 = [];
    this.q2 = [];
}
MyStack.prototype.push = function (x) {
    this.q1.push(x)
}
MyStack.prototype.pop = function () {
    if (this.q1.length === 0) return "Stack is empty";
    let size = this.q1.length;
    for (let i = 0; i < size - 1; i++) {
        this.q2.push(this.q1.shift())
    }

    let popped = this.q1.shift();

    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    return popped;
};
//pop using while loop

// MyStack.prototype.pop = function () {
//     if (this.q1.length === 0) {
//         return "Stack is empty";
//     }

//     // move n-1 elements
//     while (this.q1.length > 1) {
//         this.q2.push(this.q1.shift());
//     }

//     // last element = stack top
//     let popped = this.q1.shift();

//     // swap queues
//     let temp = this.q1;
//     this.q1 = this.q2;
//     this.q2 = temp;

//     return popped;
// };


//top using for loop
MyStack.prototype.top = function () {
    if (this.q1.length === 0) return "Stack is empty";
    let size = this.q1.length;
    for (let i = 0; i < size - 1; i++) {
        this.q2.push(this.q1.shift())
    }

    let topEle = this.q1.shift();
    this.q2.push(topEle)

    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    return topEle;
}
MyStack.prototype.isEmpty = function () {
    return this.q1.length === 0

}

const newStack = new MyStack();

// newStack.push(10);
// newStack.push(20);
// newStack.push(30);

// console.log(newStack);

// console.log(newStack.pop(), "pop operation"); // 30
// console.log(newStack.top(),"top element"); // 20
// console.log(newStack.isEmpty()); // false


// When you write:  const newStack = new MyStack();

// JavaScript does 4 things automatically:

// 1️⃣ Creates a new empty object -{}
// 2️⃣ Sets this inside MyStack to that new object
// 3️⃣ Attaches properties to it
// this.q1 = [];
// this.q2 = [];
// 4️⃣ Returns the object automatically
// So after execution:
// newStack = {
//   q1: [],
//   q2: []
// }


//implment using one queue

function MyStackOne() {
    this.q = [];
}
MyStackOne.prototype.push = function (x) {
    this.q.push(x)
}
MyStackOne.prototype.pop = function () {
    if (this.q.length === 0) return "Stack is empty";
    let size = this.q.length;
    for (let i = 0; i < size - 1; i++) {
        this.q.push(this.q.shift())
    }

    let popped = this.q.shift();


    return popped;
}
MyStackOne.prototype.top = function () {
    if (this.q.length === 0) return "Stack is empty";
    let size = this.q.length;
    for (let i = 0; i < size - 1; i++) {
        this.q.push(this.q.shift())
    }

    let firstEle = this.q.shift();
    this.q.push(firstEle)


    return firstEle;

}
MyStackOne.prototype.isEmpty = function () {
    return this.q.length === 0

}

const stackOne = new MyStackOne();
stackOne.push(10);
stackOne.push(20);
stackOne.push(30);

// console.log(stackOne);

// console.log(stackOne.pop(), "pop operation"); // 30
// console.log(stackOne.top(), "top element"); // 20
// console.log(stackOne.pop(), "pop operation"); // 20
// console.log(stackOne.top(), "top element"); // 10
// console.log(stackOne.isEmpty()); // false


//implmenet queue using stack

function MyQuue() {
    this.s1 = [];
    this.s2 = [];
}
MyQuue.prototype.push = function (x) {
    return this.s1.push(x)

}
MyQuue.prototype.shift = function () {
    if (this.s2.length === 0) {
        while (this.s1.length) {
            this.s2.push(this.s1.pop())
        }
    }
    return this.s2.pop()

};
MyQuue.prototype.top = function () {
    if (this.s2.length === 0) {
        while (this.s1.length) {
            this.s2.push(this.s1.pop())
        }
    }
    return this.s2[this.s2.length - 1]

}
MyQuue.prototype.isEmpty = function () {
    return this.s1.length === 0 && this.s2.length === 0
}
const MyQuueone = new MyQuue();
MyQuueone.push(10);
MyQuueone.push(20);
MyQuueone.push(30);

console.log(MyQuueone, "before")
console.log(MyQuueone.shift(), "shift operation"); // 10
console.log(MyQuueone, "after")
console.log(MyQuueone.top(), "top element"); // 20
console.log(MyQuueone.shift(), "pop operation"); // 20
console.log(MyQuueone.top(), "top element"); // 10
console.log(MyQuueone.isEmpty()); // false