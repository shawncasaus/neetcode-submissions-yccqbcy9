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
            const windowLength = (p2 - p1) + 1
            const characterIndexP2 = s[p2].charCodeAt(0) - 'A'.charCodeAt(0);
            let mostFrequent = 0
            freqMap[characterIndexP2]++
            for (let i = 0; i < freqMap.length; i++) {
                if (freqMap[i] > mostFrequent) {
                    mostFrequent = freqMap[i]
                }
            }
            longestWindow = Math.max(windowLength, longestWindow)
            if ((windowLength - mostFrequent - k) === 0) {
                const characterIndexP1 = s[p1].charCodeAt(0) - 'A'.charCodeAt(0);
                freqMap[characterIndexP1]--
                p1++
            }
            p2++
        }

        return longestWindow
    }
}
