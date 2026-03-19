function firstBadVersion(n, bad) {
const isBadVersion = (version) => version >= bad;
    let left = 1;
    let right = n;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (isBadVersion(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;

        }
    }
    return left
}
console.log(firstBadVersion(5, 4));

// Simple rule to remember
// return left  → first bad
// return right → last good