function squareRoot(num) {
    if (num < 2) return num
    let l = 1;
    let r = num;
    let result = 0
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (mid * mid == num) return mid
        if (mid * mid < num) {
            l = mid + 1
            result = mid
        } else {

            r = mid - 1
        }
    }
    return result;
}
console.log(squareRoot(4));
console.log(squareRoot(1));
console.log(squareRoot(20));