//Linear Search

function linearSearch(arr, search) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return `element is found in ${i} index`
        }

    }
    return `element ${search} is not found`

}
// console.log(linearSearch([1,2,3,4,5],8));

//Binary Search
function BinarySearch(arr, search) {
    let lp = 0;
    let rp = arr.length-1;

    while (rp >= lp) {
            let mid = Math.floor((lp + rp) / 2);
        if (search === arr[mid]) {
            return `element is found in ${mid} index`

        }
        else if (search < arr[mid]) {
            rp = mid-1

        } else {
            lp =  mid+1

        }
    }
    return "element is not found"

}
// console.log(BinarySearch([1, 2, 3, 4, 5], 1));