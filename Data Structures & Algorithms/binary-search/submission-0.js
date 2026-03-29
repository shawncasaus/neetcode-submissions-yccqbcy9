class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let p1 = 0
        let p2 = nums.length - 1;
        while (p2 >= p1) {
            let mid = p1 + Math.floor((p2-p1) / 2)
            if (nums[mid] === target) {
                return mid
            } else if (nums[mid] < target) {
                p1 = mid + 1
            } else {
                p2 = mid - 1
            }
            
        }
        return -1
    }
}
