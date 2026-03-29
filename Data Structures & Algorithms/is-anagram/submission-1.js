class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let set1 = new Set();
        for (let i = 0; i < s.length; i++) {
            set1.add(s[i]);
        }
        for (let i = 0; i < t.length; i++) {
            if (!set1.has(t[i])) {
                return false;
            }
        }
        return true;
    }
}
