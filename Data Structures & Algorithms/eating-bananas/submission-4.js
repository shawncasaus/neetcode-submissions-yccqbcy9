class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const max = Math.max(...piles)
        let k = max
        let p1 = 1
        let p2 = max

        function isValidK(k) {
            let hours = 0
            for (let i = 0; i < piles.length; i++) {
                hours += Math.ceil(piles[i] / k)
            }
            return hours <= h
        }
        while (p1<=p2) {
            const mid = Math.floor((p1+p2) / 2)
            if (isValidK(mid)) {
                k = Math.min(k, mid)
                p2 = mid - 1
            } else {
                p1 = mid + 1
            }
        }

        return p1
    }
}
