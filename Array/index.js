//  Initial Git Setup (if not done before)
//  git config --global user.name "Your Name"
// git config --global user.email "your.email@example.com"

//  Steps to Push Local Project to GitHub
// 1. Open terminal and go to your project folder
// cd path/to/your/project

//  Initialize Git
//  git init

// 3. Check current branch (optional)
// git branch

// git add .
// git commit -m "Initial commit"
// . Create a new repo on GitHub (on the website)
// Go to https://github.com

// Click "New repository"

// Name it (e.g., css-practice)

// Don’t check "Initialize with README"

// Click "Create repository"
// git remote add origin https://github.com/your-username/your-repo-name.git

// 8. Push your code to GitHub
// If your branch is main:
// git push -u origin main

function findele(arr, search) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return `element is found in ${i} position`;
        }
    }
    return -1;
}

// console.log(findele([1,2,3,4,5],9));

//count digit

function countDigit(num) {
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++

    }
    return count
}
// console.log(countDigit(12345));

function removeDuplicate() {
    let arr = [1, 2, 3, 4, 4, 5, 6, 1];
    let duparr = []
    for (let i = 0; i < arr.length; i++) {
        if (!duparr.includes(arr[i])) {
            duparr.push(arr[i])
        }
    }
    return duparr

}
// console.log(removeDuplicate());

function removeEle() {
    let arr = [1, 2, 3, 4, 4, 5, 6, 1];
    let duparr = []
    let serachele = 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !==serachele) {
            duparr.push(arr[i])
        }
    }
    return duparr
}
// console.log(removeEle());

function buySellStocks(arr){
    let leastNo = Infinity;
    let maxNo= 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<leastNo){
            leastNo=arr[i]
        }
        else{
            maxNo=Math.max(maxNo,leastNo-arr[i])
        }

    }
    return maxNo
}

// console.log(buySellStocks([3,1,4,5,6,7,2,3]));

function recur(n){
    if(n==0)return;
    console.log(n);
    recur(n-1)

}
// console.log(recur(5));

function recur2(n) {
    if (n === 0) return;
    recur(n - 1);    // first go deep
    console.log(n);  // then print
}

// recur2(5);

function sumOfNum(n){
    let sum =(n*(n+1))/2
    return sum

}
// console.log(sumOfNum(3));