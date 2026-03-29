class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b) => a - b)
        const triplets = []
        for (let i = 0; i < nums.length; i++) {
            let p1 = i+1
            let p2 = nums.length -1
            while (p1 < p2) {
                const curentSum = nums[i] + nums[p1] + nums[p2]
                if (curentSum < 0) {
                    p2--
                } else if (curentSum > 0) {
                    p1++
                } else {
                    triplets.push([nums[i], nums[p1], nums[p2]])
                    p1++
                    p2--
                    while(p1 < p2 && nums[p1]===nums[p1-1]) p1++
                }
            }
        }
        console.log(triplets)
        return triplets
    }
}
