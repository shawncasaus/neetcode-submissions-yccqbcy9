class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let lowest = nums[0]
        let lPointer = 0
        let rPointer = nums.length - 1

        while (lPointer <= rPointer) {
            if (nums[lPointer] < nums[rPointer]) {
                lowest = (lowest < nums[lPointer]) ? lowest : nums[lPointer]
                break
            }
            let mid = Math.ceil((lPointer + rPointer) / 2)
            lowest = (lowest < nums[lPointer]) ? lowest : nums[mid]
            if (nums[mid] >= nums[lPointer]) {
                lPointer = mid + 1
            } else {
                rPointer = mid - 1
            }
        }
        return lowest
    }
}
   