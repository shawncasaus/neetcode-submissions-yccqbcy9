class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const numsArray = new Array(3).fill(0)
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
            numsArray[num]++
        }
        console.log(numsArray)
        let p1 = 0
        for (let i = 0; i < numsArray.length; i++) {
            const iterable = numsArray[i] + p1
            let p2 = p1
            while (p2 < iterable) {
                nums[p2] = i
                p2++
            }
            p1 = p2
        }
        return nums
    }
}
