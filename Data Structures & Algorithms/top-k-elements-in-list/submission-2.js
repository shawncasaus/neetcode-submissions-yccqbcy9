class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = new Map()

        for (let i = 0; i < nums.length; i++) {
            if (!frequencyMap.has(nums[i])) {
                frequencyMap.set(nums[i], 1)
            } else {
                frequencyMap.set(nums[i], frequencyMap.get(nums[i]) + 1)
            }
        }
        
        let frequencyArray = []
        let returnArray = []
        frequencyMap.forEach((key, val) => {
            frequencyArray.push([key, val])
        })
        frequencyArray.sort((a,b) => b[1] - a[1])
        console.log(frequencyArray)
        for (let i = 0; i < k; i++) {
            returnArray.push(frequencyArray[i][0])
        }
        return returnArray
    }
}
