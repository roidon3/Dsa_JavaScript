//1. fizzBuzz
function fizzBuzz() {

    for (let i = 1; i <= 50; i++) {
        let output = "";
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        console.log(output || i)
    }

}
// console.log(fizzBuzz());

//2.palindrome 2 pointers
function palindrome(str) {
    let start = 0;
    let end = str.length - 1
    while (start < end) {
        if (str[start] !== str[end]) {
            return false
        }
        start++
        end--
    }
    return true

}
// console.log(palindrome("malayalam"));

//3.move zeros to end
function zeroToEnd(arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[index] = arr[i]
            index++;
        }
    }
    for (let i = index; i < arr.length; i++) {
        arr[i] = 0
    }
    return arr

}
// console.log(zeroToEnd([1, 2, 0, 0, 3, 0, 4]));

//4.length of the word
function wordLength(str) {
    str = str.trim();
    let count = 0
    for (i = 0; i < str.length; i++) {
        if (str[i] == " " && str[i + 1] !== " " && i + 1 < str.length) {
            count++
        }
    }
    return count + 1

}
// console.log(wordLength(" i'm roidon from manglore  "));


//5.length of longest word
function longestWord(str) {
    let currentWord = "";
    let longestWord = "";
    str = str.trim()
    str = str + " "
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            currentWord += str[i]

        } else {
            if (longestWord.length < currentWord.length) {
                longestWord = currentWord
            }
            currentWord = " "
        }
    }
    return longestWord

}
// console.log(longestWord("i'm roidon from manglore"));

//6.captalize first letter

function captalize(str) {
    let word = str.trim().split(" ")
    for (let i = 0; i < word.length; i++) {
        word[i] = word[i][0].toUpperCase() + word[i].slice(1)
    }
    return word.join(" ")

}
// console.log(captalize("i'm roidon from manglore"));


//7. first non-repeating char
function nonReap(str) {
    let store = {}
    for (char of str) {
        store[char] = (store[char] || 0) + 1;
    }
    for (char of str) {
        if (store[char] === 1) {
            return char
        }
    }
    return null

}
// console.log(nonReap("swiss"));

//8.most repeating char
function mostReap(str) {
    let store = {}
    let maxCount = 0;
    let maxChar = "";
    for (char of str) {
        store[char] = (store[char] || 0) + 1;
    }
    for (char of str) {
        if (store[char] > maxCount) {
            maxCount = store[char]
            maxChar = char
        }

    }
    return maxChar

}
console.log(mostReap("swiss"));
//5.chunks of array