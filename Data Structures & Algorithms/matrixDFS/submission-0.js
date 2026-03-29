class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        const rows = grid.length
        const cols = grid[0].length
        const traversed = new Set()

        function canTraverse(c,r) {
            if (c < 0 || c >= rows 
                || r < 0 || r >= cols
                || traversed.has(`[${c},${r}]`)
                || grid[c][r] === 1) {
                return true
            }
            return false
        }

        function dfs(i,j) {
            if (canTraverse(i,j)) return 0
            if (i === rows-1 && j === cols-1) return 1

            traversed.add(`[${i},${j}]`)

            let paths = 0
            paths += dfs(i+1,j)
            paths += dfs(i-1,j)
            paths += dfs(i,j+1)
            paths += dfs(i,j-1)
            traversed.delete(`[${i},${j}]`)
            return paths
        }

        return dfs(0,0)
    }
}
