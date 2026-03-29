class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const majorityMap = new Map()
        const threshold = Math.ceil(nums.length / 3)
        const returnArray = []

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
            if (majorityMap.has(num)) {
                const count = majorityMap.get(num)
                majorityMap.set(num, count+1)
                if ((count) >= threshold) {
                   returnArray.push(num)
                }
            } else {
                majorityMap.set(num, 1)
            }
        }
        console.log(majorityMap)
        majorityMap.forEach((val, key) => {
            if (Number(val) < 0) returnArray.push(key)
        })
        return returnArray
    }
}
