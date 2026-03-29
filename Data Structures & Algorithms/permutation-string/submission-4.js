class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
checkInclusion(s1, s2) {
    if(s1.length>s2.length)
        return false;
    const charCount = (str) => {
        let count=new Array(26).fill(0);
        for (let char of str) count[char.charCodeAt(0)-'a'.charCodeAt(0)]++;
        return count
    };
    let s1Freq =charCount(s1)
    let windowFreq=charCount(s2.slice(0,s1.length))

    let matches=(arr1,arr2) => arr1.every((val,index) => (val === arr2[index]))

    if(matches(s1Freq,windowFreq))
    {
        return true;
    }
    for(let i=s1.length;i< s2.length;i++)
    {
        windowFreq[s2.charCodeAt(i)-'a'.charCodeAt(0)]++;
        windowFreq[s2.charCodeAt(i-s1.length)-'a'.charCodeAt(0)]--;
        if(matches(s1Freq,windowFreq)) return true
    }
    return false;
    }
}