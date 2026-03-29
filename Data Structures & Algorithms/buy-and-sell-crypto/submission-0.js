class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let left = 0
        let right = 1
        while (right < prices.length) {
            let curProfit = prices[right] - prices[left]
            if (prices[left] < prices[right]) {
                maxProfit = Math.max(curProfit, maxProfit)
            } else {
                left = right
            }
            right++
        }
        return maxProfit
    }
}
