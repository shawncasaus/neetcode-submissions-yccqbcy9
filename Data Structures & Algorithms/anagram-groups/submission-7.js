class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramsMap = new Map()
        strs.forEach((str) => {
            const sortedStr = str.split("").sort().join("");
            if (!anagramsMap.has(sortedStr)) {
                anagramsMap.set(sortedStr, [str])
            } else {
                anagramsMap.get(sortedStr).push(str)
            }
        })
        const anagrams = []
        anagramsMap.forEach((strArray) => {
            anagrams.push(strArray)
        })
        return anagrams
    }
}
