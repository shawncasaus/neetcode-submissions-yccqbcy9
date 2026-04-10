class TimeMap {
    /**
     * Time based key value store
     * initialize object: what type of object?
     * is timestamp just a unix time code? simple math if so
     * Set: stores the key + value at timestamp in map
     * Key: maps to array of [timestamp, val]
     * Value: value is stored at key at given timestamp, so array of value timestamps
     * timestamp: same as value, [timestamp, value] array inside a map of keys
     * get gets value at that timestamp or most recent value and timestamp <= given timestamp
     * return "" if no values
     * no values can mean no key OR no timestamps earlier than given timestamp
     */
    constructor() {
        this.store = new Map()
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.store.has(key)) {
            let valuesArray = this.store.get(key)
            valuesArray.push([timestamp, value])
            this.store.set(key,valuesArray)
        } else {
            let valuesArray = new Array()
            valuesArray.push([timestamp, value])
            this.store.set(key,valuesArray)
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.store.has(key)) return ""
        let mostRecent = [0,""]

        let values = this.store.get(key)

        // binary search
        let p1 = 0
        let p2 = values.length -1
        while(p1 <= p2) {
            let mid = Math.floor((p1+p2) / 2)
            if (values[mid][0] > timestamp) {
                p2 = mid - 1
            } else if (values[mid][0] < timestamp) {
                p1 = mid + 1
                if (mostRecent[0] < values[mid][0]) {
                    mostRecent = values[mid]
                }
            } else {
                return values[mid][1]
            }
        }

        return mostRecent[1]
    }
}
