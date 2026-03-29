class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const duplicateSet = new Set()
        for (let i = 0; i < nums.length; i++) {
            if (duplicateSet.has(nums[i])) {
                return nums[i]
            } else {
                duplicateSet.add(nums[i])
            }
        }
        return -1
    }
}
