class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        if (nums[0] === nums[1]) return nums[0]
        let slow = 0
        let fast = 0
        while (fast < nums.length) {
            slow = nums[slow]
            fast = nums[nums[fast]]
            if (slow === fast) { 
                break
            }
        }
        let slow2 = 0
        while (slow2 !== slow) {
            slow = nums[slow]
            slow2 = nums[slow2]
            if (slow === slow2) {
                return slow
            }
        }
        return -1
    }
}
