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
            // break cases
            // if ball has stopped here before
            if (visited.has(`[${i},${j}]`)) return false
            // if ball has stopped on destination
            if (i === destination[0] && j === destination[1]) return true

            // add stopped ball to visited set
            visited.add(`[${i},${j}]`)

            //iterate in all directions
            const directions = [[1,0],[-1,0],[0,1],[0,-1]]
            for (let [di, dj] of directions) {
                let c = i
                let r = j

                // move ball in a direction
                while ((c+di) >= 0 && (c+di) < cols
                && (r+dj) >= 0 && (r+dj) < rows
                && maze[c+di][r+dj] === 0) {
                    c += di
                    r += dj
                }
                // recursively check if we find a destination
                if (dfs(c,r)) return true
            }
            return false
        }

        // run dfs on where the ball starts to find a valid path to destination
        return dfs(start[0], start[1])
    }
}
