function isSubsequence(s, t) {
    let sIdx = 0;
    let tIdx = 0;
    while (sIdx < s.length && tIdx < t.length) {
        if (s[sIdx] === t[tIdx]) {
            sIdx++
        }
        tIdx++
    }
    return sIdx === s.length

}
console.log(isSubsequence("ab", "abcd"));//true
console.log(isSubsequence("ab", "bcda"));//false