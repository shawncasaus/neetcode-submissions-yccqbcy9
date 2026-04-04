class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let longestSubstring = ""

        for (let i = 0; i < s.length; i++) {
            // odd length palindromes
            let p1 = i
            let p2 = i
            while (p1 >=0 && p2 < s.length && s[p1] === s[p2]) {
                if (((p2 - p1) + 1) > longestSubstring.length) {
                    longestSubstring = s.substring(p1,p2+1)
                }
                p1--
                p2++
            }

            // even length palindromes
            p1 = i
            p2 = i+1
            while(p1 >= 0 && p2 < s.length && s[p1] === s[p2]) {
                if (((p2 - p1) + 1) > longestSubstring.length) {
                    longestSubstring = s.substring(p1,p2+1)
                }
                p1--
                p2++
            }
        }
        return longestSubstring
    }
}
