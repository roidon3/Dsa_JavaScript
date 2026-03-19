function findPeak(arr){
    let left =0;
    let right =arr.length-1;
    while(left<right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]<arr[mid+1]){
            left=mid+1
        }else{
            right=mid
        }

    }
    return left

}
console.log(findPeak([1,2,3,1]));
//usually we write <= in while condition in binary serach but here we dont write = because we dont do mid+1 and aslo we know that when
//left === right we are in same ele and that ele is the peak element