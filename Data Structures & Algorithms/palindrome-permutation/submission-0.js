class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    canPermutePalindrome(s) {
        const characters = new Map()
        for (let i = 0; i < s.length; i++) {
            if (characters.has(s[i])) {
                let value = characters.get(s[i])
                value++
                characters.set(s[i], value)
            } else {
                characters.set(s[i], 1)
            }
        }

        let odds = 0
        characters.forEach((value, key) => {
            if (value % 2 === 1) {
                odds++
            }
        })
        console.log("characters", characters)
        console.log("odds", odds)

        if ((s.length % 2 === 0 && odds === 0) || (s.length % 2 === 1 && odds === 1)) {
            return true
        }
        return false
    }
}
