function kokoeatBanana(piles, h) {
    let left = 1;
    let right = Math.max(...piles)
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let hours = 0;
        for (let i = 0; i < piles.length; i++) {
            hours = hours + Math.ceil(piles[i] / mid)
        }
        if (hours > h) {
            left = mid + 1
        } else {
            right = mid;
        }

    }
    return left;

}
console.log(kokoeatBanana([3, 6, 7, 11], 8));
console.log(kokoeatBanana([30, 11, 23, 4, 20], 5));