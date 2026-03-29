class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let p1 = 0
        let p2 = 0
        while(p2 < prices.length) {
            maxProfit = Math.max(maxProfit, prices[p2] - prices[p1])
            if (prices[p2] < prices[p1]) {
                p1 = p2
            }
            p2++
        }
        return maxProfit
    }
}
