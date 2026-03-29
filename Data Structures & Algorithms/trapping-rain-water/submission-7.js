class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l1 = 0
        let r1 = 1
        let l2 = height.length - 2
        let r2 = height.length - 1
        let volume = 0

        while (r1 <= l2) {
            if (height[r1] < height[l1]) {
                if(height[r1] < height[l1]) {
                    volume += height[l1] - height[r1]
                } else if (height[r1] >= height[l1]) {
                    l1 = r1
                }
                r1++
            } else {
                if(height[l2] < height[r2]) {
                    volume += height[r2] - height[l2]
                } else if (height[l2] >= height[r2]) {
                    r2 = l2
                }
                l2--
            }
        }
        return volume
    }
}