class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let r1 = 0
        let r2 = matrix.length - 1
        let row = -1

        // find row
        while (r1 <= r2) {
            const mid = Math.floor((r1 + r2) / 2)
            // target is in a row ahead of mid
            if (matrix[mid][matrix[mid].length - 1] < target) {
                r1 = mid + 1
            } 
            // target is in a row before mid
            else if (matrix[mid][0] > target) {
                r2 = mid - 1
            } 
            // found the row
            else {
                row = mid
                break;
            }
        }

        if (row === -1) {
            return false
        }
        r1 = 0
        r2 = matrix[row].length - 1
        while (r1 <= r2) {
            const mid = Math.floor((r1 + r2) / 2)
            //target is in first half
            if (matrix[row][mid] > target) {
                r2 = mid - 1
            }
            // target is in second half
            else if (matrix[row][mid] < target) {
                r1 = mid + 1
            }
            // found target
            else {
                return true
            }
        }
        return false
    }
}
