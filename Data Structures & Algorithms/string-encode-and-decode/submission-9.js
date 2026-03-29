class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ""
        for (let i = 0; i < strs.length; i++) {
            encoded += `${strs[i].length}#${strs[i]}`
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        let decodedStrings = []
        let pointerOne = 0
        let pointerTwo = 1
        while (pointerTwo < str.length) {
            let numberOfLetters = str[pointerOne]
            let currentWord = ''
            while(str[pointerTwo] !== '#') {
                numberOfLetters += str[pointerTwo]
                pointerTwo++
            }
            for (let i = 1; i <= Number(numberOfLetters); i++) {
                pointerTwo++;
                currentWord += str[pointerTwo]
            }
            decodedStrings.push(currentWord)
            pointerOne = pointerTwo+1
            pointerTwo = pointerOne+1
            // pointerTwo = str.length +1
        }
        return decodedStrings
    }
}
