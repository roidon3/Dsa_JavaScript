function kClosestEle(arr,k,x){
    let left=0;
    let right=arr.length-1;
    while(left<right){
        let mid=Math.floor((left+right)/2);
        if(x-arr[mid]>arr[mid+k]-x){
            left=mid+1
        }else{
            right=mid
        }
    }
    return arr.slice(left,left+k)

}
console.log(kClosestEle([1,2,3,4,5],3,2));
console.log(kClosestEle([1,2,3,4,5,6,7],4,7));

//here we use sliding window + binary search
//here we d0 mid-x and mid+k -x depends on that result we move our window to left or right 
//at the end we will get left point and we slice left and left+k

//additional info
// 1. Why right = mid and NOT mid - 1 or left = mid?
// We are not searching for an element
// We are searching for the best starting index of a window of size k
// So the answer is a range, not a single value.
// if (x - arr[mid] > arr[mid + k] - x)
// This means:
// Left side is worse → move right → left = mid + 1
// Else → current mid could still be the answer
// 💥 Why NOT right = mid - 1?
// If you do:
// right = mid - 1
// 👉 You are throwing away mid
// But in this problem:
// 👉 mid might actually be the correct window start
// So we keep it:
// right = mid