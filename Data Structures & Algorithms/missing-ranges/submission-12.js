class Solution {
    /**
     * @param {number[]} nums
     * @param {number} lower
     * @param {number} upper
     * @return {number[][]}
     */
    findMissingRanges(nums, lower, upper) {
        const ranges = [];

        if (nums.length === 0) {
            return [[lower, upper]];
        }

        if (lower < nums[0]) {
            ranges.push([lower, nums[0] - 1]);
        }

        for (let i = 1; i < nums.length; i++) {
            const start = nums[i - 1] + 1;
            const end = nums[i] - 1;

            if (start <= end) {
                ranges.push([start, end]);
            }
        }

        if (nums[nums.length - 1] < upper) {
            ranges.push([nums[nums.length - 1] + 1, upper]);
        }

        return ranges;
    }
}
