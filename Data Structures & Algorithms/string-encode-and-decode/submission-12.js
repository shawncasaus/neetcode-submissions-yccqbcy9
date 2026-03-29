class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = ""
        for (let i = 0; i < strs.length; i++) {
            encodedString += `${strs[i]}#${strs[i].length}`
        }
        console.log(encodedString)
        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const returnArray = []
        let curString = ""
        let p1 = 0;
        while (p1 < str.length) {
            if (str[p1] === '#' && Number(str[p1+1]) === curString.length) {
                returnArray.push(curString)
                curString = ""
                p1++
            } else {
                curString += str[p1]
            }
            p1++
        }
        return returnArray
    }
}
