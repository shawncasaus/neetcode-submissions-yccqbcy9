class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0
        let right = 1
        let longestString = s[left]
        let currentString = s[left]
        while(right < s.length) {
            if (currentString.includes(s[right])) {
                left = currentString.indexOf(s[right])
                let tempString = currentString.slice(left + 1, currentString.length)
                currentString = tempString
                currentString += s[right]
                left++
                right++
            } else {
                currentString += s[right]
                right++
            }
            if (currentString.length > longestString.length) {
                longestString = currentString
            }
        }
        return longestString?.length || 0
    }
}
