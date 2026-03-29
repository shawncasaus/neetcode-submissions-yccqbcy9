class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        nums = nums.sort((a,b) => a - b)
        let p1 = 0
        let p2 = nums.length - 1
        while (p1 < p2) {
            const sum = nums[p1] + nums[p2]
            if (sum < target) {
                p1++
            } else if (sum > target) {
                p2--
            } else {
                return [p1,p2]
            }
        }
    }
}
