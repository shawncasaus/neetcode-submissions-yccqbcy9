class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = new Map()
        for (let i = 0; i < nums.length; i++) {
            const seeking = target - nums[i]
            if (seen.has(seeking)){
                return [seen.get(seeking), i]
            }
            if (!seen.has(nums[i])) {
                seen.set(nums[i], i)
            }
        }
    }
}
