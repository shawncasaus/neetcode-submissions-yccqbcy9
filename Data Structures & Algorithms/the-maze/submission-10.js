class Solution {
    /**
     * @param {number[][]} maze
     * @param {number[]} start
     * @param {number[]} destination
     * @return {boolean}
     */
    hasPath(maze, start, destination) {
        const cols = maze.length
        const rows = maze[0].length
        const visited = new Set()

        function dfs(i,j) {
            if (visited.has(`[${i},${j}]`)) return false
            if (i === destination[0] && j === destination[1]) return true

            visited.add(`[${i},${j}]`)

            const directions = [[1,0],[-1,0],[0,1],[0,-1]]
            for (let [di,dj] of directions) {
                let c = i
                let r = j
                while ((c+di) >= 0 && (c+di) < cols
                && (r+dj) >= 0 && (r+dj) < rows
                && maze[c+di][r+dj] === 0) {
                    c += di
                    r += dj
                }
                if (dfs(c,r)) return true
            }
            return false
        }

        
        return dfs(start[0],start[1])
    }
}
