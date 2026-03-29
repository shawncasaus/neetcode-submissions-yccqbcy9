class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const maxNums = [0, 0]
        let i = 0
        while (i < nums.length) {
            let max = Math.max(maxNums[1], nums[i] + maxNums[0])
            maxNums[0] = maxNums[1]
            maxNums[1] = max
            i++
        }
        return Math.max(maxNums[0], maxNums[1])
    }
}
