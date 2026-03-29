class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
evalRPN(tokens) {

    let stack = [];

    const operate = (a, b, operator) => {
        switch (operator) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return Math.trunc(a / b); 

        }
    };

    for (let token of tokens){
        if (['+', '-', '*', '/'].includes(token)) {
            let b = stack.pop();
            let a = stack.pop();

            stack.push(operate(a, b, token));
        }
        else{
            stack.push(parseInt(token));
        }
    }

    return stack.pop();
}
}
