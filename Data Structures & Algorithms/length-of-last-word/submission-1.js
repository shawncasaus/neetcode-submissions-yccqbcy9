class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        const wordsArray = []
        let currentWord = ""
        let p = 0
        while(p < s.length) {
            if (s[p] === " ") {
                while(s[p] === " ") p++
                if (currentWord !== " " && currentWord !== "") wordsArray.push(currentWord)
                currentWord = ""
                continue;
            }
            currentWord += s[p]
            p++
        }
        if (currentWord !== " " && currentWord !== "") wordsArray.push(currentWord)
        return wordsArray[wordsArray.length - 1].length
    }
}
