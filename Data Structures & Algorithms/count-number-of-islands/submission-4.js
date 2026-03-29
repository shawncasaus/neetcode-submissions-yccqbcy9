class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (grid.length === 0) return 0
        const cols = grid.length
        const rows = grid[0].length
        let islands = 0
        const visited = new Set()

        function dfs(i,j) {
            // break case
            // if i or j is out of bounds
            // if grid[i,j] is in visited
            // if grid[i,j] finds a 0
            if (i < 0 || i >= cols
            || j < 0 || j >= rows
            || visited.has(`[${i},${j}]`)
            || Number(grid[i][j]) === 0) {
                return;
            }
            // update visited set
            visited.add(`[${i},${j}]`)
        
            // recursive calls
            dfs(i+1,j)
            dfs(i-1,j)
            dfs(i,j+1)
            dfs(i,j-1)
        }

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const val = grid[i][j]
                if (Number(val) === 1 && !visited.has(`[${i},${j}]`)) {
                    islands++
                    dfs(i,j) 
                    // or bfs
                }
            }
        }
        return islands
    }
}
