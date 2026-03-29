class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let rules = {
            ']': '[',
            ')': '(',
            '}': '{'
        }
        let stack = []
        for (let i = 0; i < s.length; i++) {
            if (s[i] in rules) {
                if (stack[stack.length -1] === rules[s[i]]) {
                    stack.pop()
                } else {
                    stack.push(s[i])
                }
            } else {
                stack.push(s[i])
            }
        }
        if (stack.length === 0) return true
        else return false
    }
}
