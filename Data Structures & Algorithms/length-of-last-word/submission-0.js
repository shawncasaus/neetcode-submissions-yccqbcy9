class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        const wordsArray = []
        let currentWord = ""
        let p1 = 0
        let p2 = 0
        while(p2 < s.length) {
            if (s[p2] === " ") {
                while(s[p2] === " ") p2++
                if (currentWord !== " " && currentWord !== "") wordsArray.push(currentWord)
                currentWord = ""
                continue;
            }
            currentWord += s[p2]
            p2++
        }
        if (currentWord !== " " && currentWord !== "") wordsArray.push(currentWord)
        console.log(wordsArray)
        return wordsArray[wordsArray.length - 1].length
    }
}
