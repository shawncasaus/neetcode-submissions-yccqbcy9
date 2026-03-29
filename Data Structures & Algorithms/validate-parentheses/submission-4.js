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
                stack.pop()
            } else {
                stack.push()
            }
        }
        return stack.length === 0
    }
}
