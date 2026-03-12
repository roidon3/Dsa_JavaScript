//normal method
// function nextGreaterElement(){
    // const arr=[3,4,5]
    // const brr=[2,3,4,6,5]
//     const result=[]
//     for(let i=0;i<arr.length;i++){
//         let flag=false;
//         let starIndex=brr.indexOf(arr[i])
//         console.log(starIndex,"startindex");
//         for(let j=starIndex +1;j<brr.length;j++){
//             if(arr[i] < brr[j]){
//                 result.push(brr[j])
//                 flag=true;
//                 break
//             }
//         }
//         if(!flag){
//             result.push(-1)
//         }
//     }
//     return result
// }
// console.log(nextGreaterElement())

//when ever you see a problem next graeter .next smaller, warm,next profit always use stack
// Whenever you hear:
// Next greater
// Next smaller
// Daily temperatures
// Stock span
// 👉 Think STACK

//using Stack - Optimized approach
//single array
function nextGreater(arr) {
    let stack = [];
    let result = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            result[i] = -1;
        } else {
            result[i] = stack[stack.length - 1];
        }
        stack.push(arr[i]);
    }
    return result;
}
console.log(nextGreater([4, 5, 2, 10, 8] ));//[5, 10, 10, -1, -1]
//2 arrays
function nextGreaterElement(nums1, arr) {
    let stack = [];
    let map = new Map();
    // Step 1: Find next greater for every element in arr
    for (let i = arr.length - 1; i >= 0; i--) {
        // Remove all smaller or equal elements
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }
        // If stack empty → no greater element
        if (stack.length === 0) {
            map.set(arr[i], -1);
        } else {
            map.set(arr[i], stack[stack.length - 1]);
        }
        // Push current element
        stack.push(arr[i]);
    }
    // Step 2: Build answer for nums1
    let result = [];
    for (let num of nums1) {
        result.push(map.get(num));
    }
    return result;
}

// Test
let nums1 = [4, 1, 2];
let arr = [1, 3, 4, 2];

// console.log(nextGreaterElement(nums1, arr));


// here the approach is simple ,instaead of itterting fromm starting we itterate from end 
// because we know the NGE of last ele is -1 and we push those elements in stack 
// then the loop contiues if the NGE is less than the current ele we pop itteratevery simple approach