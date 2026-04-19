function secLargest(arr){
    let largest = -Infinity
    let second =-Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            second =largest;
            largest=arr[i]
        }
        else if(arr[i]!==largest && arr[i]>second){//Found a number between largest and second
            second =arr[i]
        }
    }
    return second
}
console.log(secLargest([10, 5, 20, 8, 20]));


function findTopThree(arr) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num > first) {
            third = second;
            second = first;
            first = num;
        } 
        else if (num > second && num !== first) {
            third = second;
            second = num;
        } 
        else if (num > third && num !== second && num !== first) {
            third = num;
        }
    }

    return { first, second, third };
}

// Example
console.log(findTopThree([10, 5, 20, 8, 20, 15]));
// { first: 20, second: 15, third: 10 }

function moveZeros(arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[index++] = arr[i];
        }
    }
    while (index < arr.length) {
        arr[index++] = 0;
    }
    return arr;
}


//kadence algorithm
function maxSubArray(arr) {
    let maxSum = arr[0];
    let current = arr[0];
    for (let i = 1; i < arr.length; i++) {
        current = Math.max(arr[i], current + arr[i]);
        maxSum = Math.max(maxSum, current);
    }
    return maxSum;
}
