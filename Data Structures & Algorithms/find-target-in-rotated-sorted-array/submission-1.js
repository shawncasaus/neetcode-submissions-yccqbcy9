class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let leftPointer = 0
        let rightPointer = nums.length - 1
        while (leftPointer <= rightPointer) {
            const mid = Math.floor((leftPointer + rightPointer) / 2);
            if (nums[mid] === target) {
                return mid
            } 
            if (nums[leftPointer] <= nums[mid]) {
                if (target > nums[mid] || target < nums[leftPointer]) {
                    leftPointer = mid + 1;
                } else {
                    rightPointer = mid - 1;
                }
            } else {
                if (target < nums[mid] || target > nums[rightPointer]) {
                    rightPointer = mid - 1;
                } else {
                    leftPointer = mid + 1;
                }
            }
        }
        return -1
    }
}
