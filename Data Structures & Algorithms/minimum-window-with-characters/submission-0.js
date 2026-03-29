class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tArray = [...t];
        const tMap = new Map(tArray.map((v) => [v, 0]));
        let shortestSubstring = s.length
        let l, r, curr = 0
        while (r < s.length) {
            if (tMap.get(s[r])) {
                curr++
            }
        }
    }
}
