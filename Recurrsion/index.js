//function calls itself is called recurrsion to solve smalller version of same problem
// function rec(){
//     rec()
// }

// 2 Main parts in recurssion
// 1.Base case - stop condition when to stop
// 2.Recurssive case  - part where function calls itself
function rec(n) {
    if (n == 0) {
        return "done"
    }
    console.log(n);
    rec(n - 1)

}
// console.log(rec(6));

//Sum of first N natural number
function sumOfNaturalNo(n, sum = 0) {
    if (n === 0) return sum
    return sumOfNaturalNo(n - 1, sum + n)
}
// console.log(sumOfNaturalNo(5));

//Factorial
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1
    }
    return n * factorial(n - 1)

}
// console.log(factorial(5));


//Power of two
function isPowerOfTwo(n) {
    if (n === 1)
        return true

    else if (n % 2 === 1 || n === 0) {
        return false
    }
    return isPowerOfTwo(n / 2)

}
// console.log(isPowerOfTwo(24));

//fibbonaci series
function fibbonaci(n){
    if(n<=1)return n;
    return fibbonaci(n-1)+fibbonaci(n-2)
}
// console.log(fibbonaci(8));

//fibbonaci series to print NO
function fibbonaciNo(n,a=0,b=1){
    if(n==0)return ;
    console.log(a)
    fibbonaciNo(n-1,b,a+b)
}
console.log(fibbonaciNo(8));

