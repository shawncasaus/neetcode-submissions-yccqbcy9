class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let matches = 0
        let s1Map = new Map()
        let windowMap = new Map()
        for (let i = 0; i < s1.length; i++) {
            s1Map.set(s1[i], 1 + (s1Map.get(s1[i]) || 0))
        }
        let left = 0
        let right = 0
        while (right < s2.length) {
            // this gets the current letter at the right pointer and adds/increments it to window map
            windowMap.set(s2[right], 1 + (windowMap.get(s2[right]) || 0))
            right++
        }
        console.log(windowMap)
    }
}
