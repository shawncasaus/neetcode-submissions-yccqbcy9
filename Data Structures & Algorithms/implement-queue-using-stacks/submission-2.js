class MyQueue {
    constructor() {
        this.queue = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.queue.length === undefined) undefined

        const val = this.queue[0]

        for (let i = 0; i < this.queue.length; i++) {
            this.queue[i] = this.queue[i+1]
        }

        this.queue.pop()
        return val
    }

    /**
     * @return {number}
     */
    peek() {
        return this.queue[0]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
