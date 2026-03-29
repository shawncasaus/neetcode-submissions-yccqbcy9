class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const seenNums = new Map()
        for (let i = 0; i < nums.length; i++) {
            if (seenNums.get(nums[i])) {
                return nums[i]
            }
            seenNums.set(nums[i], 1)
        }
    }
}
