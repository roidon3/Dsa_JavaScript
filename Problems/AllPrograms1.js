//https://chatgpt.com/c/67040ebe-059c-8004-99dd-29007ef922f7  - map and set explanation
  // js questions
// https://chatgpt.com/c/67167c79-30c8-8004-9416-b564c9efffa7    //dynamic form react with next btn

//  To Remove any non-alphabetic characters and convert to lowercase
//   const formatStr = (str) => str.replace(/[^a-zA-Z]/g, '').toLowerCase();
//aim for tommorrow
//https://chatgpt.com/c/6732d172-22fc-8004-bd47-d1bc9b73e12b

// What are generators in JavaScript? How do they work?
// What is the purpose of Symbol in JavaScript? How is it used?
//Explain how memory is managed in JavaScript. What are garbage collection and memory leaks?
// What are WeakMap and WeakSet? How do they differ from Map and Set?
// How does setTimeout work under the hood in JavaScript?
//what is event emitter
// How do you add and remove event listeners in JavaScript?
// What is the difference between localStorage, sessionStorage, and cookies?
//shadow dom ,webpack
//obersvable
//https://chatgpt.com/c/67aac57d-1690-8004-a420-89da5f364f7b
//program to find largest element in an array


//count no of words in a string
//move o0 to end
//fizzbuzz   
//palindrome- 2 pointers
//flaten array recurssion
//array chunking ,depending on input break the array use slice
// missing no
function largestElement(arr){
    let largest = arr[0]
    for(let i=1;i<arr.length;i++){
        console.log(i,"length");
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest
}
// console.log(largestElement([1,2,3,4,5]));

//program to find smallest element in an array
function smallestElement(arr){
    let smallest = arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]<smallest){
            smallest = arr[i]
        }
    }
    return smallest
}
// console.log(smallestElement([1,2,3,4,5]));

//ascending order
function asscend(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp =arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}
// console.log(asscend([1,5,7,3,2]));

//decending order
function decend(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]<arr[j+1]){
                let temp =arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}
// console.log(decend([1,5,7,3,2]));

let arr = [5, 3, 8, 1, 2];
arr.sort((a, b) => a - b);  // Ascending
// console.log(arr);  // Output: [1, 2, 3, 5, 8]

arr.sort((a, b) => b - a);  // Descending
// console.log(arr);  // Output: [8, 5, 3, 2, 1]

//reverse arry with add array
function reverseArray(){
    let arr =[1,2,3,4,5]
    let arr1=[]
    for(let i=arr.length-1;i>=0;i--){
        arr1.push(arr[i])
    }
    return arr1
}
// console.log(reverseArray());

//reverse arry without dup array
function reverseArray2(){
    let arr=[1,2,3,4,5,6,7]
    let left =0
    let right=arr.length-1
    while(left < right){
        let temp = arr[left]
        arr[left]=arr[right]
        arr[right]= temp
        left ++;
        right --;
    }
    return arr

}
// console.log(reverseArray2());

//remove duplicated using filter 
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
    //index of gives the first element index we are comapring whether its eaual to the actual index
    //its check whether index is already present for that particular no
  }
// console.log(removeDuplicates([1,2,3,4,4,5,2,1]),"jjjjjjjjj");

//to print duplicate elements
function duplicateEle(arr){
    return arr.filter((item, index) => arr.indexOf(item) !== index);
}
// console.log(duplicateEle([1,2,3,4,1,4]));

//remove duplicates from array
function duplicate(){
    let arr=[1,3,4,5,5,3]
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        if(newArr.indexOf(arr[i])=== -1){
            newArr.push(arr[i])

        }
    }
    return newArr
}
// console.log(duplicate());
function duplicateArr(){
    let arr=[1,2,3,3,4]
    let duparr=[]
    for(let i=0;i<arr.length;i++){
        if(!duparr.includes(arr[i])){
            duparr.push(arr[i])
        }
    }
    return duparr
}
// console.log(duplicateArr());

//intersection of aray
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let intersection = arr1.filter(item => arr2.includes(item));
// console.log(intersection);  // Output: [3, 4]


//count no of element occurence i n ana array
function countEle(arr){
    let store = {}
    // Count the occurrences of each element
    for(let i of arr){
        store[i] = (store[i] || 0) + 1;
    }
    // return store  // occurance of all repeting char

    // Find the first element with a count of 1
    for(let i of arr){
        if(store[i] === 1){
            return i;  // Return the element, not the count
        }
    }
    return null;  // Return null if no non-repeating element is found
}

// console.log(countEle([1, 2, 3, 3, 3, 1, 4,2,7]));  // Output: 2

function nonRep() {
    let str = "Swiss"
    let StrObj = {}
    for (let i of str.toLowerCase()) {
        StrObj[i] = (StrObj[i] || 0) + 1;
    }
    for (i of str.toLowerCase()) {
        if (StrObj[i] === 1) return i
    }
    return null
}

function countchar(){
    let map = new Map();
    let arr =[1,6,2,3,2,4,5,6,6,7,1]
    for(let i of arr){
        map.set(i,((map.get(i) || 0 )+1))
    }
    // return Object.fromEntries(map);
    return map
}
// console.log(countchar());
// console.log(nonRep());
// Convert Map to an array
// let mapToArray = Array.from(map); // Or [...map]
// Convert Map to an object
// let mapToObject = Object.fromEntries(map);


//find commom ele in 2 arr

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const commonElements = array1.filter(element => array2.includes(element));
// console.log(commonElements); // Output: [4, 5]

// find diff ele in two array

// Find elements in array1 that are not in array2
const uniqueToArray1 = array1.filter(element => !array2.includes(element));

// Find elements in array2 that are not in array1
const uniqueToArray2 = array2.filter(element => !array1.includes(element));

// Combine the results
const distinctElements = [...uniqueToArray1, ...uniqueToArray2];
// console.log(distinctElements); // Output: [1, 2, 3, 6, 7, 8]
// const vote = () => {
    // const Person = [
    //     { name: 'a', yearofbirth: 2000 },
    //     { name: 'b', yearofbirth: 2020 },
    //     { name: 'c', yearofbirth: 2017 },
    //     { name: 'd', yearofbirth: 2024 }
    // ];

//     let currentYear = new Date().getFullYear();
//     let eligiblePeople = Person.filter(person => currentYear - person.yearofbirth >= 18).map(person => person.name);

//     return eligiblePeople;
// }

// console.log(vote());


//when n no of elements
function findCommonInMultipleArrays(...arrays) {
    return arrays.reduce((acc, currArray) => acc.filter(element => currArray.includes(element)));
}

// console.log(findCommonInMultipleArrays([1, 2, 3], [2, 3, 4], [3, 5, 6]));  // Output: [3]

//longest prefix

function longestStr(str){
    if(str.length === 0){return ""}
    let prefix =str[0]
    for(let i=1;i<str.length;i++){
        while(str[i].indexOf(prefix) !==0){
            
            prefix = prefix.slice(0,-1)
        }
        if(prefix===""){return ""}
    }
    return prefix

}



// console.log(longestStr(["flight","flow","flower"]));


// Initially, prefix = "flower".
// On the first iteration (with strs[1] = "flow"):
// strs[1].indexOf("flower") !== 0, so the prefix is reduced to "flowe".
// Still, strs[1].indexOf("flowe") !== 0, so the prefix is reduced to "flow".
// Now strs[1].indexOf("flow") === 0, so we stop reducing the prefix for this string.
// On the second iteration (with strs[2] = "flight"):
// strs[2].indexOf("flow") !== 0, so the prefix is reduced to "flo".
// strs[2].indexOf("flo") !== 0, so the prefix is reduced to "fl".
// Now strs[2].indexOf("fl") === 0, so the loop stops, and "fl" is returned as the longest common prefix.


//count the arraelements in same order

// function countEle() {
//     let arr = [1, 2, 2, 4, 3, 5, 1, 6, 6, 7, 8, 9];
//     let countMap = new Map();

//     for (let char of arr) {
//         countMap.set(char, (countMap.get(char) || 0) + 1);
//     }

//     // Convert the map to an object if needed
//     // return Object.fromEntries(countMap);
//     return countMap
// }

// console.log(countEle());
//actual twosum
const twoSum = () => {
    let arr = [2, 7, 5, 6]
    let target = 9

    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let competency = target - arr[i];
        if (map.has(competency)) {
            // return [map.get(competency), i] // returns index
            return [competency,arr[i]]//returns ele
        }
        map.set(arr[i],i)
    }
    return null;
}
const aaa = twoSum()
// console.log(aaa);
//returns all combination
function ttwoSum(){
    let arr = [2,5,6,9,3,4]
    let target =7
    const mapset = new Map();
    for(let i=0;i<arr.length;i++){
        let competency = target - arr[i]
        if(mapset.has(competency)){
            return [competency,arr[i]]

        }else{
            mapset.set(arr[i],i)
        }

    }
}
// console.log(ttwoSum());
function twoSumAllCombinations() {
    let arr = [2, 5, 6, 9, 3, 4];
    let target = 7;
    const mapset = new Map();
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (mapset.has(complement)) {
            result.push([complement, arr[i]]);
        }
        mapset.set(arr[i], i);
    }
    return result;
}

// console.log(twoSumAllCombinations());


const missingNumber = ()=>{
    let arr =[0,2,3,1]
    let n = arr.length;
    let total = (n*(n+1))/2
    let totalArr = arr.reduce((acc,curr)=>acc+curr,0);
    return total - totalArr

}
// console.log(missingNumber());


function findMissingNumber(arr) {
    // Find the minimum and maximum numbers in the array
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // Calculate the expected sum of all numbers from min to max
    const expectedSum = ((max * (max + 1)) / 2) - ((min * (min - 1)) / 2);

    // Calculate the actual sum of the array elements
    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    // The missing number is the difference between the expected and actual sums
    return expectedSum - actualSum;
}

// Example usage
const input = [1, 2, 4, 5];
// console.log(findMissingNumber
// (input)); // Output: 3



//anagarams
function anagram(str1,str2){
      const formatStr = (str) => str.replace(/[^a-zA-Z]/g, '').toLowerCase();
      if(formatStr(str1).length !== formatStr(str2).length){return false}

      if(formatStr(str1).split("").sort().join("")  === formatStr(str2).split("").sort().join("") ){
        return true
      }

}
// console.log(anagram("listen","silent"));


const palindrome = (str)=>{
    let otgStr = str;
    let revStr ="";
    for(let i=str.length -1;i>=0;i--){
      revStr+=str[i]
    }
    if(otgStr == revStr){
      console.log("palindrome");
    }else{
      console.log("not a plaindrome");
    }
  }
  
//   console.log(palindrome("tyu"))

function unique(){
  let str="agbkoee";
  let setStr = new Set(str)
  let ManuiplatedStr = [...setStr].join("");
  let ManuiplatedStr1 = [...setStr]
  console.log(ManuiplatedStr,"ManuiplatedStr");
  console.log(ManuiplatedStr1,"ManuiplatedStr1");
  if(str.length === ManuiplatedStr.length){
    return true
  }
  return false

}
// console.log(unique());


function haveDistinctElements(arr1, arr2) {
    // Loop through each element in the first array
    for (let i = 0; i < arr1.length; i++) {
      // Loop through each element in the second array
      for (let j = 0; j < arr2.length; j++) {
        // If a common element is found, return false
        if (arr1[i] === arr2[j]) {
          return false;
        }
      }
    }
    // If no common elements are found, return true
    return true;
  }
  
  // Example usage:
//   console.log(haveDistinctElements([1, 2, 3], [4, 5, 6]));  // Output: true (no common elements)
//   console.log(haveDistinctElements([1, 2, 3], [3, 4, 5])); 

  
  // Example Usage
  const fruits = ['apple', 'banana', 'mango'];
  
//   console.log(fruits.includes('banana')); // true
//   console.log(fruits.includes('grape'));  // false

  