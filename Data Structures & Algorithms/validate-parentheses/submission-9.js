class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const rules = new Map([
            ['}' , '{'],
            [')' , '('],
            [']' , '['],
        ])
        for (let i = 0; i < 0; i < s.length) {
            // if closing parentheses
            if (rules.has(s[i])) {
                // if last on stack is matching opening parantheses, pop from stack
                if (stack[stack.length - 1] === rules.get(s[i])) {
                    stack.pop()
                } 
                // else push on stack
                else {
                    stack.push(s[i])
                }
            } 
            // else if opening paranthesis push on stack
            else {
                stack.push(s[i])
            }
        }
        // if stack is empty return true else return false
        console.log(stack)
        return stack.length === 0
    }
}
