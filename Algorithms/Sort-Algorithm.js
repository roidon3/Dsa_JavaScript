//bubblesort
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }

        }
    }
    return arr

}
// console.log(bubbleSort([3, 2, 4, 5, 1]));

//selection sort
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        // Find the minimum element in the unsorted part
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the found minimum with the first element of the unsorted part
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// console.log(selectionSort([5, 3, 8, 4, 2])); // 👉 Output: [2, 3, 4, 5, 8]


//insertion sort cards example
//one card is compared with the rest os the card
//namste js expamle
function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;

        // Move elements greater than current to one position ahead
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert current at the correct position
        arr[j + 1] = current;
    }

    return arr;
}

// console.log(insertionSort([5, 3, 8, 4, 2])); // 👉 Output: [2, 3, 4, 5, 8]


//Merge sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let lp = 0;
    let rp = 0;

    while (lp < left.length && rp < right.length) {
        if (left[lp] < right[rp]) {
            result.push(left[lp]);
            lp++;
        } else {
            result.push(right[rp]);
            rp++;
        }
    }

    return result.concat(left.slice(lp)).concat(right.slice(rp));
}


console.log(mergeSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]


// 🔸 The merge() function is called when both left and right subarrays returned from recursion each have a single element.