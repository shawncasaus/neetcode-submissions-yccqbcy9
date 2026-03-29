class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let totalProfit = 0
        let p1 = 0
        let p2 = 0

        while(p2 < prices.length-1) {
            // choose to sell
            if ((prices[p2] - prices[p1]) > 0 && prices[p2+1] < prices[p2]) {
                totalProfit += prices[p2] - prices[p1]
                p1 = p2
            } else if (prices[p2] < prices[p1]) {
                p1 = p2
            }
            p2++
        }
        // if last iteration is profit
        if ((prices[p2] - prices[p1]) > 0) {
            totalProfit += prices[p2] - prices[p1]
        }
        return totalProfit
    }
}
