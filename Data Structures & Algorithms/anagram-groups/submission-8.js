class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramsMap = new Map()
        strs.forEach((str) => {
            const sortedStr = str.split("").sort().join("")
            if (!anagramsMap.has(sortedStr)) {
                anagramsMap.set(sortedStr, [str])
            } else {
                anagramsMap.get(sortedStr).push(str)
            }
        })
        const returnArray = []
        anagramsMap.forEach((key) => {
            returnArray.push(key)
        })
        return returnArray
    }
}
