class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
         s = s.toLowerCase()
         const characterArray = new Array(26).fill(0)
         let longestSubstring = 0
         let p1 = 0
         let p2 = 0

         while (p2 < s.length) {
            let indexP1 = s.charCodeAt(p1) - 'a'.charCodeAt(0);
            let indexP2 = s.charCodeAt(p2) - 'a'.charCodeAt(0);

            if (characterArray[indexP2] === 0) {
                characterArray[indexP2]++
                longestSubstring = Math.max(longestSubstring, p2 - p1 + 1)
                p2++
            } else {
                characterArray[indexP1]--
                p1++
            }
         }
         return longestSubstring
    }
}
