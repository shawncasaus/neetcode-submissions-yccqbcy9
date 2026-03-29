class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let mostWater = 0
        let p1 = 0;
        let p2 = heights.length - 1
        while (p1 < p2) {
            const height = Math.min(heights[p1], heights[p2])
            const diff = Math.abs(p2 - p1)

            if (heights[p1] < heights[p2]) {
                p1++
            } else {
                p2--
            }
            mostWater = Math.max(height * diff, mostWater)
        }
        return mostWater
    }
}
