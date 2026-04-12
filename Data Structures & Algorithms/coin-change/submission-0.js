class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dp = new Array(amount + 1).fill(amount + 1)
        console.log("dp", dp)
        dp[0] = 0

        for (let i = 1; i < amount + 1; i++) {
            for (let j = 0; j < coins.length; j++) {
                const coin = coins[j]
                if ((i - coin) >= 0) {
                    dp[i] = Math.min(dp[i], 1 + dp[i-coin])
                }
            }
        }
        console.log("dp1", dp)
        return (dp[amount] === amount+1) ? -1 : dp[amount]
    }
}
