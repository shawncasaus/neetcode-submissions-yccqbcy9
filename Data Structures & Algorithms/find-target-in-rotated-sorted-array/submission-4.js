class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let p1 = 0
        let p2 = nums.length - 1
        while (p1 <= p2) {
            let mid = Math.floor((p1 + p2) / 2)
            // if mid is target return index of mid
            if (nums[mid] === target) {
                return mid
            }
            // left half is sorted
            if (nums[p1] <= nums[mid]) {
                if (nums[p1] <= target && target <= nums[mid]) {
                    p2 = mid - 1
                } else {
                    p1 = mid + 1
                }
            } 
            // right half is sorted
            else {
                if (nums[mid] <= target && target <= nums[p2]) {
                    p1 = mid + 1
                } else {
                    p2 = mid - 1
                }
            }
        }
        return -1
    }
}
