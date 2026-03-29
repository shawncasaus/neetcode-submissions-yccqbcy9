class Solution {
    constructor() {
        this.seenStrings = {}
    }
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let stringsEncoded = ""
        for (let i = 0; i < strs.length; i++) {
            (strs[i].length === 0) ? this.seenStrings["space"] = true : this.seenStrings[strs[i]] = true
            stringsEncoded += strs[i]
        }
        return stringsEncoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let currentString = ""
        let stringsDecoded = []
        for (let i = 0; i < str.length; i++) {
            currentString += str[i]
            if (currentString in this.seenStrings) {
                (currentString === "space") ? stringsDecoded.push("") : stringsDecoded.push(currentString)
                currentString = ""
            }
        }
        return stringsDecoded
    }
}
