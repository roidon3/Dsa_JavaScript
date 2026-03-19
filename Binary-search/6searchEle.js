function searchRotateArr(arr, search) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === search) {
            return mid;
        }
        if (arr[left] <= arr[mid]) {//left side is sorted
            if (search >= arr[left] && search < arr[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }

        } else {//right side is sorted
            if (search > arr[mid] && search <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1

            }

        }
    }
return -1

}
console.log(searchRotateArr([4, 5, 6, 7, 0, 1, 2, 3], 3))
console.log(searchRotateArr([4, 5, 6, 7, 0, 1, 2, 3], 5))
console.log(searchRotateArr([4, 5, 6, 7, 0, 1, 2, 3], 0))

// 🔥 The Pattern (Memorize This)

// while(left <= right){
//    mid
//    if(arr[mid] === target) return mid
//    if(left side sorted){
//        if(target inside left range)
//             move right
//        else
//             move left
//    }
//    else{
//        if(target inside right range)
//             move left
//        else
//             move right
//    }
// }