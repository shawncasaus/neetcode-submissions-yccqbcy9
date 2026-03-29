class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = ""
        for (let i = 0; i < strs.length; i++) {
            encodedString += `${strs[i].length}#${strs[i]}`
        }
        console.log(encodedString)
        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const returnArray = []
        let p1 = 0;
        while (p1 < str.length) {
            let p2 = p1
            let len = ""
            while(str[p2] !== "#") {
                len += str[p2]
                p2++
            }
            let start = p2 + 1
            const end = start + Number(len)
            let currentString = ""
            while (start < end) {
                currentString += str[start]
                start++
            }
            returnArray.push(currentString)
            p1 = end
        }
        return returnArray
    }

    // decode(str) {
    //     const res = [];
    //     let i = 0;

    //     while (i < str.length) {
    //         // 1) read length
    //         let j = i;
    //         while (str[j] !== "#") j++;

    //         const len = Number(str.slice(i, j));

    //         // 2) read the string of that length
    //         const start = j + 1;
    //         const end = start + len;
    //         res.push(str.slice(start, end));

    //         // 3) move pointer to next chunk
    //         i = end;
    //     }

    //     return res;
    // }
}
