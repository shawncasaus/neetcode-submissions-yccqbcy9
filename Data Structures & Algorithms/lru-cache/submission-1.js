class LRUCache {
    constructor(capacity) {
        this.cache = [];
        this.capacity = capacity;
    }

    get(key) {
        for (let i = 0; i < this.cache.length; i++) {
            const [curKey, val] = this.cache[i];

            if (curKey === key) {
                const temp = this.cache[i];

                // remove from current position
                this.cache.splice(i, 1);

                // move to most recently used position
                this.cache.push(temp);

                return val;
            }
        }

        return -1;
    }

    put(key, value) {
        for (let i = 0; i < this.cache.length; i++) {
            const [curKey] = this.cache[i];

            if (curKey === key) {
                // remove old entry
                this.cache.splice(i, 1);

                // reinsert as most recently used
                this.cache.push([key, value]);
                return;
            }
        }

        // key does not exist
        if (this.cache.length === this.capacity) {
            this.cache.shift(); // evict least recently used
        }

        this.cache.push([key, value]);
    }
}
