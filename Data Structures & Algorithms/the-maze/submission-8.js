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
            // if the stopped ball has already been visted then dfs path failed
            if (visited.has(`[${i},${j}]`)) return false
            // if destination is found then dfs path is success
            if (i === destination[0] && j === destination[1]) return true

            // add stopped ball to visited set
            visited.add(`[${i},${j}]`)

            // check all directions
            const directions = [[1,0],[-1,0],[0,1],[0,-1]]
            for (let [di, dj] of directions) {
                // iterables
                let r = i
                let c = j

                // move ball until it stops
                while ((r+di) >= 0 && (r+di) < rows
                && (c+dj) >= 0 && (c+dj) < cols
                && maze[r+di][c+dj] === 0) {
                    r += di
                    c += dj
                }

                // check recursively if any paths lead to dest
                if (dfs(r,c)) return true
            }
            return false
        }



        return dfs(start[0],start[1])
    }
}
