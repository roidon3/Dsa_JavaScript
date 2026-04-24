// function sum(a=5,b=7){
//     console.log(a+b);
// }
// sum(null,20)//op is 20 default value is only considered when we pass undefined or if we dont pass any value

// let timer=setTimeout(()=>{console.log("hello world")},0)
// clearTimeout(timer);
//wont log anything exaplin event loop this will be stroed in task queue

// console.log(NaN===NaN);//false
// console.log(NaN==NaN);//false
// console.log(Number.isNaN(NaN));//true

// let str="roidon"
// str.length=0
// console.log(str.length);//6 //strings sre immutable in js we cannot modefiy indivual char or the properties
// console.log([1,2]+![]);//1,2false
// console.log([1]+[2]);//12// string12
//whenver we use add in arr js will use .toString() converts arr to string

// let obj={
//     name:"roidon",
//     printName:function(){
//         return this.name
//     }
// }
// console.log(obj.printName());//roidon

// let obj={
//     name:"roidon",
//     printName:()=>{
//         return this.name
//     }
// }
// console.log(obj.printName());//undefined

// function data(){
//     let a=b=5
// }
// data()
// console.log(b);//op is 5 since 5 is not assigned to var,let or coant its global var
// console.log(a);//ref err
//js is dynamically typed language 

// let newList =[1].push(2)//this returns length of new array thats 2 in next line we cannot use push method on numeric value
// console.log(newList.push(3));//TypeError: newList.push is not a function

//delete opertor doesnt have any effect on variable declared with var,let ,const

// x++
// console.log(x);//NaN //var is hoisted with undefiend undefined++ is NaN
// var x=21

// const x=[]
// x[4]=1;
// x.forEach((i)=>{
    // console.log(i);//only once 1 will be printed ,foreach will only loop through the values which are defined 0-3 index is empty
// })

// const x={name:"sai"}
// const arr=["name"]
// x[arr]="krishna";
// console.log(x.name);//krishna

// new Promise(()=>{
//     console.log("d");
// })
// console.log("s");//d s //since we are not using resove or reject it'll run syncronsly

// var x=1;
// console.log(x);
// function x(){
//     console.log("2");
// }
// x()//1 and type error beacuse of hoisting beacuse of hoisting fun dec will get more priority then var dec
// //var dec will orride the fun dec here i is not a function its a numeric value

// var empId="abc";
// function foo(){
//     empId="123";
//     return;
//     function empId(){}
// }
// foo()
// console.log(empId)//abc beacuse local value will be shadowed by global value

// console.log(typeof typeof 1);//string typeof 1 is number typeof "" is string

