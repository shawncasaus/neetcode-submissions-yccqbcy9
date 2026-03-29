class MyHashSet {
    constructor() {
        this.store = new Array(1000001).fill(false);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.store[key] = true
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.store[key] = false
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return !!this.store[key]
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
