class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let arrayA, arrayB

        if (nums1.length <= nums2.length) {
            arrayA = nums1
            arrayB = nums2
        } else {
            arrayA = nums2
            arrayB = nums1
        }

        const totalLength = arrayA.length + arrayB.length
        const half = Math.floor(totalLength / 2)

        let p1 = 0
        let p2 = arrayA.length

        while (p1 <= p2) {
            const i = Math.floor((p1 + p2) / 2)   // count from A on left
            const j = half - i                     // count from B on left

            const Aleft  = (i > 0) ? arrayA[i - 1] : -Infinity
            const Aright = (i < arrayA.length) ? arrayA[i] : Infinity
            const Bleft  = (j > 0) ? arrayB[j - 1] : -Infinity
            const Bright = (j < arrayB.length) ? arrayB[j] : Infinity

            if (Aleft <= Bright && Bleft <= Aright) {
                if (totalLength % 2 === 1) {
                    return Math.min(Aright, Bright)
                } else {
                    return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2
                }
            } else if (Aleft > Bright) {
                p2 = i - 1
            } else {
                p1 = i + 1
            }
        }

        return 0
    }
}
