class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freqMap = new Array(26).fill(0)
        let longestWindow = 0
        let p1 = 0
        let p2 = 0

        while (p2 < s.length) {
            const characterIndexP2 = s[p2].charCodeAt(0) - 'A'.charCodeAt(0);
            let mostFrequent = 0
            freqMap[characterIndexP2]++

            for (let i = 0; i < freqMap.length; i++) {
                if (freqMap[i] > mostFrequent) {
                    mostFrequent = freqMap[i]
                }
            }

            let windowLength = (p2 - p1) + 1
            while ((windowLength - mostFrequent) > k) {
                const characterIndexP1 = s[p1].charCodeAt(0) - 'A'.charCodeAt(0);
                freqMap[characterIndexP1]--
                p1++

                // update windowLength after moving p1
                windowLength = (p2 - p1) + 1

                // recompute mostFrequent (keeping your approach)
                mostFrequent = 0
                for (let i = 0; i < freqMap.length; i++) {
                    if (freqMap[i] > mostFrequent) {
                        mostFrequent = freqMap[i]
                    }
                }
            }
            longestWindow = Math.max(windowLength, longestWindow)
            p2++
        }

        return longestWindow
    }
}
