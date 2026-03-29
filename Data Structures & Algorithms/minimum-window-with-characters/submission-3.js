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

        // check for valid window
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

        // dynamic sliding window
        // p2 moves to find valid windows
        // p1 moves while the window is valid to find out the minimum length
        while (p2 < s.length) {
            // update sArray characters in window
            sArray[s.charCodeAt(p2)]++;
            // while p1 is valid and less than p2 shift it
            while (p1 <= p2 && isValidWindow()) {
                const window = s.slice(p1, p2 + 1); // get window

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
