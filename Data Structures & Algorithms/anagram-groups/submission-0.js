class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagrams = {}
        for (let i = 0; i < strs.length; i++) {
            let sortedI = strs[i].split('').sort().join('');
            if (sortedI in anagrams) {
                anagrams[sortedI].push(strs[i])
            } else {
                anagrams[sortedI] = [strs[i]]
            }
        }
        let returnArray = []
        for (const anagram in anagrams) {
            returnArray.push(anagrams[anagram])
        }
        return returnArray
    }
}
