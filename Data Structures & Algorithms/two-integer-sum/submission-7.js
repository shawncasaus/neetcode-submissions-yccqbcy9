class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let summySums = []
        for (let i = 0; i < nums.length; i++) {
            summySums.push([nums[i], i])
        }
        summySums = summySums.sort((a,b) => a[0] - b[0])
        let p1 = 0
        let p2 = summySums.length - 1
        while (p1 < p2) {
            const sum = summySums[p1][0] + summySums[p2][0]
            if (sum < target) {
                p1++
            } else if (sum > target) {
                p2--
            } else {
                return [summySums[p1][1],summySums[p2][1]]
            }
        }
    }
}
