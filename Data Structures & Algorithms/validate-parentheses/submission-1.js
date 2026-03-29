class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let rules = {
            '}' : '{',
            ')' : '(',
            ']' : '['
        }
        let stack = []
        for (let i = 0; i < s.length; i++) {
            if (s[i] in rules && rules[s[i]] === stack[stack.length - 1]) {
                stack.pop()
            } else {
                stack.push(s[i])
            }
        }
        return (stack.length === 0)
    }
}
