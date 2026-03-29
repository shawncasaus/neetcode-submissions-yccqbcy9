class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = []
        let stack = []
        const backTrack = function(open, closed) {
            if (n === open && open === closed) {
                res.push(stack.join(''))
                return
            }
            if (open < n) {
                stack.push('(')
                backTrack(open+1, closed)
                stack.pop()
            }
            if (closed < open) {
                stack.push(')')
                backTrack(open, closed+1)
                stack.pop()
            }
        }
        backTrack(0,0)
        return res
    }
}
