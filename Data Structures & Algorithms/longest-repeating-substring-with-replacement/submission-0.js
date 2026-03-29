class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let seen = new Map()
        let res = 0
        let left = 0
        for (let right = 0; right < s.length; right++) {
            let len = right - left + 1
            seen.set(s[right], 1 + (seen.get(s[right]) || 0))

            if (len - Math.max(...seen.values()) > k) {
                seen.set(s[left], seen.get(s[left]) - 1)
                left++
            }
            len = right  - left + 1
            res = Math.max(res, len)
        }
        return res
    }
}