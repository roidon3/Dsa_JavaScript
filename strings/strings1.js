//1.program to find the last word in an string
function lastword(str) {
    let word = ""
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== " ") {
            word = str[i] + word;
        } else if (word.length > 0) {
            break;

        }

    }
    return word


}
// console.log(lastword("im roidon from managlore    "));

//2. program to find the words containing character
// function findWordsContaining() {
//     // let arr = ["roidon", "dsouza", "managlore"]; let find = "a";//op [1,2]
//     //    let arr=["roidon","dsouza","managlore"] ;let find ="m";//op [2]
//        let arr=["roidon","dsouza","managlore"] ;let find ="s";//op [1]

//     let storeIdx=[]

//     for(let i=0;i<=arr.length-1;i++){
//         if(arr[i].includes(find)){
//             storeIdx.push(i)
//         }
//     }
//     return storeIdx
// }

// console.log(findWordsContaining())

function findWordsContaining() {
    let arr = ["roidon", "dsouza", "managlore"]; let find = "a";//op [1,2]
    //    let arr=["roidon","dsouza","managlore"] ;let find ="m";//op [2]
    //    let arr=["roidon","dsouza","managlore"] ;let find ="s";//op [1]

    let storeIdx = []

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], "arr[i]");
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j], "arr[j]");
            if (arr[i][j] === find) {
                storeIdx.push(i)
                break;

            }

        }
    }
    return storeIdx



}

// console.log(findWordsContaining())

//3.jwell and stones
//brute force approach
function jwellAndStones() {
    let jewel = "Aa";
    let stone = "AaAbbbb";
    let count = 0
    for (let i = 0; i < stone.length; i++) {
        for (let j = 0; j < jewel.length; j++) {
            if (jewel[j] === stone[i]) {
                ++count
                break;
            }
        }
    }

    return count

}
// console.log(jwellAndStones())

//here time complexity o(m*n)  space complexity o(1)


function jwellAndStonesoptimized() {
    let jewel = "Aa";
    let stone = "AaAbbbb";
    let jewelsSet = new Set(jewel);
    let count = 0;

    for (let s of stone) {
        if (jewelsSet.has(s)) count++;
    }

    return count;
}

// console.log(jwellAndStonesoptimized()); // 3

function vowelAndCons() {
    let str = "success";
    let store = {}
    for (let i = 0; i < str.length; i++) {
        if (!store[str[i]]) {
            store[str[i]] = 1

        } else {
            store[str[i]]++

        }
    }
    let vowels = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;
    let consoCont = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelCount = Math.max(store[str[i]], vowelCount)

        } else {
            consoCont = Math.max(store[str[i]], consoCont)

        }
    }

    return vowelCount + consoCont;

}
// console.log(vowelAndCons());

//split a string in balanced strings

function bslsncedStr() {
    let str = "rlrrllrl";
    let rCount = 0;
    let lCount = 0;
    let balancedCount = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "l") {
            lCount++
        }
        if (str[i] == "r") {
            rCount++
        }
        if (lCount !== 0 && rCount !== 0 && rCount === lCount) {
            balancedCount++
            rCount = 0;
            lCount = 0;
        }
    }
    return balancedCount
}
// console.log(bslsncedStr());

//try bslsncedStr using one variable

//rev string partb 2 using 2k 

function revStr2() {
    let s = "abcdefgh"
    let k = 2;
    s = s.split("")
    for (let x = 0; x < s.length; x = x + (2 * k)) {
        console.log(s[x], "value of x is");
        let n = k;  //2
        let mid = Math.floor(n / 2);
        for (let i = 0; i < mid / 2; i++) {
            let temp = s[x + i];
            s[x + i] = s[x + n - 1 - i];
            s[x + n - 1 - i] = temp;
        }
    }
    return s.join("")
}

// console.log(revStr2());


// function revStr2() {
//     let s = "abcdefgh";
//     let k = 2;
//     s = s.split("");

//     for (let x = 0; x < s.length; x += 2 * k) {
//         let n = Math.min(k, s.length - x); // handle last block
//         for (let i = 0; i < Math.floor(n / 2); i++) {
//             let temp = s[x + i];
//             s[x + i] = s[x + n - 1 - i];
//             s[x + n - 1 - i] = temp;
//         }
//     }

//     return s.join("");
// }


function rev() {
    let str = "roidon"
    let n = str.length;
    str = str.split("")
    let mid = Math.floor(n / 2)
    for (let i = 0; i < mid; i++) {
        let temp = str[i]
        str[i] = str[n - i - 1]
        str[n - i - 1] = temp


    }
    return str.join("")
}
// console.log(rev())

function rev2() {
    let str = "abcdefghij"
    let k = 2;


    str = str.split("")
    for (let x = 0; x < str.length; x = x + 2 * k) {
        let mid = Math.floor(k / 2);
        for (i = 0; i < mid; i++) {
            let temp = str[x + i]
            str[x + i] = str[x + k - i - 1]
            str[x + k - i - 1] = temp;
        }

    }

    return str.join("")

}
// console.log(rev2());

function validPalindrome() {
    let s = "W e w "
    s = s.toLowerCase()
    let filtered = ""
    let revStr=""
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/)) {
            filtered += s[i]
            revStr =s[i]+revStr

        }

    }
    return revStr === filtered

}
// console.log(validPalindrome());

//using 2 pointers
function validPar(){
    let str="a s d d s a";
    let left =0;
    let right =str.length -1;
    while(left < right){
        if(!str[left].match(/[a-z0-9]/)){
            left ++
        }
        else if(!str[right].match(/[a-z0-9]/)){
            right--
        }
        else if(str[left] === str[right]){
            left ++;right--

        }else{
            return false
        }
    }

    return true;

}

// console.log(validPar());


function largestOdd() {
    let str = "12345";
    let i = str.length - 1;

    while (i >= 0) {
        let digit = Number(str[i]);
        if (digit % 2 !== 0) {
            // Found an odd digit → return substring up to this index
            
            return str.substring(0, i + 1);
        }
        i--;
    }

    return ""; // no odd digits found
}

console.log(largestOdd()); // Output: "12345"
