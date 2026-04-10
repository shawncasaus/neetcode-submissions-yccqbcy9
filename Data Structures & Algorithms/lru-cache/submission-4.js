/**
 * initialize a cache of size capacity
 * cache could mean a number of things lets figure that out first
 * least recently used cache
 * this means if the capactiy is exceeded we need to remove the least recently used item
 * this makes me think to use a queue data structure
 * we can pop off the front, this removes oldest items
 * we ideally want to preserve oldest items in order front to back
 * so when we get an item we put it back on the end of the queue
 * when we put an item we also put it back to the end of the queue
 * when we exceed capacity we pop an item off the fron of the queue
 * 2 data structures work
 * linked list and queue, ideally linked list is the most optimal as it is
 * less expensive to pop off front and shift elements
 * arrays are expensive to move element from middle or begining to end of array
 * linked lists are more complicated to implement
 * clarify with interviewer if an array approach is appropriate
 * going with array
 * 
 * PLAN: 
 * get: 
 * first search queue for element, if element is found get it ready to return
 * shift elements in array forward
 * push element to back of queue/array and return it after
 * 
 * put
 * check capacity, if capacity is reached pop off front of array push on new element
 * if capacity is not reached just push onto queue from back
 */


class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.queue = []
        this.capacity = capacity
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let value = [0,-1]

        // find key in queue
        for (let i = 0; i < this.queue.length; i++) {
            let curr = this.queue[i]
            // update value
            if (curr[0] === key) {
                value = curr
                // move curr to back of queue
                for (let j = i+1; j < this.queue.length; j++) {
                    this.queue[j-1] = this.queue[j]
                }
                this.queue[this.queue.length-1] = value
            }
        }
        console.log("GET", this.queue)
        return value[1]
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        //if updating
        if (this.get(key) !== -1) {
            this.queue[this.queue.length-1][1] = value
        }
        // if add anew 
        else {
            if (this.queue.length === this.capacity) {
                this.queue.shift()
                this.queue.push([key,value])
            } else {
                this.queue.push([key,value])
            }
        }
        console.log("PUT", this.queue)
    }
}
