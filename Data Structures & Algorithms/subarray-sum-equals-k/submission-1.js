class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefixSums = new Map()
        prefixSums.set(0,1)
        let res = 0
        let curSum = 0

        for (let i = 0; i < nums.length; i++) {
            curSum += nums[i]
            const diff = curSum - k
            if (prefixSums.has(diff)) {
                res += prefixSums.get(diff)
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
