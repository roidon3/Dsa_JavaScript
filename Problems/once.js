function once(fn){
    let executed = false;
    let result="";
    return function(...args){
        if(!executed){
            executed=true;
            result=fn(...args)
        }
        return result
    }
}

function sdkInit(){
    console.log("sdk initilized successfully!!!!")
    return 56
}

let oneFun=once(sdkInit)
oneFun()
oneFun()
oneFun()
oneFun()



//example 2 this is easy
let hasRun = false;

function runOnce() {
  if (hasRun) return;

  console.log("Runs only once");
  hasRun = true;
}

runOnce()
runOnce()
runOnce()
runOnce()