class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ""
        for (let i = 0; i < strs.length; i++) {
            encoded += `${strs[i].length}#${strs[i]}`
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            // Find the '#' delimiter
            while (str[j] !== '#') {
                j++;
            }

            // Extract the length of the next string
            const length = parseInt(str.slice(i, j), 10);

            // Move past the '#' and extract the actual string
            const actualString = str.slice(j + 1, j + 1 + length);
            decoded.push(actualString);

            // Advance i to the next encoded string chunk
            i = j + 1 + length;
        }

        return decoded;
    }
}
