class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        if (nums[0] === nums[1]) return nums[0]
        let slow = nums[0]
        let fast = nums[0]
        while (fast < nums.length) {
            slow = nums[slow]
            fast = nums[fast]
            fast = nums[fast]
            if (nums[slow] === nums[fast]) { 
                return nums[fast]
            }
        }
        return -1
    }
}
