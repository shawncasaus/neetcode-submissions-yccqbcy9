class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsHash = new Map()

        for (let i = 0; i < nums.length; i++) {
            const seeking = target - nums[i]
            if (numsHash.has(seeking)) {
                return [numsHash.get(seeking), i]
            } else {
                numsHash.set(nums[i], i)
            }
        }
        return [-1,-1]
    }
}
