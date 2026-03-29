class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();

        // Dummy nodes
        this.left = new Node(0, 0);  // LRU side
        this.right = new Node(0, 0); // MRU side

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    remove(node) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    insert(node) {
        const prev = this.right.prev;
        const next = this.right;

        prev.next = node;
        node.prev = prev;
        node.next = next;
        next.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }

        const node = this.cache.get(key);
        this.remove(node);
        this.insert(node);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            const oldNode = this.cache.get(key);
            this.remove(oldNode);
        }

        const node = new Node(key, value);
        this.cache.set(key, node);
        this.insert(node);

        if (this.cache.size > this.capacity) {
            const lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
