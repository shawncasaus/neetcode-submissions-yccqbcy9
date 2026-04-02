class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length
        const cols = grid[0].length
        const visited = new Set()
        let maxArea = 0

        function dfs(i,j) {
            // return case
            if (i<0 || i>=rows
            || j<0 || j>=cols
            || visited.has(`[${i},${j}]`)
            || grid[i][j] === 0) {
                return 0;
            }

            visited.add(`[${i},${j}]`)
            let currArea = 1

            currArea += dfs(i+1,j)
            currArea += dfs(i-1,j)
            currArea += dfs(i,j+1)
            currArea += dfs(i,j-1)

            return currArea
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1 && !visited.has(`[${i},${j}]`)) {
                    maxArea = Math.max(maxArea, dfs(i,j))
                }
            }
        }
        return maxArea
    }
}
