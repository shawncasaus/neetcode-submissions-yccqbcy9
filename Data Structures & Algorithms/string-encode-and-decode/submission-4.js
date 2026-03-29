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
            this.seenStrings[strs[i]] = true
            stringsEncoded += strs[i]
        }
        return stringsEncoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return []
        let currentString = ""
        let stringsDecoded = []
        for (let i = 0; i < str.length; i++) {
            currentString += str[i]
            if (currentString in this.seenStrings) {
                stringsDecoded.push(currentString)
                currentString = ""
            }
        }
        console.log(stringsDecoded)
        return stringsDecoded
    }
}
