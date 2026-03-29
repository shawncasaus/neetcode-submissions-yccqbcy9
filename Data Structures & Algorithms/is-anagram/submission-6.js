class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        s = s.split("").sort().join("")
        t = t.split("").sort().join("")
        return s === t
    }
}
