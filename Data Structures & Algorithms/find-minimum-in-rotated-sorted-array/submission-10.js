class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = Infinity
        let p1 = 0
        let p2 = nums.length -1
        while(p1 <= p2) {
            // array is sorted
            if (nums[p1] <= nums[p2]) {
                min = Math.min(min, nums[p1])
                break
            }
            // theres a pivot, find it
            const mid = Math.floor((p1 + p2) / 2)
            min = Math.min(min, nums[mid])
            // pivot is to left
            if (nums[mid] <= nums[p1]) {
                p2 = mid - 1
            } 
            // pivot is to right
            else if (nums[mid] >= nums[p2]) {
                p1 = mid + 1
            }
        }
        return min
    }
}
