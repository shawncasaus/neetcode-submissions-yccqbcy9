class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // current frequency map for dynamic window
        const freqMap = new Array(26).fill(0)
        let longestWindow = 0
        let p1 = 0
        let p2 = 0

        while (p2 < s.length) {
            // increase frequency for p2 index
            const p2Index = s[p2].charCodeAt(0) - 'A'.charCodeAt(0);
            freqMap[p2Index]++
            let currentLength = (p2 - p1) + 1

            // get most frequently used character O(26)
            let mostFrequent = 0
            for (let i = 0; i < freqMap.length; i++) {
                if (freqMap[i] > mostFrequent) {
                    mostFrequent = freqMap[i]
                }
            }
            
            // shift window left while window is invalid
            while((currentLength - mostFrequent) > k) {
                // deallocate current p1 character from window
                const p1Index = s[p1].charCodeAt(0) - 'A'.charCodeAt(0);
                freqMap[p1Index]--
                p1++
                currentLength = (p2 - p1) + 1
                mostFrequent = 0
                for (let i = 0; i < freqMap.length; i++) {
                    if (freqMap[i] > mostFrequent) {
                        mostFrequent = freqMap[i]
                    }
                }
            }

            longestWindow = Math.max(longestWindow, currentLength)
            p2++
        }
        return longestWindow
    }
}
