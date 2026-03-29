class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let rows = heights.length
        let cols = heights[0].length
        const flowsAtlantic = new Map()
        const flowsPacific = new Map()
        const flows = []

        function dfs(i,j,prev,visited) {
            if (i < 0 || i >= rows || j < 0 || j >= cols) return;
            if (visited.has(`[${i},${j}]`) || heights[i][j] < prev) {
                return;
            }

            visited.set(`[${i},${j}]`, [i,j])
            const directions = [[1,0],[-1,0],[0,1],[0,-1]]
            for (let [di,dj] of directions) {
                dfs(i+di,j+dj,heights[i][j],visited)
            }
        }

        // check for pacific
        for (let i = 0; i < cols; i++) {
            dfs(0,i,-Infinity,flowsPacific)
        }
        for (let i = 0; i < rows; i++) {
            dfs(i,0,-Infinity,flowsPacific)
        }

        // check for atlantic
        for (let i = 0; i < cols; i++) {
            dfs(rows-1,i,-Infinity,flowsAtlantic)
        }
        for (let i = 0; i < rows; i++) {
            dfs(i,cols-1,-Infinity,flowsAtlantic)
        }

        console.log("flowsAtlantic", flowsPacific)
        console.log("flowsAtlantic", flowsAtlantic)

        flowsAtlantic.forEach((val,key) => {
            if (flowsPacific.has(key)) {
                flows.push(val)
            }
        })

        return flows
    }
}
