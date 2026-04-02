class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.has(key)) {
            let values = this.keyStore.get(key)
            values.push({
                value,
                timestamp
            })
            this.keyStore.set(key, [...values])
        } else {
            this.keyStore.set(key, [{
                value,
                timestamp
            }])
        }
        console.log(this.keyStore)
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return ""
        let values = this.keyStore.get(key)
        values = values.sort((a,b) => a.timestamp-b.timestamp)
        console.log("values", values)

        let p1 = 0
        let p2 = values.length-1
        let mostRecent = {
            timestamp: -Infinity,
            value: ""
        }

        while(p1<=p2) {
            const mid = Math.floor((p1 + p2) / 2)
            if (values[mid].timestamp < timestamp) {
                if (mostRecent.timestamp < values[mid].timestamp) {
                    mostRecent = values[mid]
                }
                p1 = mid + 1
            } else if (values[mid].timestamp > timestamp) {
                p2 = mid -1
            } else {
                mostRecent = values[mid]
                break;
            }
        }
        return mostRecent.value
    }
}
