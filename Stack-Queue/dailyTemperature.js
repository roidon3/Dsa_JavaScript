// //when ever you see a problem next graeter .next smaller, warm,next profit always use stack
function dailyTemp() {
    let arr = [67, 68, 67, 70, 66]
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let flag = false;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                result.push(j - i);   // correct distance
                flag = true;
                break;
            }
        }
        if (!flag) {
            result.push(0);
        }
    }
    return result;
}

console.log(dailyTemp());

function dailyTempOptimize() {
    let arr = [67, 68, 67, 70, 66]
    let stack = []
    let result = new Array(arr.length)
    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop()
        }
        if (stack.length === 0) {
            result[i] = 0;
        } else {
            result[i] = stack[stack.length - 1] - i;
        }
        stack.push(i)
    }
    return result;
}
console.log(dailyTempOptimize());


//same approch as next greter ele first check that code