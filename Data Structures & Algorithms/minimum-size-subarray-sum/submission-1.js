class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let p1 = 0
        let p2 = 0
        let sum = 0
        let minLength = Infinity
        let curLength = 0
        while (p2 < nums.length) {
            sum += nums[p2]
            curLength++
            while (sum >= target) {
                minLength = Math.min(curLength, minLength)
                sum -= nums[p1]
                curLength--
                p1++
            }
            p2++
        }
        return minLength === Infinity ? 0 : minLength 
    }
}
