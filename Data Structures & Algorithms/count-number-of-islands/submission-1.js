class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (grid.length === 0) return 0
        let rows = grid.length
        let cols = grid[0].length
        let islands = 0
        const visited = new Set()

        function dfs(i,j) {
            // break case
            // i is out of bounds
            // j is out of bounds
            // grid[i,j] is in visited
            // grid[i,j] === 0
            if (i < 0 || i >= rows || j < 0 || j >= cols || 
            visited.has(`[${i},${j}]`) || Number(grid[i][j]) === 0) {
                return;
            }
            // in order traversal update visited
            visited.add(`[${i},${j}]`)

            // recursive traversal
            dfs(i+1,j)
            dfs(i-1,j)
            dfs(i,j+1)
            dfs(i,j-1)
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const val = grid[i][j]
                if (Number(val) === 1 && !visited.has(`[${i},${j}]`)) {
                    islands++
                    // iterate through islands and update visited array
                    dfs(i,j)
                }
            }
        }
        return islands
    }
}
