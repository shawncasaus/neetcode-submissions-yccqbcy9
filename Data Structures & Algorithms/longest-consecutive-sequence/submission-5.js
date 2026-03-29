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
            const currentSequence = [nums[i],nums[i]]
            // check number before
            if (sequenceMap.has(nums[i] - 1)) {
                currentSequence[0] = sequenceMap.get(nums[i] - 1)[0]
            }
            // check number after
            if (sequenceMap.has(nums[i] + 1)) {
                currentSequence[1] = sequenceMap.get(nums[i] + 1)[1]
            }
            longestConsecutiveSeq = Math.max(Math.abs(currentSequence[0] - currentSequence[1]) + 1, longestConsecutiveSeq)
            sequenceMap.set(nums[i], currentSequence)
            sequenceMap.set(currentSequence[0], currentSequence)
            sequenceMap.set(currentSequence[1], currentSequence)
        }
        return longestConsecutiveSeq
    }
}
