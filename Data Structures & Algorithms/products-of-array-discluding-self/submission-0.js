class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if (nums.length === 0) return []
        const res = []
        const prefixSums = [1]
        let curSum = nums[0]
        const postfixSums = [1]

        let p1 = 1
        while (p1 < nums.length) {
            prefixSums.push(curSum)
            curSum = curSum * nums[p1]       
            p1++    
        }
        prefixSums.push(curSum)
        console.log('prefixSums', prefixSums)
        curSum = nums[nums.length-1]
        let p2 = nums.length - 2
        while (p2 >= 0) {
            postfixSums.push(curSum)
            curSum = curSum * nums[p2]
            p2--
        }
        postfixSums.push(curSum)
        console.log('postfixSums', postfixSums)
        p1 = 1
        p2 = postfixSums.length - 1
        while(p1 < prefixSums.length - 1) {
            res.push(postfixSums[p2-1] * prefixSums[p1-1])
            p1++
            p2--
        }
        res.push(postfixSums[p2-1] * prefixSums[p1-1])
        console.log('res', res)
        return res
    }
}
