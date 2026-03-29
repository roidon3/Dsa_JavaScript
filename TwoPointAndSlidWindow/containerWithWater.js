// very easy question just calculate the which is lower point and multiply by index(j-i) of 2 points
//simple two pointer question move left and right 
//formula is min of left and right * sub of both indexes
//always elemente the smaller point
function maxArea(arr) {
    let left = 0;
    let right = arr.length - 1;
    let maxValue = 0;
    let mostWater = 0
    while (left < right) {
        mostWater = (Math.min(arr[left], arr[right])) * (right - left)
        maxValue = Math.max(mostWater, maxValue)
        if (arr[left] <= arr[right]) {
            left++
        } else {
            right--
        }


    }
    return maxValue

}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));


//brute force using 2 loops
function maxArea(arr){
    let n = arr.length;
    let maxValue = 0;

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            let height = Math.min(arr[i], arr[j]);
            let width = j - i;
            let area = height * width;

            maxValue = Math.max(maxValue, area);
        }
    }

    return maxValue;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49