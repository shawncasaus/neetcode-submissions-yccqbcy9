class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = new Map()

        for (let str of strs) {
            const key = new Array(26).fill(0)
            let i = 0
            while (i < str.length) {
                const letter = str[i].toLowerCase()
                const letterIndex = letter.charCodeAt(0) - 'a'.charCodeAt()
                key[letterIndex]++
                i++
            }

            if (anagrams.has(String(key))) {
                const anagramsArray = anagrams.get(String(key))
                anagramsArray.push(str)
                anagrams.set(String(key), anagramsArray)
            } else {
                anagrams.set(String(key), [str])
            }
        }

        const anagramsArray = []
        anagrams.forEach((val,key) => {
            anagramsArray.push(val)
        })
        
        return anagramsArray
    }
}
