class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const rules = new Map([
            ['}', '{'],
            [']', '['],
            [')', '(']
        ])
        for (let i = 0; i < s.length; i ++) {
            if (rules.has(s[i])) {
                if (stack[stack.length-1] === rules.get(s[i])) {
                    stack.pop()
                } else {
                    stack.push(s[i])
                }
            } else {
                stack.push(s[i])
            }
        }
        return stack.length === 0
    }
}
