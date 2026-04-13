//rotate 2D array clockwise
function rotateMatrix(matrix){
    let n = matrix.length;
    let rotated = new Array(n).fill(0).map(()=>new Array(n).fill(0))
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            // rotated[j][n-1-i]=matrix[i][j]//clockwise
            // rotated[n - 1 - j][i] = matrix[i][j];//anticlockwise
            // rotated[j][i]=matrix[i][j]//transpose
        }
    }
    return rotated
}
let m = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];
  
  let rotatedMatrix = rotateMatrix(m);
//   console.log(rotatedMatrix);



function rotateArray(arr, k) {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

//check 2 arrays are equal
function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}
// console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // true
// console.log(arraysEqual([1, 2, 3], [1, 2, 4])); // false

 // function rotateArr(){
  //   let m = [
  //       [0, 1, 2],
  //       [3, 4, 5],
  //       [6, 7, 8],
  //     ];
  //     let temp=m[0][0]
  //     for(let i=0;i<m.length-1;i++){
  //       for(let j=0;j>m.length-1-i;j++){

  //           if(m[i]>m[i+1]){
  //               temp=m[i+1]
                
  //           }
  //       }
  //     }
  //     return temp

  // }
  // console.log(rotateArr())



