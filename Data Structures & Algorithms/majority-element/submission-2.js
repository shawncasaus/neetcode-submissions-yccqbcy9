class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const majorityMap = new Map()
        const majority = Math.ceil((nums.length) / 2)
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
            if (majorityMap.has(num)) {
                const count = majorityMap.get(num)
                if (count+1 >= majority) return num
                majorityMap.set(num, count+1)
            } else {
                majorityMap.set(num, 1)
            }
        }
        return -1
    }
}
