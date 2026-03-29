class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const sortedNums = nums.sort((a,b) => a-b);
        let p1 = 0;
        let p2 = sortedNums.length - 1;

        while (p2 > p1) {
            let sum = sortedNums[p1] + sortedNums[p2];
            if (sum > target) {
                p2--;
            } else if (sum < target) {
                p1++;
            } else {
                return [p1,p2];
            }
        }
        return [-1,-1];
    }
}
