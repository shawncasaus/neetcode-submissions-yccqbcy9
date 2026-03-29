class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length
        const cols = grid[0].length
        const traversed = new Set()
        let islands = 0

        function dfs(i,j) {
            // break case
            // if out of bounds
            // if traversed
            // if 0
            if (i < 0 || i >= rows
            || j < 0 || j >= cols
            || traversed.has(`[${i},${j}]`)
            || Number(grid[i][j]) === 0) return;

            // add to traversed
            traversed.add(`[${i},${j}]`)

            // check all paths
            dfs(i+1,j)
            dfs(i-1,j)
            dfs(i,j+1)
            dfs(i,j-1)
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const val = grid[i][j]

                if (Number(val) === 1 && !traversed.has(`[${i},${j}]`)) {
                    islands++
                    dfs(i,j)
                }
            }
        }
        return islands
    }
}
