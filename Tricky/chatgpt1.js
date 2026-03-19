console.log(undefined == null)//true Reason:== does type coercion and treats undefined and null as equal.
console.log(undefined === null)//false reason:==== checks type + value. undefined → type undefined   null → type object
console.log(0.1 + 0.2 === 0.3)//false Reason:floating point precission 0.30000000000000004
console.log([] == false)//true [] → "" → 0   false → 0
console.log([] + []) //"" [] → ""  "" + "" → ""
console.log([] + {}) // "[object Object]" //  [] → ""  {} → "[object Object]"
console.log({} + [])//0 // JS interprets {} as a block, not object. // +[] → 0
console.log(true + true)//2
console.log("5" - 2)//3 //number conversion
console.log("5" + 2) //"52" //+ triggers string concatenation.
console.log(null + 1)//0+1//1
console.log(undefined + 1)//Nan//undefined → NaN
console.log(typeof null)// "object"
console.log(typeof NaN)//console.log(typeof NaN) //Even though it's Not a Number, the type is "number".
console.log(NaN == NaN)//false //Only way to check: //Number.isNaN(NaN)
console.log(Number.isNaN(NaN));//true
console.log([] == ![])//true //![] → false    [] → "" → 0      false → 0   0==0
console.log(1 < 2 < 3)//true 1 < 2 → true   true → 1       1 < 3 → true
console.log(3 > 2 > 1) //false  3 > 2 → true    true → 1       1 > 1 → false
console.log("10" - "5") //5 //Because - forces number conversion.
console.log("10" + "5") //"105" //Because + does string concatenation.
console.log({} + {})//Nan // +{} → NaN       +{} → NaN      NaN + NaN → NaN
console.log("b" + "a" + +"a" + "a") // "baNaNa"//+"a" → NaN // "b" + "a" + NaN + "a" // "baNaNa"
console.log(null == 0) //false //Different coercion rules for comparison vs equality.
console.log(null >= 0) //true//Different coercion rules for comparison vs equality.
console.log([] + 1)//"1"//[] → ""     "" + 1 → "1"
console.log(undefined == undefined)  // true;
console.log(undefined === undefined)  // true;
[1] == 1   // true // JS will try to convert both sides to the same type //[1].toString()  // "1" //"1" == 1 //Number("1") → 1
// [] == []    // false
// [] === []   // false
// Because arrays are objects in JavaScript    👉 And objects are compared by reference (memory address), NOT by value
// [] == 0        // true 
// [] == false    // true 
// [1] == true    // true  //true → 1
// [1] === 1   // false ❌