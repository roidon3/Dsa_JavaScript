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
