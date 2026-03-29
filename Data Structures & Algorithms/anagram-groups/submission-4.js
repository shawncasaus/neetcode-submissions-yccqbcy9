class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramsMap = new Map()
        const returnArray = []
        for (let i = 0; i < strs.length; i++) {
            const arr = new Array(26).fill(0);
            for (let j = 0; j < strs[i].length; j++) {
                const index = strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0);
                arr[index]++
            }
            const str = arr.join('|');
            if (!anagramsMap.has(str)) {
                anagramsMap.set(str, [strs[i]]);
            } else {
                anagramsMap.get(str).push(strs[i]);
            }
        }
        console.log(anagramsMap)
        for (const value of anagramsMap.values()) {
            returnArray.push(value)
        }
        return returnArray;
    }
}
