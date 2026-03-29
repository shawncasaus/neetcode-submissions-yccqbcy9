class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let res = nums[0]
        let p1 = 0
        let p2 = nums.length - 1

        while (p1 <= p2) {
            // in sorted array (no pivot)
            if (nums[p1] < nums[p2]) {
                res = Math.min(nums[p1], res)
                break;
            }
            const mid = Math.floor((p1 + p2) / 2)
            res = Math.min(nums[mid], res)
            if (nums[mid] >= nums[p1]) {
                p1 = mid + 1
            } else {
                p2 = mid - 1
            }
        }
        return res
    }
}
