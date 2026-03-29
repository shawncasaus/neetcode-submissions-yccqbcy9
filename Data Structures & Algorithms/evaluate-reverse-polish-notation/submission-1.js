class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let operands = new Set(['+', '-', '*', '/'])
        let stack = []
        for (let i = 0; i < tokens.length; i++) {
            console.log(tokens[i])
            console.log(operands)
            if (operands.has(tokens[i])) {
                let num1 = parseInt(stack.pop(), 10)
                let num2 = parseInt(stack.pop(), 10)
                switch(tokens[i]) {
                    case '+':
                        stack.push(num1 + num2)
                        break;
                    case '-':
                        stack.push(num1 - num2)
                        break;
                    case '*':
                        stack.push(num1 * num2)
                        break;
                    case '/':
                        stack.push(Math.trunc(num1 / num2))
                        break;
                }
            } else {
                stack.push(tokens[i])
            }
        }
        return stack.pop()
    }
}
