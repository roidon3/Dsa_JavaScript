//here we have to find the distinct triplets so its better if we sort we'll get the order and easily we can find duplicates
//here bacically we need to find a+b+c =0
//we'll take a as ref point then we'll do 2 sum for the remaining array
//this is basically like mtwo sum problem

function threesome(arr) {
    arr.sort((a, b) => a - b);
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) {
            twosum(arr, i, ans);
        }
    }
    return ans;
}

function twosum(arr, x, ans) {
    let i = x + 1;
    let j = arr.length - 1;

    while (i < j) {
        let sum = arr[x] + arr[i] + arr[j];

        if (sum > 0) {
            j--;
        } else if (sum < 0) {
            i++;
        } else {
            ans.push([arr[x], arr[i], arr[j]]);

            // skip duplicates
            while (i < j && arr[i] === arr[i + 1]) i++;
            while (i < j && arr[j] === arr[j - 1]) j--;

            i++;
            j--;
        }
    }
}

console.log(threesome([-1, 0, 1, 2, -1, -4]));