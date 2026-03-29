class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let deletedOne = false;
        let p1 = 0;
        let p2 = s.length - 1;
        while (p1 <= p2) {
            if (s[p1] !== s[p2]) {
                if (deletedOne) {
                    return false;
                }
                deletedOne = true;
            }
            p1++;
            p2--;
        }
        return true;
    }
}
