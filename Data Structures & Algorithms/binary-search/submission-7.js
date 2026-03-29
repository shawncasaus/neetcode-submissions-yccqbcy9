class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    binarySearch(lower, upper, nums, target) {
        let mid = Math.floor((upper + lower) / 2)
        if (lower > upper) {
            return -1
        } else if (nums[mid] === target) {
            return mid
        } else {
            return (nums[mid] < target) ? this.binarySearch(mid + 1, upper, nums, target) : this.binarySearch(lower, mid - 1, nums, target)
        }
    }
    search(nums, target) {
        // let lower = 0
        // let upper = nums.length -1
        // while (lower <= upper) {
        //     let mid = Math.floor((upper + lower) / 2)
        //     if (nums[mid] < target) {
        //         lower = mid + 1
        //     } else if (nums[mid] > target) {
        //         upper = mid - 1
        //     } else {
        //         return mid
        //     }
        // }
        // return -1
        return this.binarySearch(0, nums.length -1, nums, target)
    }
}
