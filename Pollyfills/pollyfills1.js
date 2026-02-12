let p1 = new Promise((res, rej) => {
    res(21)
})

let p2 = new Promise((res, rej) => {
    res(87)
})

let p3 = new Promise((res, rej) => {
    res(76)
})

// let p4 = new Promise((res, rej) => {
//     rej("promise p4 is rejected")
// })

// let p5 = new Promise((res, rej) => {
//     rej("promise p4 is rejected")
// })

Promise.myAll = function (promises) {
    return new Promise((res, rej) => {
        let result = []
        let completedPromise = 0;
        if (promises.length === 0) {
            res(result)
            return
        }
        promises.forEach((item, index) => {
            Promise.resolve(item).then((val) => {
                result[index] = val
                completedPromise = completedPromise + 1;
                if (promises.length === completedPromise) {
                    res(result)
                }
            }).catch((err) => rej(err))
        })

    })
}

// Promise.all([p1,p2,p3]).then((val)=>console.log(val))
// Promise.myAll([p1,p2,p3]).then((val)=>console.log(val))


Promise.myAllSettled = function (promises) {
    return new Promise((res, rej) => {
        let result = []
        let completedPromise = 0;
        if (promises.length === 0) {
            res(result)
            return
        }
        promises.forEach((item, index) => {
            Promise.resolve(item)
                .then((val) => {
                    result[index] = { status: "fullfilled", value: val }

                })
                .catch((err) => result[index] = { status: "rejected", reason: err })
                .finally(() => {
                    completedPromise = completedPromise + 1;
                    if (promises.length === completedPromise) {
                        res(result)
                    }
                })
        })

    })
}

// Promise.allSettled([p1, p2, p3,p4]).then((val) => console.log(val))
// Promise.myAllSettled([p1, p2, p3,p4]).then((val) => console.log(val))


Promise.myRace = function (promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            return
        }
        promises.forEach((item) => {
            Promise.resolve(item)
                .then(resolve)
                .catch(reject)
        })

    })
}

// Promise.race([p1, p2, p3]).then((val) => console.log(val))
// Promise.myRace([p1, p2, p3]).then((val) => console.log(val))



Promise.myAny = function (promises) {
    return new Promise((resolve, reject) => {
        let errors = {};
        let rejetedCount = 0;
        if (promises.length === 0) {
            reject(new AggregateError([], 'All promises were rejected'));
            return
        }
        promises.forEach((item, index) => {
            Promise.resolve(item)
                .then(resolve)
                .catch((err) => {
                    errors[index] = err;
                    rejetedCount++;
                    if (rejetedCount === promises.length) {
                        reject(new AggregateError(errors, "all Promises were rejected"))
                    }
                })
        })

    })
}

// Promise.any([p1, p2, p3, p4]).then((val) => console.log(val))
// Promise.myAny([p1, p2, p3, p4]).then((val) => console.log(val))



Array.prototype.myFlat = function (depth = 1) {
    let result = [];
    function flat(arr, depth) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && depth > 0) {
                flat(arr[i], depth - 1)

            } else {
                result.push(arr[i])
            }
        }

    }
    flat(this, depth)
    return result

}
let arr1 = [1, 2, [3,[ 4]], 5]
console.log(arr1.flat(2), "org flat");
console.log(arr1.myFlat(2), "my flat");