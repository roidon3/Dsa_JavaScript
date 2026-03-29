//hint whenver you have to find the substring always think of sliding window
//initiallt i and j both will be at zero then we increase the window size
//we use map to store the value and index
//initailly i and j both will be on 0 ,and we use a map and a variable to store maxlength
//we use for loop to itterte j 
//inside if we write 2 cond 1.checking if the value is not present and the value is part of that window
//so here we move j from 0 to end in for loop
function longestSubStr(arr) {
    let i = j = 0;
    let map = {};
    let maxWs = 0;
    for (let j = 0; j < arr.length; j++) {
        if (map[arr[j]] !== undefined && map[arr[j]] >= i) {
            i = map[arr[j]] + 1;
        }
        map[arr[j]] = j;
        currWS = j - i + 1;
        maxWs = Math.max(maxWs, currWS)
    }
    return maxWs
}
console.log(longestSubStr("abcabcbb"));
//to be honest i din understand