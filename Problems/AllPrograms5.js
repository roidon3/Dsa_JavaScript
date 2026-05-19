function secLargest(arr) {
    let largest = -Infinity
    let second = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            second = largest;
            largest = arr[i]
        }
        else if (arr[i] !== largest && arr[i] > second) {//Found a number between largest and second
            second = arr[i]
        }
    }
    return second
}
// console.log(secLargest([10, 5, 20, 8, 20]));


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
// console.log(findTopThree([10, 5, 20, 8, 20, 15]));
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
//  Find first repeating character (e.g., "success" → "c")
//   Inline 5 divs in a row without flex/margin/padding (Hint: display: inline-block)
//cenrer a div


//to generate all combinations remove  if (current[current.length - 1] !== "1") { cond keep only   backtrack(current + "1");
function generateBinary(n) {
    const result = [];
    function backtrack(current) {
        // Step 1: If length becomes n, store it
        if (current.length === n) {
            result.push(current);
            return;
        }
        // Step 2: Add "0"
        backtrack(current + "0");
        // Step 3: Add "1" only if previous char is not "1"
        if (current[current.length - 1] !== "1") {
            backtrack(current + "1");
        }
    }
    backtrack("");
    return result;
}

// console.log(generateBinary(3));
//compare two nested obj
//sort car parking
function sortArray(arr) {
    let countA = 0;
    let countM = 0;
    let countB = 0;

    for (let char of arr) {
        if (char === 'a') countA++;
        else if (char === 'm') countM++;
        else if (char === 'b') countB++;
    }

    let result = [];

    while (countA--) result.push('a');
    while (countM--) result.push('m');
    while (countB--) result.push('b');

    return result;
}

const arr = ['a', 'm', 'b', 'm', 'b', 'a', 'a'];

// console.log(sortArray(arr));

//Program to check whether 2 objects are equal or not
function isEqual(obj1, obj2) {
    // Check if both are exactly same / if we pass obj1 and if obj2=obj1 only for this values only it returns true
    if (obj1 === obj2) {
        return true;
    }

    // Check if either is null or not an object
    if (
        obj1 === null ||
        obj2 === null ||
        typeof obj1 !== "object" ||
        typeof obj2 !== "object"
    ) {
        return false;
    }

    // Get keys
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    // Compare number of keys
    if (keys1.length !== keys2.length) {
        return false;
    }
    // Compare each key and value
    for (let key of keys1) {
        // Check key exists in obj2
        if (!keys2.includes(key)) {
            return false;
        }
        // Recursive check for nested objects/arrays
        if (!isEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}

// Example 1
const obj1 = {
    name: "Roidon",
    skills: ["React", "Node"],
    address: {
        city: "Bangalore",
        pin: 560001
    }
};

const obj2 = {
    name: "Roidon",
    skills: ["React", "Node"],
    address: {
        city: "Bangalore",
        pin: 560001
    }
};
// console.log(isEqual(obj1, obj2)); // true
// Example 2
const obj3 = {
    name: "Roidon",
    skills: ["React", "Express"]
};

// console.log(isEqual(obj1, obj3)); // false

//find duplicate object based on id in array of objects

function removeDupNsort(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i].id, arr[i])
    }
    return Array.from(map.values()).sort((a,b)=>a.name.localeCompare(b.name))
    //localeCompare() is used for proper alphabetical string sorting.

}
const arrOfObj = [
    { id: 1, name: "roidon" },
    { id: 2, name: "maxwell" },
    { id: 3, name: "glenn" },
    { id: 1, name: "roidon" },
    { id: 2, name: "maxwell" },
    { id: 5, name: "felix" },
]
console.log(removeDupNsort(arrOfObj));

//Second Method
function removeDuplicates(arr) {
    return arr.filter( (item, index, self) => index === self.findIndex(obj => obj.id === item.id));
}
//using reduce
function removeDuplicates(arr) {
    return arr.reduce((acc, curr) => {
        const exists = acc.find(obj => obj.id === curr.id);
        if (!exists) {
            acc.push(curr);
        }
        return acc;
    }, []);
}
//using plain obj
function removeDuplicates(arr) {
    let obj = {};
    for (let item of arr) {
        obj[item.id] = item;
    }
    return Object.values(obj);
}