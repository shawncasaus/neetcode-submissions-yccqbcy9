class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = nums[0]

        let p1 = 0
        let p2 = nums.length - 1
        while (p1 <= p2) {
            // find pivot
            const mid = Math.floor((p1 + p2) / 2)
            min = Math.min(nums[mid], min)
            if (nums[mid] >= nums[p1]) {
                p1 = mid + 1
            } else if (nums[mid] <= nums[p2]) {
                p2 = mid - 1 
            }
        }
        return min
        
    }
}
