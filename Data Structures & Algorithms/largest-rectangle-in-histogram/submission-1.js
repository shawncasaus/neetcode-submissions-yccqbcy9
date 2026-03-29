class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let heightsStack = []
        let max = 0
        for (let i = 0; i < heights.length; i++) {
            let start = i
            while(heightsStack.length > 0 && heightsStack[heightsStack.length - 1][1] > heights[i]) {
                const popped = heightsStack.pop();
                max = Math.max(max, popped[1] * (i - popped[0]));
                start = popped[0];
            }
            heightsStack.push([start, heights[i]])
        }
        let i = heightsStack.length - 1
        while (heightsStack.length > 0) {
            let currentArea = heightsStack[i][1] * ((heights.length) - heightsStack[i][0])
            max = Math.max(currentArea, max)
            heightsStack.pop()
            i--
        }
        return max
    }
}
