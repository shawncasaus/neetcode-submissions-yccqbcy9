class Solution {
    /**
     * @param {string[]} strings
     * @return {string[][]}
     */
    groupStrings(strings) {
        const stringMap = new Map()
        const returnArray = []
        // console.log(strings)
        // console.log('a', 'a'.charCodeAt(0))
        // console.log('z', 'z'.charCodeAt(0))

        function shiftStringRight(stringArray) {
            const shiftedArray = new Array(stringArray.length-1).fill("")
            let p1 = 0
            while(p1 < stringArray.length) {
                const charCode = stringArray[p1].charCodeAt(0)
                if (charCode === 122) {
                    shiftedArray[p1] = 'a'
                } else {
                    shiftedArray[p1] = String.fromCharCode(charCode+1)
                }
                p1++
            }
            return shiftedArray.join("")
        }
        
        for (let i = 0; i < strings.length; i++) {
            const word = strings[i]
            const stringArray = word.split("")
            let shiftedString = shiftStringRight(stringArray)
            while(shiftedString[0] !== 'a') shiftedString = shiftStringRight(shiftedString)
            if (!stringMap.has(shiftedString)) {
                stringMap.set(shiftedString, [])
            }
            stringMap.get(shiftedString).push(word)
        }

        stringMap.forEach((array) => returnArray.push(array))
        
        return returnArray
    }
}
