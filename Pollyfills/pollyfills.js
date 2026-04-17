let arr = [1, 2, 3, 4, 5];

//1. forEach() pollyfill
Array.prototype.myForEach = function (callback) {
    if (!callback) {
        throw Error("undefined is not a function")
    }
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)

    }
};


// console.log(arr.forEach(x => console.log(x)));
// console.log(arr.myForEach(x => console.log(x)));

//2. map() pollyfill
Array.prototype.myMap = function (callback) {
    if (!callback) {
        throw Error("undefined is not a function")
    }
    let result = []
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this))

    }
    return result

};

// console.log(arr.map((ele)=>ele*2))
// console.log(arr.myMap((ele)=>ele*2))

//3. filter() pollyfill
Array.prototype.myFilter = function (callback) {
    if (!callback) {
        throw Error("undefined is not a function")
    }
    let result = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result

}

// console.log(arr.filter((ele) => ele > 2))
// console.log(arr.myFilter((ele) => ele > 2))

//4. reduce() pollyfill

Array.prototype.myReduce = function(callback,initialValue){
      if (!callback) {
        throw Error("undefined is not a function")
    }
    let accumlator = initialValue;
    for(let i=0;i<this.length;i++){
        accumlator = accumlator?callback(accumlator,this[i],i,this) :this[i]
    }
    return accumlator
}

//5. every() pollyfill
Array.prototype.myEvery = function (callback) {
    if (!callback) {
        throw Error("undefined is not a function")
    }

    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false
        }


    }
    return true

}

// console.log(arr.every((ele) => ele > 0))
// console.log(arr.myEvery((ele) => ele > 0))

//6. some() pollyfill
Array.prototype.mySome = function (callback) {
    if (!callback) {
        throw Error("undefined is not a function")
    }

    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return true
        }


    }
    return false

}

// console.log(arr.every((ele) => ele > 6))
// console.log(arr.myEvery((ele) => ele > 6))
