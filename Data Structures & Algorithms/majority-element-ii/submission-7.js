class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        if (nums.lengt === 1) return nums
        const majorityMap = new Map()
        const threshold = nums.length / 3
        const returnArray = []

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
            if (majorityMap.has(num)) {
                const count = majorityMap.get(num)
                if ((count + 1) > threshold || count < 0) {
                    majorityMap.set(num, -1)
                } else {
                    majorityMap.set(num, count+1)
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
