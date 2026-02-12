let str = "Hello";

console.log(str[0]);      // H
console.log(str.charAt(1)); // e

let str1 = "JavaScript";

console.log(str1.slice(0, 4));  // Java
console.log(str1.slice(4));     // Script
console.log(str1.slice(-6));    // Script
console.log(str.substring(0, 4)); // Java



console.log(str.toUpperCase()); // HELLO WORLD
console.log(str.toLowerCase()); // hello world


let str2 = "JavaScript";

console.log(str2.includes("Java")); // true
console.log(str.startsWith("Java")); // true
console.log(str.endsWith("Script")); // true
let str3 = "Hello World";

console.log(str3.indexOf("o")); // 4
console.log(str3.indexOf("z")); // -1


let str4 = "Hello World";

console.log(str4.replace("World", "JS")); // Hello JS
let str5 = "a a a";

console.log(str5.replaceAll("a", "b")); // b b b

//trim ,split etc 
