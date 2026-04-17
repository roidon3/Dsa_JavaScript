let p1 = new Promise((res, rej) => {
    res(21)
})

let p2 = new Promise((res, rej) => {
    res(87)
})

let p3 = new Promise((res, rej) => {
    res(76)
})


Promise.myAll=function(promises){
    return new Promise((res,rej)=>{
        let result =[]
        let completedPromise =0;
        if(promises.length ===0){
            res(result)
            return
        }
        promises.forEach((item,index)=>{
            Promise.resolve(item).then((val)=>{
                result[index]=val;
                completedPromise+=1
                if(completedPromise ===promises.length){
                    res(result)
                }

            }).catch(err=>rej(err))
        })
    })
}

Promise.all([p1,p2,p3]).then((val)=>console.log(val,"resolved promise")).catch(err=>console.log(err))
Promise.myAll([p1,p2,p3]).then((val)=>console.log(val,"resolved promise")).catch(err=>console.log(err))