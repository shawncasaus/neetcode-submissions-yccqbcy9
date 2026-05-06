class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length
        const cols = grid[0].length
        const visited = new Set()
        let islands = 0

        function dfs(i,j) {
            if (i < 0 || i >= rows || j < 0 || j >= cols
            || visited.has(`[${i},${j}]`) || Number(grid[i][j]) === 0) {
                return;
            }
            visited.add(`[${i},${j}]`)

            dfs(i+1,j)
            dfs(i-1,j)
            dfs(i,j+1)
            dfs(i,j-1)
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (!visited.has(`[${i},${j}]`) && Number(grid[i][j]) === 1) {
                    islands++
                    dfs(i,j)
                }
            }
        }
        return islands
    }
}
