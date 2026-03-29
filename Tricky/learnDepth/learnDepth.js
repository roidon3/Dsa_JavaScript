// let arr1=[1,2,3]
// let arr2="1,2,3";
// console.log(arr1==arr2);//true
// console.log(arr1===arr2);//false
//arr is non premitive data structure and string is premetive
// whenver we use == js will convert nonp ds to primitive ds
//here js wwill use type coersion and uses .toString() so the array ios converted to string

//i have 2 api which returns similiar data fetchdata1() and fetchData2() i want to display data which returns data first wt to do?
//we can use promise.race()
//promise.race([fetchApi1(),fetchApi2()]).then(showData).catch(showError)

// console.log(1 + 2 + "3");//33//typeOf is string for both
// console.log("1" + 2 + 3);//123//whenever we try to do + between num and str js will convert it to str using type coersion
//addition associtavity from left to right

// const x = (0 ?? 2) || 3//?? has more precedence than || 
// console.log(x);//3 //study || ?? &&

// console.log(5<8>2);//false
// console.log(1>19<2);//true

// const arr=[];
// let res=arr.every(x=>x>0)
// console.log(res);//true since there are no elements so it'll voilet this cond x>0 so it'll return true

// let arr=[1,21,30,4];//[1,21,30,4]
//  arr.sort(); sort()converts it to string ["1","21","30","4"] it'll sort in lexogrephical order (first char of 1 str to 1 char of sec string)
//  console.log(arr);


// console.log(0??"hello");//0 ?? will check whether the left side value is null or undefined
// console.log(0||"hello");//hello || will check the falsy value (0,"",false) so it return "hello"

// setTimeout((a,b)=>{console.log(a+b);},0,1,2,37)//3 0 is delay rest is parameter a is 1 b is 2


// const obj={
//     a:10,
//     f:function(){
//         return this.a
//     }
// }
// console.log(obj.f());//10

// console.log(5&&1);//1 whenver we use && between 2 truthy val js will return last truthy val
// console.log(5||1);//5  whenver we use || between 2 truthy val js will return first truthy val

// let nums=[1,2,3,4,5]
// delete nums[2]
// console.log(nums.length);//[ 1, 2, <1 empty item>, 4, 5 ]  length =5 it remains same
//deletes deletes the ele and fills empty slot

// var arrA =[0]
// var arrB = arrA;
// arrB[0]=42;
// console.log(arrA);//[42]
//arrays are non=premitive ds means they are copied by refrence not by values
//means any changes made in copied array will change the orginal array

// if([]){ //beacause arrays are considered as obj in js , by default its true even if its empty
//     console.log("true");//true
// }

// console.log("2">"10");//whenver we use > between 2 string js wont convert it to no
//it will compare using lixicographical comparism  -char by char 
// 2 unicode value is 50 ,1 code is 49 ,so 50 >49 so true
// console.log("2">10);//fasle here it'll convert it to no since one is no

// const x=[20,1,3].sort()
// console.log(x);//[ 1, 20, 3 ] sort converts it into string and sort it lexcighraphically "20","1","3" 1,2,3


// {
//     var a=1;//fun scope or global scope we can access value of a outside also beacuse its global
//     let b=2;//block scope  error
//     const c=3//block scope error
// }
// console.log(a,b,c);

// console.log(1+false);//1
// console.log(1+true);//2
// console.log(1-false);//1


// console.log(5=="5");//true because of type coersion "5"==="5"

// let x=10;
// {let x=20}
// console.log(x);//let is blocked scoped so its 10

// var x=10
// {var x=20
//     console.log(x);
// }
// console.log(x);//20 in both beacus e var is global or function scope

// console.log(NaN ==NaN);//false Number.isNaN(value) check like this

// console.log(x);//undefined
// var x="hello"
// console.log(x);//hello

// console.log([1,2,3]+[1,3,4]);//whenver u use add in between 2 arr js will do type coersion
// "1","2","3"+"1","3","4"  = "1,2,31,3,4"

// console.log(+true);//whenver we use + before value it'll convert it to numeric valk so its 1 here
// console.log(!"roi");//roi id truthy value so !true is false

// console.log([]+[]); //""
// console.log([]+[1]);//"1"+""="1"
// console.log([1]+"abc");//"1"+"abc"="1abc"

// function abc(...args){
//     console.log(typeof args);//...args will be array of type of arr is obj
// }
// abc(21)

// var z=1 y=z=typeof y //there is no value for y so its type of "undefined" 
// console.log(y);//"undefined"

// console.log("1" - - "1");//whenver we use -before any value js will convert it into its numeric equallent 
//"1"-(-1)//wnever we use sub bw a no and a string js engine will convert the string into a number 
//1+1=2

//console.log(false || null ||"hello");//or operator will return first truthy value //hello  
//Returns the first truthy value, or the last value if all are falsy
// 0, "", null → all are falsy
// 💡 Key insight:
// || does NOT return boolean always
// It returns actual value

//console.log(false && null && "hello");//& will return first falsy value //false
// 🔹 2. && (AND operator)
// 👉 Rule:

// Returns the first falsy value, or the last value if all are truthy

// There are ONLY 7 falsy values 👇

// false
// 0
// -0
// 0n      // BigInt zero
// ""      // empty string
// null
// undefined
// NaN
// 🔹 ?? (Nullish Coalescing)
// 👉 Rule:

// Returns right side ONLY if left is null or undefined
// ✅

// 👉 Why?

// || treats 0 as falsy → replaces it
// ?? treats only null & undefined → keeps 0
// console.log("" || "hello");  // "hello"
// console.log("" ?? "hello");  // "" ✅

// console.log(undefined ?? "hi"); // "hi"

// 🔥 Operator Priority (Precedence)
// When you use all three together:
// &&   >   ||   >   ??
// && runs first
// then ||
// then ?? (lowest)

// 👉 JavaScript does NOT allow mixing ?? with || or && without parentheses

// ❌ This will throw error:
// null || undefined ?? "hello"

// 👉 ❌ SyntaxError
