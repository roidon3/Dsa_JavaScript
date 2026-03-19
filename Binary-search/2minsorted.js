function findMin(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return arr[left];
}

console.log(findMin([3, 4, 5, 1, 2]));//1
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));//0

//here this cond  (arr[mid] > arr[right]) { means 
// if the array is sorted that means [big array][small array] meaning the smallest ele always in the end no matter whats the arr
// so we can say that if mid is greater than the last ele -the smaller ele is in right side else left

// When you calculate mid, ask:
// “Could mid still be the answer?”
// If YES → keep it
// right = mid
// If NO → remove it
// right = mid - 1
// That’s the entire decision rule.

// 1️⃣ Case where right = mid - 1
// Example: Classic Binary Search
// We are searching for a target.
// if (arr[mid] === target) return mid;
// if (arr[mid] < target) {
//     left = mid + 1;
// } else {
//     right = mid - 1;
// }
// Suppose:
// arr[mid] = 8
// target = 5
// Since 8 > 5, we know:
// mid CANNOT be the answer
// So we remove it:
// right = mid - 1
// Because mid is already wrong.


// 2️⃣ Case where right = mid
// Example: Find minimum in rotated array
// if (arr[mid] > arr[right]) {
//     left = mid + 1;
// } else {
//     right = mid;
// }
// Suppose:

// [3,4,5,1,2]
//       ↑
//      mid
// Here:
// arr[mid] = 5
// arr[right] = 2
// If the condition is false:
// arr[mid] <= arr[right]
// That means the minimum could be:
// mid itself
// So we must keep mid:
// right = mid
// If we did:
// right = mid - 1
// we might skip the minimum.

// Why are we doing right = mid and not right = mid - 1 ?
// The answer is simple but very important:
// Because mid might still be the minimum element.
// So we cannot remove it.


// Let’s prove it with an example
// Array:
// [3,4,5,1,2]
//  0 1 2 3 4
// Iteration 1
// left = 0
// right = 4
// mid = 2
// Values:
// arr[mid] = 5
// arr[right] = 2
// Check:
// 5 > 2 ✔
// Meaning:
// minimum is on the RIGHT side
// So:
// left = mid + 1
// left = 3
// Now the search space:
// [1,2]
//  3 4
// Iteration 2
// left = 3
// right = 4
// mid = 3
// Values:
// arr[mid] = 1
// arr[right] = 2
// Check:
// 1 > 2 ❌
// This means:
// mid might be the minimum
// In fact:
// mid IS the minimum