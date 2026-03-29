class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freqMap = new Array(26).fill(0)
        let longestWindow = 0
        for (let i = 0; i < s.length; i++) {
            const characterIndex = s[i].charCodeAt(0) - 'A'.charCodeAt(0);
            freqMap[characterIndex]++
        }
        console.log(freqMap)
        let p1 = 0
        let p2 = 0

        while (p2 < s.length) {
            let mostFrequent = 0
            const windowLength = (p2 - p1) + 1
            for (let i = 0; i < freqMap.length; i++) {
                if (freqMap[i] > mostFrequent) {
                    mostFrequent = freqMap[i]
                }
            }
            if ((windowLength - mostFrequent - k) === 0) {
                longestWindow = Math.max(windowLength, longestWindow)
                p1++
            }
            p2++
        }

        return longestWindow
    }
}
