function findFirstAndLast(arr, find) {
    function findLeft(arr, find) {
        let left = 0;
        let right = arr.length - 1;
        let ans = -1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === find) {
                ans = mid;
                right = mid -1
            } else if (arr[mid] < find) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return ans;
    }
    function findRight(arr, find) {
        let left = 0;
        let right = arr.length - 1;
        let ans = -1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === find) {
                ans = mid;
                left = mid+1
            } else if (arr[mid] < find) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return ans;

    }
    return [findLeft(arr, find), findRight(arr, find)]

}
console.log(findFirstAndLast([5, 7, 7, 8, 8, 10], 8));//[3,4]
console.log(findFirstAndLast([5, 7, 7, 8, 8, 10], 7));//[1,2]
console.log(findFirstAndLast([], 0));//[-1,-1]