//Boyer-Moore Voting Algorithm
function majorityEle(nums) {
    let canditate = null
    let count = 0;
    for (let num of nums) {
        if (count === 0) {
            canditate = num;
        }
        count += (num === canditate) ? 1 : -1

    }
    return canditate

}
// console.log(majorityEle([1, 2, 3, 2, 2]));


//add propty to obj
let obj = [{ name: "roidon", age: 25 }, { name: "maxwell", age: 33 }]
let newobj = [...obj, { name: "smith", age: 36 }]
// console.log(newobj,"newObj");

//add new obj
// let modifiedObj = newobj.map((ele) => ({ ...ele, skill: "cricket" }));
let modifiedObj = newobj.map((ele) => ({ ...ele, skill: ele?.age < 26 ? "cricket" : "football" }));
// console.log(modifiedObj);

//group a obj
let people = [
    { name: "Alice", age: 25, city: "Sydney" },
    { name: "Bob", age: 30, city: "Melbourne" },
    { name: "Charlie", age: 22, city: "Sydney" },
    { name: "David", age: 28, city: "Melbourne" },
    { name: "Eve", age: 35, city: "Sydney" }
];

let groupedByCity = people.reduce((acc, person) => {
    // If the city key doesn't exist, initialize it as an empty array
    let obj = person.city
    if (!acc[obj]) {
        acc[obj] = [];
    }
    // Push the current person into the corresponding city array
    acc[obj].push(person);
    return acc;
}, {});

// console.log(groupedByCity);

const arr = [1, 2, 3, 4, 5]
//remove 4
// console.log(arr.filter(ele=>ele !==4))

const numbers = [1, 2, 3, 4, 5];
const index = numbers.indexOf(3);
if (index !== -1) {
    numbers.splice(index, 1); // Removes the element at index
}
// console.log(numbers); // [1, 2, 4, 5]
//Find the Most Frequent Element in an Array
// Find the First Duplicate in an Array

// What is the difference between Object.freeze() and Object.seal()?
// Object.freeze(obj): Prevents adding, modifying, and deleting properties.
// Object.seal(obj): Prevents adding or deleting properties but allows modifying existing ones.


//here find the sum of categoery a and b
const data = [
    { category: 'a', amount: 100 },
    { category: 'b', amount: 200 },
    { category: 'a', amount: 50 },
    { category: 'b', amount: 150 }
];
// const result=data.reduce((acc,curr)=>{
//     if(acc[curr.category]){
//         acc[curr.category] =acc[curr.category] +curr.amount
//     }else{
//          acc[curr.category] = curr.amount
//     }
//     return acc
// },{})


// const result = data.reduce((acc, curr) => {
//   acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
//   return acc;
// }, {});

// console.log(result);
//🟢 1. Sum of numbers (Warm-up)
// let arAr=[1,2,3,4,5];
// const result=arAr.reduce((acc,curr)=>{return acc+curr},0)
// console.log(result);


//🟢 2. Count occurrences

// const arrC = ['a', 'b', 'a', 'c', 'b', 'a'];
// let tot = arrC.reduce((acc, curr) => {
//      acc[curr] = (arr[curr] || 0) + 1;
//     return acc;
// }, {})
// console.log(tot);

//3. Group by property (VERY IMPORTANT)
// const users = [
//   { name: 'John', role: 'admin' },
//   { name: 'Jane', role: 'user' },
//   { name: 'Bob', role: 'admin' }
// ];

// output
// {
//   admin: [{...}, {...}],
//   user: [{...}]
// }

// const result=users?.reduce((acc,curr)=>{
//     if(!acc[curr.role]){
//         acc[curr.role]=[]
//     }
//     acc[curr.role].push(curr.name)
//     return acc
// },{})

// console.log(result);

//4. Find max object
// const data1 = [
//   { name: 'A', score: 80 },
//   { name: 'B', score: 95 },
//   { name: 'C', score: 90 }
// ];

// // op { name: 'B', score: 95 }

// const result = data1?.reduce((acc,curr)=>{
//     return curr.score >acc.score ?curr:acc
// },)
// console.log(result);
//5 odd or even
let arrr=[1,2,3,4,5]
//here it returns the count what if you want the ele 
// const result=arrr.reduce((acc,curr)=>{
//     if(curr %2 !==0){
//         acc['odd']=(acc['odd']||0)+1
//     }else{
//         acc['even']=(acc['even']||0)+1
//     }
//     return acc
// },{})
//return the arr ele not count
const result=arrr.reduce((acc,curr)=>{
    if(curr %2 !==0){
        acc['odd']=(acc['odd']||[])
        acc.odd.push(curr)
    }else{
        acc['even']=(acc['even']||[])
        acc.even.push(curr)
    }
    return acc
},{})
console.log(result);