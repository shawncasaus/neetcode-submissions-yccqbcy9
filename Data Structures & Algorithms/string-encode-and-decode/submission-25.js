class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ""
        for (let str of strs) {
            const length = str.length
            let currentString = `${length}#`
            let i = 0
            while (i < length) {
                currentString += str[i]
                i++
            }
            encoded += currentString
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = []
        let i = 0
        while (i < str.length) {
            if (Number(str[i]) >= 0) {
                let count = ""
                count += Number(str[i]) 
                i++
                while (str[i] !== "#") {
                    count += str[i]
                    i++
                }
                count = Number(count)
                let currentString = ""
                let j = i + 1
                while (j < (i + count) + 1) {
                    currentString += str[j]
                    j++
                }
                i = j
                decoded.push(currentString)
            } else {
                i++
            }
        }
        return decoded
    }
}
