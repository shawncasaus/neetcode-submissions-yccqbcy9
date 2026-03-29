class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0
        let r = numbers.length -1
        while (l <= r) {
            if ((numbers[r] + numbers[l]) > target) {
                r--
            } else if ((numbers[r] + numbers[l]) < target) {
                l++
            } else {
                return [numbers[l], numbers[r]]
            }
        }
        return [-1, -1]
    }
}
