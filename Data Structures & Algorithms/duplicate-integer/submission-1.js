class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const dulicates = new Set()
        for(let i = 0; i < nums.length; i++) {
            if (dulicates.has(nums[i])) {
                return true
            }
            dulicates.add(nums[i])
        }
        return false
    }
}
