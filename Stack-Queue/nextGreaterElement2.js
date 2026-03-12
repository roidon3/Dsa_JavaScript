function nextGreaterElement2(nums) {
    let n = nums.length;
    let stack = [];
    let result = new Array(n).fill(-1);
    for (let i = 2 * n - 1; i >= 0; i--) {
        // console.log(i,"value of i");
        let current = nums[i % n];
        console.log(current,"value of current");
        while (stack.length > 0 && stack[stack.length - 1] <= current) {
            stack.pop();
        }
        if (i < n) {
            if (stack.length > 0) {
                result[i] = stack[stack.length - 1];
            }
        }
        stack.push(current);
    }
    return result;
}
console.log(nextGreaterElement2([1,2,1]));