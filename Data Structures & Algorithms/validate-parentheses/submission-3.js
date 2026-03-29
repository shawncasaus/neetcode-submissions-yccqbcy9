class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let isValid = {
            ')': '(',
            '}': '{',
            ']': '['
        }
        let stack = []
        for (let i = 0; i < s.length; i++) {
            if (isValid[s[i]]){
                if (stack.length > 0 && stack[stack.length-1] === isValid[s[i]]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(s[i]);
            }
        }
        return stack.length === 0
    }
}
