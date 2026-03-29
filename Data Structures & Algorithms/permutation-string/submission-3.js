class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
checkInclusion(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    const s1Map = new Array(26).fill(0); // Frequency map for s1
    const s2Map = new Array(26).fill(0); // Frequency map for current window in s2

    // Create the frequency map for s1
    for (let i = 0; i < s1.length; i++) {
        s1Map[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2Map[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // If the initial window is a match, return true
    if (this.arraysEquals(s1Map, s2Map)) {
        return true;
    }

    // Slide the window across s2
    for (let i = s1.length; i < s2.length; i++) {
        // Add the new character to the window
        s2Map[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;

        // Remove the old character from the window
        s2Map[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--;

        // Check if the current window is a match
        if (this.arraysEquals(s1Map, s2Map)) {
            return true;
        }
    }

    return false;
}

// Helper function to compare two frequency maps
arraysEquals(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) { // Corrected inequality check
            return false;
        }
    }
    return true;
}

}
