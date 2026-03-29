class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    numDistinctIslands(grid) {
        const rows = grid.length
        const cols = grid[0].length
        let distinctIslands = 0
        let visited = new Set()
        const uniqueIslands = []
        let currentIsland = []

        function isUniqueIsland(currentIsland) {
            for (let i = 0; i < uniqueIslands.length; i++) {
                const compareTo = uniqueIslands[i]
                let same = true
                if (compareTo.length !== currentIsland.length) continue
                for (let j = 0; j < compareTo.length; j++) {
                    if (compareTo[j][0] !== currentIsland[j][0] 
                    || compareTo[j][1] !== currentIsland[j][1]) { 
                        same = false
                        break
                    }
                }
                if (same) return false
            }
            return true
        }

        function dfs(i,j) {
            // if out of bounds
            if (i < 0 || i >= rows
            || j < 0 || j >= cols
            || visited.has(`[${i},${j}]`)
            || grid[i][j] === 0) {
                return
            }

            visited.add(`[${i},${j}]`)
            currentIsland.push([i,j])

            dfs(i+1,j)
            dfs(i-1,j)
            dfs(i,j+1)
            dfs(i,j-1)
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1 && !visited.has(`[${i},${j}]`)) {
                    let normalized = []
                    dfs(i,j)
                    let minRow = Infinity;
                    let minCol = Infinity;
                    
                    for (const [r, c] of currentIsland) {
                        minRow = Math.min(minRow, r);
                        minCol = Math.min(minCol, c);
                    }
                    for (const [r,c] of currentIsland) {
                        normalized.push([r-minRow, c-minCol])
                    }
                    normalized = normalized.sort((a,b) => a[0] - b[0]|| a[1] - b[1])
                    if (isUniqueIsland(normalized)) {
                        distinctIslands++
                        uniqueIslands.push(normalized)
                    }
                    currentIsland = []
                }
            }
        }
        return distinctIslands
    }
}
