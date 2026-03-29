class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * 
     */
    isPalindrome(s) {
        let left = 0
        let right = s.length -1
        while (left < right) {
            let leftCode = s[left].charCodeAt(0)
            let rightCode = s[right].charCodeAt(0)
            if (!(leftCode >= 48 && leftCode <= 57) && !(leftCode >= 65 && leftCode <= 90) && !(leftCode >= 97 && leftCode <= 122)) {
                left++
                continue;
            }
            if (!(rightCode >= 48 && rightCode <= 57) && !(rightCode >= 65 && rightCode <= 90) && !(rightCode >= 97 && rightCode <= 122)) {
                right--;
                continue;
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false
            }
            left++
            right--
        }
        return true
    }
}
