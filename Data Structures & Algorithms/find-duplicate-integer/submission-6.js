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
            console.log('slow', slow)
            fast = nums[fast]
            console.log('fast1', fast)
            fast = nums[fast]
            console.log('fast2', fast)
            if (nums[slow] === nums[fast]) { 
                console.log('nums[slow]', nums[slow])
                console.log('nums[fast]', nums[fast])
                return fast
            }
        }
        return -1
    }
}
