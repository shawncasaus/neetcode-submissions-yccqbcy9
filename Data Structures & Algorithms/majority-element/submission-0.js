class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const limit = nums.length / 2; // > limit is fine for "more than floor(n/2)"
        const counts = new Map();

        for (const n of nums) {
            const c = (counts.get(n) || 0) + 1;
            counts.set(n, c);
            if (c > limit) return n; // early exit
        }
    }
}
