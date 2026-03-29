class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphaNum = c => /^[a-z0-9]$/i.test(c);
        let p1 = 0
        let p2 = s.length - 1
        while (p1 < p2) {
            while(!isAlphaNum(s[p1]) && p1 < p2) p1++
            while(!isAlphaNum(s[p2]) && p1 < p2) p2--
            if (s[p1].toLowerCase() !== s[p2].toLowerCase()) return false
            p1++
            p2--
        }
        return true
    }
}
