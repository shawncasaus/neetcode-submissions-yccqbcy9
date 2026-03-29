class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
    let prefix = '';
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        if (strs.every(s => i < s.length && s[i] === char)) {
            prefix += char;
        } else {
            break;
        }
    }
    return prefix;
    }
}
