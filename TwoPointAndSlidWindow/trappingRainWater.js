
//so basically to hold water we need left and right boundry
//we need to calculate the max boundry in left and right ,then min(maxBounbry[left],maxBoundry(right))-height of the container


function tappingRainWater(arr) {
    //here we calculate the max value in the left hand side 
    let maxL = []
    maxL[0] = arr[0]
    for (let i = 1; i < arr.length; i++) {
        maxL[i] = Math.max(maxL[i - 1], arr[i])

    }
    //here we calculate max value for right hand side
    let maxR = []
    maxR[arr.length - 1] = arr[arr.length - 1]
    for (let j = arr.length - 2; j >= 0; j--) {
        maxR[j] = Math.max(arr[j], maxR[j+1])

    }
    //here we rae using the formula min(left[max],right[max])-height;
    let ans=0
        // for (let i = 0; i < arr.length; i++) {
        //     ans=ans+(Math.min(maxL[i],maxR[i])-arr[i])
        // }
        // there might be some scnerio it may go less than 0
           for (let i = 0; i < arr.length; i++) {
            let waterTrapped =ans+(Math.min(maxL[i],maxR[i])-arr[i])
            ans=waterTrapped <0 ?0 :waterTrapped;
        }

    return ans

}
console.log(tappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));