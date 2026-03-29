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
            } else if (nums[leftPointer] < nums[mid] && target > nums[leftPointer] && target < nums[mid]){
                rightPointer = mid
            } else if (nums[leftPointer] > nums[mid] && (target > nums[leftPointer] || target < nums[mid])){
                rightPointer = mid
            } else if (nums[mid] < nums[rightPointer] && target > nums[mid] && target < nums[rightPointer]){
                leftPointer = mid + 1
            } else {
                leftPointer = mid + 1
            } 
        }
        return -1
    }
}
