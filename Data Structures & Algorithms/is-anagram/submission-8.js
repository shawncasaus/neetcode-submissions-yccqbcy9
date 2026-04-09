class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        s = [...s].sort((a,b) => (a.charCodeAt() - 'a'.charCodeAt())-(b.charCodeAt() - 'a'.charCodeAt()))
        t = [...t].sort((a,b) => (a.charCodeAt() - 'a'.charCodeAt())-(b.charCodeAt() - 'a'.charCodeAt()))
        return `${s}` === `${t}`
    }
}
