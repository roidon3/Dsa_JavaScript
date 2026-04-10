// console.log("5"-true);//4 whenever we compare bool and str js will convert str to numeric value so 5-1=4
// type of of following no exp just remember
// null-Object
// undefined -undefined
// NaN-Number
// typeof function(){}-function

// let x=123;
// let y=new Number(123);
// console.log(x===y);//strict equality checks for datatype here x datatype is no and y is number obj
// console.log(+true);//1
// console.log(+false);//0
// console.log(+"123");//123
// console.log(+Null);//0

// const[x,y=5]=[10];//this is dest syntax here first val is assigned to x
// console.log(x+y);//15 
// console.log(!!{});//true
// console.log(!![]);//true
// console.log(1 || 2 && 3);//1

// const arr=[1,2];
// for(var i=0;i<arr.length;i++){
//     setTimeout(()=>{console.log(i)},[1000])//2,2
// }
//whenever we declare a variable using var keyword js will move the var to top of file beacuse of hoisting 
// 👉 Why output is 2,2?
// Say:
// Because var is function-scoped and setTimeout runs later, so all callbacks share the same i, which becomes 2 after loop ends.

// let x=10;
// console.log(x++);//10 here post fix opetor return the val and then increment it 
//and also post pix opretoe will convert string to number using type coersion concept 

// const arr=[1,2,3,4];
// //in opertaor is used to check whetehr the key is present in obj or not even array is also a object
// console.log(1 in arr);//true
// console.log(2 in arr);//true
// console.log(4 in arr);//false

//find and filter
//find method return the first ele which satisfy the condition else undefined
//filter method return all the elemnts that satisfy the condition else []
// let arr=[1,2,3,4,5]
// console.log(arr.find((ele)=>ele>2));//3 returns first ele
// console.log(arr.filter((ele)=>ele>2));//returns [3,4,5]

let obj ={age:24};
let {age:userAge}=obj;//here this age will get the value from above age 
console.log(age);//ref error  beacuse u dont have a property called age its renamed as userAge
// console.log(userAge);//24


//done till 131
