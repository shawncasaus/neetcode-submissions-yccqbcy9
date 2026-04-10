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
            //break cases

            // been here
            if (visited.has(`[${i},${j}]`)) return false
            // found destination
            if (i === destination[0] && j === destination[1]) return true

            //update visited
            visited.add(`[${i},${j}]`)

            // move ball in all 4 directions until it has to stop
            const directions = [[1,0],[-1,0],[0,1],[0,-1]]
            for (let [di,dj] of directions) {
                // move while in bounds
                let r = i
                let c = j
                while ((r+di) >= 0 && (r+di) < rows
                && (c+dj) >=0 && (c+dj) < cols
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
