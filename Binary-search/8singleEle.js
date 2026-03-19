function singleEle(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (mid % 2 !== 0) {
            mid--
        }
        if (arr[mid] == arr[mid + 1]) {
            left = mid + 2
        } else {
            right = mid
        }
    }
    return arr[left]
}
console.log(singleEle([1, 1, 2, 2, 3, 4, 4, 5, 5]));
console.log(singleEle([1, 1, 2, 2, 3, 3, 4, 4, 5]));


//logic

// left and right pointer as usuall
// now the trick is initially the no will start with even indexes (0)
// even index → first element
// odd index  → second element
// 0 1   → pair
// 2 3   → pair
// 4 5   → pair
// 6 7   → pair
// But after the single element
// The pattern breaks.
// Example:
// nums = [1,1,2,3,3,4,4]
//            ↑
//          single
// 3️⃣ Binary Search Idea
// We use this property:
// If mid is even
// compare nums[mid] with nums[mid+1]
// If they are equal → pair is correct → move right.
// If not equal → single element is on left.

//remember these 2 points
//here we make it even beacause we know it should start from even position
//then if mid and mid+1 is same that means the ele is in right else right =mid 