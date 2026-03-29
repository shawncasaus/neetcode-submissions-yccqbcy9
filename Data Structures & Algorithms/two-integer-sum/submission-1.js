class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const sortedNums = nums.map((num, index) => ({ num, index }));
        sortedNums.sort((a, b) => a.num - b.num);
        let p1 = 0;
        let p2 = sortedNums.length - 1;

        while (p2 > p1) {
            let sum = sortedNums[p1].num + sortedNums[p2].num;
            if (sum > target) {
                p2--;
            } else if (sum < target) {
                p1++;
            } else {
                return [sortedNums[p1].index,sortedNums[p2].index];
            }
        }
        return [-1,-1];
    }
}
