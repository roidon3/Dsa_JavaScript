
//insert 0 to end
function moveZerosToEnd(arr) {
    const nonZeros = arr.filter(num => num !== 0); // Get all non-zero elements
    const zeros = Array(arr.length - nonZeros.length).fill(0); // Create an array of zeros
    return nonZeros.concat(zeros); // Combine non-zero elements with zeros
}
// console.log((moveZerosToEnd([1,3,4,0,9,0,])));

//clousure function
function closure() {
    let count = 0;
    return function () {
        count++
        return `count has been called ${count} times`
    }
}
const ddd = closure()
// console.log(ddd());
// console.log(ddd());
// console.log(ddd());
// console.log(ddd());



// deep copy 🔥 “Implement Deep Copy (Deep Clone) in JavaScript”
let obj = { name: "roidon", address: { state: "karnataka", city: "managlore" } }
const { name, address: { state, city } } = obj

function deepCopy(obj) {

    if (obj === null || typeof obj !== 'object') {
        return obj
    }
    //for array
    if (Array.isArray(obj)) {
        return obj.map((ele) => deepCopy(ele))
    }
    //for object

    let newObj = {}
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepCopy(obj[key])
        }
    }
    return newObj
}
let aaa = deepCopy(obj)
// console.log(aaa,"Aaa");


function flattenObject(obj, parentKey = '', result = {}) {
    for (const key in obj) {
        // if (obj.hasOwnProperty(key)) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        const value = obj[key]
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            // Recursively flatten the object
            flattenObject(value, newKey, result);
        } else if (Array.isArray(value)) {
            // Flatten arrays with index keys
            value.forEach((item, index) => {
                flattenObject({ [index]: item }, newKey, result);
            });
        } else {
            // Assign primitive values directly
            result[newKey] = value;
        }
        // }
    }
    return result;
}

// Example usage
const obj1 = {
    A: "12",
    B: 23,
    C: {
        P: 23,
        O: {
            L: 56
        },
        Q: [1, 2]
    }
};

const flattened = flattenObject(obj1);
// console.log(flattened);


//flat an arrray
//const flatArray = nestedArray.flat(); // Default depth is 1
//const flatArray = nestedArray.flat(Infinity); // Flatten all levels
function arrFlat(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(arrFlat(arr[i]))

        } else {
            result.push(arr[i])
        }
    }
    return result

}
// let arr =[1,2,[3,4],[5],9]
// let arr = [1,2,[3,4[5]],[4,6],7]
let arr = [1, 2, [3, [4, 5]], [4, 6], 7];
// console.log(arrFlat(arr));

function deepFreeze(obj){
    let keys=Object.keys(obj);
    for(let key of keys){
        if(typeof obj[key]==="object" && obj[key]!==null){
            deepFreeze(obj[key])
        }
    }
    return Object.freeze(obj)
    
}

const obj = { name: "Alice", details: { age: 25 } };

// deepFreeze(obj);

// obj.details.age = 30; // ❌ Now this won't work

// console.log(obj.details.age); // 25


//lonest word in an string

function longestWord(str) {
    // return str.split(" ").sort((a,b)=>b.length - a.length)[0]
    return str.split(" ").reduce((acc, currele) => currele.length > acc.length ? currele : acc, "")

}
let str = "im roidon and im from managlore";
// console.log(longestWord(str));

//vowel and consonenets
const vowelConst = (str) => {
    let modeifyStr = str.trim().replace(/[^a-zA-Z]/g, "").toLowerCase()
    console.log(modeifyStr, "modeifyStr");
    let vowels = "aeiou"
    let vowelCount = 0
    let consonentCount = 0;
    for (let i of modeifyStr) {
        if (vowels.includes(i)) {
            vowelCount = vowelCount + 1
        }
        else (
            consonentCount = consonentCount + 1
        )
    }
    return { vowelCount, consonentCount }
}

// console.log(vowelConst("i'm roidon kkk 2345"));

// captial only first letter of each word
function captial(str) {
    return str.split(" ").map((ele) => ele[0].toUpperCase() + ele.slice(1)).join(" ")

}
// console.log(captial("i'm roidon from Manglore"));

//give 2 parameter string and serch letter returns how many times its present
function searchChar(str, search) {
    let count = 0
    for (let i of str) {
        if (i.includes(search)) {
            count++
        }
    }
    return count
}
// console.log(searchChar("roidon","r"));


//in string count no alpabet and special char
function countele(str) {
    let alphabet = 0;
    let number = 0;
    let special = 0;
    for (let i of str) {
        if (/[a-zA-Z]/g.test(i)) {
            alphabet++
        }
        else if (/[0-9]/g.test(i)) {
            number++
        } else {
            special++
        }
    }
    return { alphabet, number, special }

}
// console.log(countele("ppp34&*"));

//string is palindrome or not
function palindrome(str) {
    // const formatStr =(str)=>str.replace(/[^a-zA-Z]/g,"")
    let orgStr = str;
    let revStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i]

    }
    return revStr;

}
// console.log(palindrome("malayam"));

//most frequent char
function freqChar(str) {
    let store = {}
    for (let char of str) {
        store[char] = (store[char] || 0) + 1
    }
    let maxFreq = 0;
    let maxChar = null;

    for (let char in store) {
        if (store[char] > maxFreq) {
            maxFreq = store[char];
            maxChar = char;
        }
    }
    return maxChar
}
// console.log(freqChar("aarrrrhb"));

//replace space with -
function replaceWord(str) {
    return str.split(" ").join("-")
}
// console.log(replaceWord("roidon the great"));

//remove duplica char
function duplicateChar(str) {
    let single = "";
    for (let i = 0; i < str.length; i++) {
        if (!single.includes(str[i])) {
            single += str[i]

        }
    }
    return single

}
// console.log(duplicateChar("roidon"));

// count words in string
function countWord(str) {
    return str.split(" ").filter(word => word !== "").length;

}
// console.log(countWord("i'm roidon from managlore"));

//Blocking of main thread

console.log("start");
setTimeout(() => {
    console.log("im settimout")
}, 5000)
console.log("end");
//this code will run for 7 seconds
// block for ~7 seconds
let startDate = Date.now();
while (Date.now() < startDate + 7000) {}

console.log("done");

// least no of coins req
