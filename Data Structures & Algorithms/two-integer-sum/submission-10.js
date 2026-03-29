class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let nummyNums = []
        for (let i = 0; i < nums.length; i++) {
            nummyNums.push([nums[i], i])
        }
        nummyNums = nummyNums.sort((a,b) => a[0] - b[0])
        let p1 = 0
        let p2 = nummyNums.length - 1
        while (p1 < p2) {
            const sum = nummyNums[p1][0] + nummyNums[p2][0]
            if (sum < target) {
                p1++
            } else if(sum > target) {
                p2--
            } else {
                return [nummyNums[p1][1], nummyNums[p2][1]]
            }
        }
    }
}
