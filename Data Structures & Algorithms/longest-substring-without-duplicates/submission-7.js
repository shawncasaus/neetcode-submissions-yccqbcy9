class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
         s = s.toLowerCase()
         const characterSet = new Set()
         let longestSubstring = 0
         let p1 = 0
         let p2 = 0

         while (p2 < s.length) {
            if (!characterSet.has(s[p2])) {
                characterSet.add(s[p2])
                longestSubstring = Math.max(longestSubstring, p2 - p1 + 1)
                p2++
            } else {
                characterSet.delete(s[p1])
                p1++
            }
         }
         return longestSubstring
    }
}
