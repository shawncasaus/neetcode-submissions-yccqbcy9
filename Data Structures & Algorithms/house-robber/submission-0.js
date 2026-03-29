class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 0) return 0
        if(nums.length === 1) return nums[0]
        let maxNums = [nums[0], nums[1]]
        let i = 2
        while (i < nums.length) {
            let max = Math.max(maxNums[1], nums[i] + maxNums[0])
            maxNums[0] = maxNums[1]
            maxNums[1] = max
            i++
        }
        return Math.max(maxNums[0], maxNums[1])
    }
}
