class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let lower = 0
        let upper = nums.length -1
        while (lower < upper) {
            let mid = Math.floor ((lower + upper) / 2)
            if (nums[mid] < target) {
                lower = mid + 1
            } else if (nums[mid] > target) {
                upper = mid
            } else {
                return mid
            }
        }
        return -1
    }
}
