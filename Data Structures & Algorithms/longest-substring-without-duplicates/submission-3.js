class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let seenCharacters = new Set();
        let longestSubstring = 1;
        let p1 = 0;
        let p2 = 1;
        seenCharacters.add(s[p1]);
        while(p2 < s.length) {
            if (seenCharacters.has(s[p2])) {
                seenCharacters.delete(s[p1]);
                p1++;
            } else {
                seenCharacters.add(s[p2]);
                p2++;
            }
            if ((p2-p1) > longestSubstring) {
                longestSubstring = p2-p1;
            }
        }
        return longestSubstring;
    }
}
