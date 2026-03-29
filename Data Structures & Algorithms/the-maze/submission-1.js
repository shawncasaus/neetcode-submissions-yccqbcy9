class Solution {
    /**
     * @param {number[][]} maze
     * @param {number[]} start
     * @param {number[]} destination
     * @return {boolean}
     */
    hasPath(maze, start, destination) {
        const rows = maze.length;
        const cols = maze[0].length;
        // const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
        const visited = new Set()

        function dfs(i,j) {
            // return false
            if (visited.has(`[${i},${j}]`)) return false
            // return true
            if (i === destination[0] && j === destination[1]) return true

            // update visited
            visited.add(`[${i},${j}]`)

            // check all 4 directions to run the ball
            const directions = [[1,0],[-1,0],[0,1],[0,-1]]
            for (let [di, dj] of directions) {
                // while ball can still roll
                let r = i
                let c = j
                while((r+di) >= 0 && (r+di) < rows
                && (j+dj) >= 0 && (j+dj) < cols
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
