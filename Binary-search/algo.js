function binarysearch(arr, search) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === search) {
            return `${search} is found at ${mid} index`
        }
        if (arr[mid] > search) {
            right = mid - 1

        } else {
            left = mid + 1

        }
    }

}
console.log(binarysearch([1, 2, 3, 4, 5], 1));
console.log(binarysearch([1, 2, 3, 4, 5], 2));
console.log(binarysearch([1, 2, 3, 4, 5], 3));
console.log(binarysearch([1, 2, 3, 4, 5], 4));
console.log(binarysearch([1, 2, 3, 4, 5], 5));