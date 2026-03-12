function rottenOranges(grid) {
    let m = grid.length;//no of rows
    let n = grid[0].length//no of columns
    let queue = []
    //here we are pushing the rotten oranges to the queue
    for (let i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j,0])//3rd parametr is minute
            }
        }
    }
    let maxMinutes = 0
    //mark the adjacent node as rotten and push in queue till its not empty
    while (queue.length) {
        // console.log(grid[0])
        // console.log(grid[1])
        // console.log(grid[2])
        // console.log("-------------------");
        let [x, y,min] = queue.shift();
        if (x > 0 && grid[x - 1][y] === 1) {
            grid[x - 1][y] = 2
            queue.push([x - 1,y,min+1])
        }
        if (x < m - 1 && grid[x + 1][y] === 1) {
            grid[x + 1][y] = 2
            queue.push([x + 1,y,min+1])
        }

        if (y < n-1 && grid[x][y + 1] === 1) {
            grid[x][y + 1] = 2
            queue.push([x,y + 1,min+1])
        }
                if (y >0 && grid[x][y - 1] === 1) {
            grid[x][y - 1] = 2
            queue.push([x,y - 1,min+1])
        }
        maxMinutes= Math.max(min,maxMinutes)
    }
    for (let i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                return -1
            }

        }
    }
    return maxMinutes
}
console.log(rottenOranges([[2, 1, 1], [1, 1, 0], [0, 1, 1]]));