class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let p1 = 0
        let p2 = nums.length - 1
        let i = 0
        while (i <= p2) {
            if (nums[i] === 2) {
                const temp = nums[p2]
                nums[p2] = nums[i]
                nums[i] = temp
                p2--
            } else if (nums[i] === 0) {
                const temp = nums[p1]
                nums[p1] = nums[i]
                nums[i] = temp
                p1++
                i++
            } else {
                i++
            }
        }
        return nums
    }
}
