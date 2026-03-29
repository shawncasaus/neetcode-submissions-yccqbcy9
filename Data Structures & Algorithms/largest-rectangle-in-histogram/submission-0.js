class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let heightsStack = []
        let max = 0
        for (let i = 0; i < heights.length; i++) {
            // console.log(heightsStack)
            if (heightsStack.length === 0) {
                heightsStack.push([i, heights[i]])
            } else if (heightsStack[heightsStack.length - 1][1] < heights[i]) {
                heightsStack.push([i, heights[i]])
            } else if (heightsStack[heightsStack.length - 1][1] > heights[i]) {
                let currentArea = heightsStack[heightsStack.length - 1][1] * ((i) - heightsStack[heightsStack.length - 1][0])
                let popped = heightsStack.pop()
                heightsStack.push([popped[0], heights[i]])
                max = Math.max(currentArea, max)
            }
        }
        console.log(heightsStack)
        let i = heightsStack.length - 1
        while (heightsStack.length > 0) {
            let currentArea = heightsStack[i][1] * ((heights.length) - heightsStack[i][0])
            console.log(currentArea)
            max = Math.max(currentArea, max)
            heightsStack.pop()
            i--
        }
        return max
    }
}
