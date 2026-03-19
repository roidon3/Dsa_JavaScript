function squreRoot(n) {
    let left = 1
    let right = n
    let result = 0
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        //better way to calculate mid value is
        // mid =(a +(b-a)/2)/in java or c++ if u add 2 hughe value i may overflow out of bound
        if (mid * mid === n) {
            return mid
        }
        if (mid * mid < n) {
            left = mid + 1
            result = mid
        } else {
            right = mid - 1
        }
    }
    return result
}
console.log(squreRoot(4));
console.log(squreRoot(9));
console.log(squreRoot(20));
console.log(squreRoot(110));
//here basically first it'll check the while condition then inside block
