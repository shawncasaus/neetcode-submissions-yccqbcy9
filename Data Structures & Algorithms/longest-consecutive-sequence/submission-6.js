class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 1) return 1
        const numsSet = new Set([...nums])
        let count = 0

        console.log("numsSet", numsSet)

        for (let num of nums) {
            // has no numbers to left
            if (!numsSet.has(num-1)) {
                let curNum = num
                let curr = 0
                while (numsSet.has(curNum)) {
                    curNum++
                    curr++
                }
                count = Math.max(curr, count)
            }
        }
        return count

    }
}
