//normal method

function nextGreaterElement(){
    const arr=[3,4,5]
    const brr=[2,3,4,6,5]
    const result=[]
    for(let i=0;i<arr.length;i++){
        let flag=false;
        let starIndex=brr.indexOf(arr[i])
        for(let j=starIndex +1;j<brr.length;j++){
            if(arr[i] < brr[j]){
                result.push(brr[j])
                flag=true;
                break
            }
        }
        if(!flag){
            result.push(-1)
        }
    }
    return result
}
console.log(nextGreaterElement())//op [4,6,-1]