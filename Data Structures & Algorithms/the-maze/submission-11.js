class Solution {
    /**
     * @param {number[][]} maze
     * @param {number[]} start
     * @param {number[]} destination
     * @return {boolean}
     */
    hasPath(maze, start, destination) {
        const rows = maze.length
        const cols = maze[0].length
        const visited = new Set()

        function dfs(i,j) {
            if (visited.has(`[${i},${j}]`)) return false
            if (i === destination[0] && j === destination[1]) return true

            visited.add(`[${i},${j}]`)

            const directions = [[1,0],[-1,0],[0,1],[0,-1]]

            for (let [di,dj] of directions) {
                let r = i
                let c = j
                while ((r+di) >= 0 && (r+di) < rows
                && (c+dj) >= 0 && (c+dj) < cols
                && maze[r+di][c+dj] === 0) {
                    r += di
                    c += dj
                }
                if (dfs(r,c)) return true
            }
            return false
        }

        return dfs(start[0],start[1])
    }
}
