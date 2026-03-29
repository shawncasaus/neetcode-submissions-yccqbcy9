class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        let minDifference = Infinity;
        let l = 0
        let r = k - 1
        nums = nums.sort((a,b) => a - b)
        while (r < nums.length) {
            minDifference = Math.min(minDifference, nums[r] - nums[l])
            l++
            r++
        }
        return minDifference;
    }
}
