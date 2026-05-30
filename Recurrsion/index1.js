//genrate Binary
function generateBinary(n, str = "") {
    if (n === str.length) {
        console.log(str);
        return;
    }
    generateBinary(n, str + "0")
    generateBinary(n, str + "1")
}
console.log(generateBinary(3));

//generate Binary such that no one's are together
function generateBinary1(n, str = "") {
    if (n === str.length) {
        console.log(str);
        return;
    }
    //always add 0
    generateBinary1(n, str + "0")
      // Add 1 only if previous char is not 1
    if (str.length === 0 || str[str.length - 1] !== "1") {
        generateBinary1(n, str + "1")
    }

}
// console.log(generateBinary1(3));
//print no from 1 to n and n to 1
//count digits in a number
//tower of hannoi
//N-queens
//Rat in a maze
//sudoko solver