class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let rows = heights.length
        let cols = heights[0].length
        const flows = []
        let isAtlantic = false
        let isPacific = false
        let traversed = new Set()

        function dfs(i,j,prev) {
            // if atlantic
            if(i >= rows || j >= cols) {
                isAtlantic = true
                return;
            }
            // if pacific
            if (i < 0 || j < 0) {
                isPacific = true
                return;
            }
            // if visited
            if (traversed.has(`[${i},${j}]`) || heights[i][j] > prev) {
                return;
            }

            traversed.add(`[${i},${j}]`)
            const directions = [[1,0],[-1,0],[0,1],[0,-1]]
            for (let [di,dj] of directions) {
                dfs(i+di,j+dj,heights[i][j])
                if (isAtlantic && isPacific) return
            }
            traversed.delete(`[${i},${j}]`)
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                isAtlantic = false
                isPacific = false
                traversed.clear()
                dfs(i,j,Infinity)
                if (isAtlantic && isPacific) {
                    flows.push([i,j])
                }
            }
        }
        return flows
    }
}
