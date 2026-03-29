class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let p1 = 0
        let p2 = 0
        let p3 = nums.length - 1
        while (p1 < p3 && p2 < nums.length) {
            if (nums[p2] === 0) {
                const temp = nums[p1]
                nums[p1] = nums[p2]
                nums[p2] = temp
                p1++
            } else if (nums[p2] === 2) {
                const temp = nums[p3]
                nums[p3] = nums[p2]
                nums[p2] = temp
                p3--
            } else {
                p2++
            }
        }
        return nums
    }
}
