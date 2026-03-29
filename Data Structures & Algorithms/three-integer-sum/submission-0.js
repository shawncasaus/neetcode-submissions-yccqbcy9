class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
    nums.sort((a,b) => a-b)
    const triplets = []
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i-1])) {
            const target = 0 - nums[i]
            let pointerOne = i + 1
            let pointerTwo = nums.length - 1
            while (pointerOne < pointerTwo) {
                const sum = nums[pointerOne] + nums[pointerTwo]
                if (sum === target) {
                    triplets.push([nums[i], nums[pointerOne], nums[pointerTwo]])
                    while(pointerOne < pointerTwo && nums[pointerOne] === nums[pointerOne+1]) pointerOne++
                    while(pointerOne < pointerTwo && nums[pointerTwo] === nums[pointerTwo-1]) pointerTwo--
                    pointerTwo--
                    pointerOne++
                } else if (sum > target) {
                    pointerTwo--
                } else {
                    pointerOne++
                }
            }
        }
    }
    return triplets;
    }
}
