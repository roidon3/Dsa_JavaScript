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