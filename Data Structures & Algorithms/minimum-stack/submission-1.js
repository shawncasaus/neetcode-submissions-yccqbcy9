class MinStack {
    constructor() {
        this.stack = [];
        this.minimum = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (this.minimum.length === 0 || this.minimum[this.minimum.length - 1] >= val) {
            this.minimum.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        let popped = this.stack.pop();
        if (this.minimum[this.minimum.length - 1] === popped) {
            this.minimum.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minimum[this.minimum.length - 1];
    }
}
