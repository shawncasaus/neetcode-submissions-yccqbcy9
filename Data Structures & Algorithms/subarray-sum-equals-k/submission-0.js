class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefixSums = new Map()
        prefixSums.set(0,1)
        let curSum = 0
        let res = 0

        for (let i = 0; i < nums.length; i++) {
            curSum += nums[i]
            const needsToRemove = curSum - k
            if (prefixSums.has(needsToRemove)) {
                res += prefixSums.get(needsToRemove)
            }
            if (prefixSums.has(curSum)) {
                prefixSums.set(curSum, prefixSums.get(curSum) + 1)
            } else {
                prefixSums.set(curSum, 1)
            }
        }

        return res
    }
}
