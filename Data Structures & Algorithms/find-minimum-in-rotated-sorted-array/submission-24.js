class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = Infinity
        let p1 = 0
        let p2 = nums.length - 1

        while (p1 <= p2) {
            // if array is already sorted
            if (nums[p1] <= nums[p2]) {
                min = Math.min(nums[p1], min)
                break;
            }

            const mid = Math.floor((p1 + p2) / 2)
            min = Math.min(nums[mid], min)
            // if pivot is on left
            if (nums[mid] <= nums[p1]) {
                p2 = mid - 1
            }
            // if pivot is on right
            else if (nums[mid] >= nums[p2]) {
                p1 = mid + 1
            }
        }
        return min
    }
}
