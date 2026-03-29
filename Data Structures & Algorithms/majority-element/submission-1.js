class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let limit = nums.length / 2;
        let hashMap = new Map();
        for (const n of nums) {
            let seenTimes = (hashMap.get(n) || 0) + 1;
            hashMap.set(n, seenTimes);
            if (seenTimes > limit) {
                return n;
            }
        }
    }
}
