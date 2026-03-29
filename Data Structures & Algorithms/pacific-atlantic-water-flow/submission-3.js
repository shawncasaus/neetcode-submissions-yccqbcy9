class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let rows = heights.length
        let cols = heights[0].length
        const flowsAtlantic = new Set()
        const flowsPacific = new Set()
        let traversed = new Set()
        const flows = []

        function dfs(i,j,prev,isAtantic) {
            // break case
            if (traversed.has(`[${i},${j}]`) || heights[i][j] < prev) {
                return;
            } else if (heights[i][j] >= prev) {
                (isAtantic) ? flowsAtlantic.add(`[${i},${j}]`) : flowsPacific.add(`[${i},${j}]`)
            }

            traversed.add(`[${i},${j}]`)
            const directions = [[1,0],[-1,0],[0,1],[0,-1]]
            for (let [di,dj] of directions) {
                dfs(i+di,j+dj,heights[i][j],isAtantic)
            }
            traversed.delete(`[${i},${j}]`)
        }

        // check for atlantic
        for (let i = 0; i < cols; i++) {
            traversed.clear()
            dfs(0,i,-Infinity,true)
        }
        for (let i = 0; i < rows; i++) {
            traversed.clear()
            dfs(i,0,-Infinity,true)
        }

        console.log("flowsAtlantic", flowsAtlantic)

        return flows
    }
}
