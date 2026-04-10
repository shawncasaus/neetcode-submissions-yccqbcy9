class HitCounter {
    constructor() {
        this.dequeue = []
    }

    /**
     * @param {number} timestamp
     * @return {void}
     */
    hit(timestamp) {
        this.dequeue.push(timestamp)
    }

    /**
     * @param {number} timestamp
     * @return {number}
     */
    getHits(timestamp) {
        const limit = timestamp - 300
        let p1 = 0

        while (this.dequeue[p1] <= limit && p1 < this.dequeue.length) {
            if (this.dequeue[p1] <= limit) {
                this.dequeue.shift()
            }
        }

        return this.dequeue.length
    }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
