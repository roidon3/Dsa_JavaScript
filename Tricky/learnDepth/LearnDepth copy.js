//remove duplicate elements from array
function duplicate(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
let arr = [1, 2, 3, 3, 4, 1]
let filArr = arr.filter((item,index)=>(arr.indexOf(item)==index))
// console.log(filArr,"filArr");
// console.log(duplicate(arr));

function Palindrome(){
    let str ="malayalam"
    let revStr = ""
    for(let i=str.length-1;i>=0;i--){
        revStr+=str[i]
    }
    console.log(revStr);
    return str==revStr?true:false;
}
// console.log(Palindrome());

function isPalindromeOptimized(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // Not a palindrome
        }
        left++;
        right--;
    }
    return true;
}

// console.log(isPalindromeOptimized("madam")); // ✅ true
// console.log(isPalindromeOptimized("hello")); // ❌ false
// console.log(isPalindromeOptimized("racecar")); // ✅ true

//factorial
function factorial(){
    num = 4;
    factorial =1
    for(let i=1;i<=num;i++){
        factorial *= i
        
    }
    return factorial
}
// console.log(factorial());


//longest woed in a sentence
function longest(str){
    return str.split(" ").reduce((acc,curr)=>curr.length > acc ?acc :curr)

}
// console.log(longest("i'm roidon from managlore"));
function findSmallestWord() {
    const sentence = "Find the smallest word";
    const words = sentence.split(' ');
    let smallestWord = words[0];
  
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < smallestWord.length) {
            smallestWord = words[i];
        }
    }
    console.log(smallestWord);
  }
  
//   findSmallestWord();

//max ele in arr
function maxEle(arr){
    let max= arr[0]
    for(let i=0;i<arr.length ;i++){
        if(max< arr[i]){
            max=arr[i]
        }
    }
    return max

}
// console.log(maxEle([1,2,3,4,5]))
//no is prime
function isPrime(n) {
    if (n < 2) return false; // Prime numbers are >= 2

    for (let i = 2; i < n; i++) { // Check divisibility from 2 to n-1
        if (n % i === 0) return false; // Not a prime if divisible
    }
    return true; // If no divisors found, it's prime
}
// console.log(isPrime(7));



function fibonacciSequence(numTerms) {
    if (numTerms <= 0) {
        return [];
    } else if (numTerms === 1) {
        return [0];
    }

    const sequence = [0, 1];

    for (let i = 2; i < numTerms; i++) {
        const nextFibonacci = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextFibonacci);
    }

    return sequence;
}

// Example usage:
const numTerms = 10;
const fibonacciSeries = fibonacciSequence(numTerms);
// console.log(fibonacciSeries); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//count no of 1's
function one(){
    let arr=[1,2,1,1,2,3,1,1,1,1]
    let count =0;
    let maxOne = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1){
            count ++
            maxOne=Math.max(maxOne,count)
        }else{
            count=0
        }
    }
return maxOne
}
// console.log(one());

const longestConsecutiveSequence = (nums) => {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums); // Store all numbers for quick lookup
    let maxLength = 0;

    for (let num of numSet) {
        // Check if this number is the start of a sequence
        if (!numSet.has(num - 1)) { 
            let currentNum = num;
            let currentLength = 1;

            // Count consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }

            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
};

// Test cases
// console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])); // Output: 4 (Sequence: 1,2,3,4)
// console.log(longestConsecutiveSequence([9, 1, 4, 7, 3, 2, 6, 5])); // Output: 6 (Sequence: 1,2,3,4,5,6)
// console.log(longestConsecutiveSequence([])); // Output: 0



//16. Write a function that reverses the order of words in a sentence without using built-in methods
const reverseWords = (sampleString) => {
    return sampleString.split(" ").reverse()
 

};

// console.log(reverseWords("learndepth is awesome"));

2
//20. Find the 2nd largest element from a given array ? [100,20,112,22]
//22. Find pairs from given input ? input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; input2 = 10; output = [[4, 6], [3, 7], [2, 8], [1, 9]
