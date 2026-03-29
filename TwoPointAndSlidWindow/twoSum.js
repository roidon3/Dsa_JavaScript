//two sum using obj
function twoSumObj(nums, target) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        obj[[nums[i]]] = i
    }
    for (let i = 0; i < nums.length; i++) {
        let comp = target - nums[i]
        if (obj[comp]) {
            return [i, obj[comp]]
        }

    }

}
// console.log(twoSumObj([1, 2, 3, 4, 5], 9));
//two sum using map
function twoSumMap(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if (map.has(comp)) {
            return [i, map.get(comp)]
        }
        map.set(nums[i], i)
    }
}
// console.log(twoSumMap([1, 2, 3, 4, 5,6], 10));

//two sum using 2 pointers
function twoSumTwoPointer(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) {
            return [left, right]
        }else if(target >nums[left]){
            left =left+1

        }else{
            right =right-1

        }
    }

}
console.log(twoSumTwoPointer([1, 2, 3, 4, 5], 9));

//two sum can have multiple results
function twoSumRes(nums, target) {
    let map = new Map();
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if (map.has(comp)) {
            result.push([i, map.get(comp)])
        }
        map.set(nums[i], i)
    }
    return result
}
// console.log(twoSumRes([1, 2, 3, 4, 5, 6], 7));