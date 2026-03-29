class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let p1 = 0
        let p2 = 1

        while(p2 < prices.length) {
            if (prices[p1] < prices[p2]) {
                maxProfit = Math.max(maxProfit, prices[p2] - prices[p1])
            } else {
                p1 = p2
            }
            p2++
        }
        return maxProfit
    }
}
