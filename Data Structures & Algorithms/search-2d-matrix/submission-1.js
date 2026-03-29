class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // check for the correct row
        let lower = 0
        let upper = matrix.length - 1
        let mid = -1
        while (lower <= upper) {
            mid = Math.floor((upper + lower) / 2)
            if (target < matrix[mid][0]) {
                upper = mid - 1
            } else if (target > matrix[mid][matrix[mid].length - 1]) {
                lower = mid + 1
            } else {
                break;
            }
        }

        if (upper > target) {
            return false
        }
        
        // check for target in correct row
        let nums = matrix[mid]
        lower = 0
        upper = nums.length -1
        while (lower <= upper) {
            let mid = Math.floor((upper + lower) / 2)
            if (nums[mid] < target) {
                lower = mid + 1
            } else if (nums[mid] > target) {
                upper = mid - 1
            } else {
                return true
            }
        }
        return false
    }
}
