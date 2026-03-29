class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let p1 = 0;
        let p2 = s.length - 1;

        while (p1 < p2) {
            while(p1 < p2 && !/[a-z0-9]/i.test(s[p1])) p1++;
            while(p1 < p2 && !/[a-z0-9]/i.test(s[p2])) p2--;
            if (p1 >= p2) break;
            if (s[p1].toLowerCase() !== s[p2].toLowerCase()) {
                return false;
            }
            p1++;
            p2--;
        }
        return true;
    }
}
