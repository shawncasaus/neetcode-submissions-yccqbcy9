class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        const sArray = new Array(26).fill(0)
        const tArray = new Array(26).fill(0)
        for (let i = 0; i < s.length; i++) {
            sArray[s[i].charCodeAt(0) - "a".charCodeAt(0)]++
            tArray[t[i].charCodeAt(0) - "a".charCodeAt(0)]++
        }
        return sArray.join("") === tArray.join("")
    }
}
