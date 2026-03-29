class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
            const productExceptSelf = new Array(nums.length)
            const prefixProd = new Array(nums.length)
            const postfixProd = new Array(nums.length)

            // calculate prefix products
            for (let i = 0; i < nums.length; i++) {
                const val = (i > 0) ? prefixProd[i-1] * nums[i] : 1 * nums[i]
                prefixProd[i] = val
            }

            // calculate postfix prod
            for (let i = nums.length - 1; i >= 0; i--) {
                const val = (i < nums.length - 1) ? postfixProd[i+1] * nums[i] : 1 * nums[i]
                postfixProd[i] = val
            }

            // calculate product except self
            for (let i = 0; i < nums.length; i++) {
                const prodBefore = (i > 0) ? prefixProd[i-1] : 1
                const prodAfter = (i < nums.length - 1) ? postfixProd[i+1] : 1
                productExceptSelf[i] = prodBefore * prodAfter
            }
            
            return productExceptSelf
    }
}
