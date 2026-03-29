class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const sequenceMap = new Map()
        let longestConsecutiveSeq = 0
        for (let i = 0; i < nums.length; i++) {
            if (sequenceMap.has(nums[i])) continue;

            const left = sequenceMap.get(nums[i] - 1) ?? 0
            const right = sequenceMap.get(nums[i] + 1) ?? 0
            const cur = left + 1 + right
            longestConsecutiveSeq = Math.max(cur, longestConsecutiveSeq)
            sequenceMap.set(nums[i], cur)
            sequenceMap.set(nums[i] - left, cur)
            sequenceMap.set(nums[i] + right, cur)
        }
        return longestConsecutiveSeq
    }
}
