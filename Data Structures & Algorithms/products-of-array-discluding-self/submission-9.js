class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const products = new Array(nums.length).fill(1)
        const prefixProds = new Array(nums.length).fill(1)
        const postfixProds = new Array(nums.length).fill(1)

        let prefixProd = 1
        for (let i = 0; i < nums.length; i++) {
            prefixProd *= nums[i]
            prefixProds[i] = prefixProd
        }

        let postfixProd = 1
        for (let i = nums.length -1; i >= 0; i--) {
            postfixProd *= nums[i]
            postfixProds[i] = postfixProd
        }

        for (let i = 0; i < nums.length; i++) {
            // gets everything to right
            if (i === 0) {
                products[i] = postfixProds[i+1]
            } 
            // rights everything to left
            else if (i === nums.length - 1) {
                products[i] = prefixProds[i-1]
            }
            // gets left and right
            else {
                products[i] = prefixProds[i-1] * postfixProds[i+1]
            }
        }

        return products
    }
}
