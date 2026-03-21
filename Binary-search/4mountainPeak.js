function mountainPeak(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1
        } else {
            right = mid;

        }
    }
    return left;

}
console.log(mountainPeak([0, 1, 0]));//1
console.log(mountainPeak([0, 10, 5, 2]));//1
console.log(mountainPeak([0, 2, 1, 0]));//1