class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (grid.length === 0) return 0
        let rows = grid.length
        let cols = grid[0].length
        const visited = new Set()
        let islands = 0

        function dfs(i, j) {
            // if [i,j] is out of bound, is 0, or is in visited set, return
            if (i < 0 || i >= rows || 
            j < 0 || j >= cols ||
            Number(grid[i][j]) === 0 || visited.has(`[${i},${j}]`)) {
                return;
            }
            visited.add(`[${i},${j}]`)
            dfs(i+1,j)
            dfs(i-1,j)
            dfs(i,j+1)
            dfs(i,j-1)
        }

        // iterate through rows
        for (let i = 0; i < rows; i++) {
            // iterate through columns
            for (let j = 0; j < cols; j++) {
                const value = grid[i][j]
                if (Number(value) === 1 && !visited.has(`[${i},${j}]`)) {
                    islands++
                    // use dfs to update set
                    dfs(i,j)
                }
            }
        }
        return islands
    }
}
