class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0
        let l = 0
        let r = 1
        while (r < prices.length) {
            // get current profit
            let curProfit = prices[r] - prices[l]
            // if current profit is higher than profit
            if (curProfit > profit) {
                profit = curProfit
            }
            // if you can buy lower, mine as well
            if (prices[r] < prices[l]) {
                l = r
            }
            r++
        }
        return profit
    }
}
