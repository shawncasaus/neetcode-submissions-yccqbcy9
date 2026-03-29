class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1
        let r = Math.max(...piles)
        let k = r

        while (l <= r) {
            let totalH = 0
            let mid = Math.floor((l+r) / 2)
            for (const pile of piles) {
                totalH += Math.ceil(pile / mid)
            }
            if (totalH <= h) {
                k = mid
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return k
    }
}
