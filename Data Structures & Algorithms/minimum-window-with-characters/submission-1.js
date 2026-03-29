class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let shortestSubstring = ""
        const sArray = new Array(128).fill(0)
        const tArray = new Array(128).fill(0)

        // fill tArray O(T)
        for (let i = 0; i < t.length; i++) {
            tArray[t[i].charCodeAt(0)]++
        }

        function isValidWindow() {
            for (let i = 0; i < 128; i++) {
                if (sArray[i] < tArray[i]) {
                    return false;
                }
            }
            return true;
        }

        let p1 = 0
        let p2 = 0

        while (p2 < s.length) {
            sArray[s.charCodeAt(p2)]++;
            while (p1 <= p2 && isValidWindow()) {
                const window = s.slice(p1, p2 + 1);

                if (shortestSubstring === "" || window.length < shortestSubstring.length) {
                    shortestSubstring = window;
                }

                sArray[s.charCodeAt(p1)]--;
                p1++;
            }
            p2++
        }
        return shortestSubstring
    }
}
