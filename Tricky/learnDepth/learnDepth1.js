// const x=[1];
// const y=[2];
// console.log(x+y);//"12" js will convert it to string 1 and string 2 

// const x=[1,2];
// const y="1,2"
// console.log(x==y);//true 
//when ever we use loose equality operator bw array and string js will try to convert this array to string by using type coersion 
//it will internally uses .toString() and try to convert it to string 

// const numbers=[1,2,3,4,5,6,7]
// const[x,...y]=numbers;
// console.log(x,y);//1 [ 2, 3, 4, 5, 6, 7 ]

// let str="abc"+ +"def";
// console.log(str,"str");//+ will convert it to its numeric value here +"def" is NaN so its abcNaN

// let newlist =[1].push(2);//.push() pushes the value to the array and returns the length of array so in next line its
//2.push(3)//.piush will woek only on array not on numbers
// console.log(newlist.push(3));//TypeError: newlist.push is not a function


// let nums=[1,2,3,4,5];
// delete nums[2]//delete will remove the element and assign it withn empty slot so length will remians same
// console.log(nums);//[ 1, 2, <1 empty item>, 4, 5 ]
// console.log(nums.length);//5
//done till 57

// console.log(0|| 1);//1
// console.log(1|| 2);//1
// console.log(0 && 1);//0
// console.log(1 && 2);//2

// let num=0;
// console.log(num++);//0  first it'll return the value then it'll update
// console.log(++num);//2 first it'll update the value then it'll returns

// console.log(data());//TypeError: data is not a function
// console.log(data);//undefined -here it wont throw error
// //here we are assign a anonymous function to var variable ,var is hoisted so its undefined() 
// var data=function (){
//     return "1"
// }

// const arr=[1,2,3];
// arr[5]=6
// console.log(arr.length);//6 //[ 1, 2, 3, <2 empty items>, 6 ]

// const obj={a:1};
// obj.a=2;
// console.log(obj);//2
//when u declare a obj using const we cannot reaasign the data but we can modefiy the obj

//we cannot do this obj={a:4}

// let x={
//     a:undefined,
//     b:null
// }
// console.log(JSON.stringify(x));//{"b":null} while stringfy it'll remove undefined valu from the obj

//how to remove spefic value from array
// const arr=[1,2,3,4,5,6,7]//remove 3
// let index =arr.indexOf(3);
// arr.splice(index,1)
// console.log(arr);

//  console.log(true+1);//2//boolean+num here js will convert boolean to number
// console.log(true+"1");//"True1"//bolean+string  js will convert it to string

// const str="roidon"
// str.data="dsouza";
// console.log(str.data);//undefined
//premitive datatype dosent hold any properties
//so in line 72 will will craete a temp var and store the value
//in next line js will cretae on more variable so its undeined 

// const s1="hello";
// const s2 =new String("hello")//here instead of creating string it'll craete string obj
// console.log(s1==s2);//true//here its loose equluality between str and obj so it compares only value not type
// console.log(s1===s2);//false here str and obj is false beacuse of ===

// console.log(Boolean({}));//true beacuse empty obj is treated as truthy value boolean(true) is true
// console.log(Boolean([]));//true converted to empty obj internally - then same as above 
// console.log(Boolean(""));//false " " is false 
// console.log(new Boolean(false))//; irrespetvive of value new boolean will always returns an obj so same explanation as first



// console.log([]==![]);//arrays are truthy value in js  so !true is false so []==flase ""==false 0 ==false 0==0 true
//whenver we use loose equality operator between a array and primitive value ([]==false ) ja will conert [] to string "" using .toString() method

// console.log([]==0);//false same as above explanation
// console.log([0]==[0]);//whenver we use loose equality its check both the ref are same or not here both arrays are ppointing to diff mem location

// const x ="he".split('');
// const y=['h',"e"]
// console.log(x===y);//false beacuse it pointingn to diff mem location

// 🔥 Main Concept: Arrays are compared by reference
// In JavaScript:
// Primitive values (number, string, boolean) → compared by value
// Objects & arrays → compared by reference (memory address)

// ✅ Example 1 (Same values, still false)
// const a = [1, 2];
// const b = [1, 2];

// console.log(a === b); // false ❌

// 👉 Even though values are same, they are stored in different memory locations

// ✅ Example 2 (Same reference)
// const a = [1, 2];
// const b = a;

// console.log(a === b); // true ✅

// 🧠 So your statement:

// "whenever we compare arrays it’s always false"

// ❌ Not always false
// ✅ Only false when they are different references

// 👉 Here b is pointing to same memory as a

// const a = [1,2];   // memory: 0x123
// const b = [1,2];   // memory: 0x456
// a === b ❌ (different address)
// const c = a;       // memory: 0x123
// a === c ✅ (same address)

// console.log([1] == 1);
// 👉 [1] → "1"
// 👉 "1" == 1 → true
// ✅ Answer: true