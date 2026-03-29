//this is sliding windoow question
//here nothing fannncy its not optimized 
//run 2 loops first loop is from 0 to its length - the another string
// second loop normal

function idxOfStr(haystring, needle) {
    let n = haystring.length;
    let m = needle.length;
    for (let i = 0; i <= n - m; i++) {
        let j = 0
        for (j = 0; j < m; j++) {
            if (haystring[i + j] !== needle[j]) {
                break;
            }
        }
        if (j == m) {
            return i
        }
    }
    return -1

}
console.log(idxOfStr("sadbutsad", "sad"));//return 0
console.log(idxOfStr("leetcode", "leeto"));//return -1