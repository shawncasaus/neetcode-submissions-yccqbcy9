class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let arrayA = nums1
        let arrayB = nums2
        let totalLength = arrayA.length + arrayB.length
        let half = Math.floor((totalLength + 1) / 2);
        if (arrayB.length < arrayA.length) {
            let temp = arrayA
            arrayA = arrayB
            arrayB = temp
        }
        let leftPointer = 0
        let rightPointer = arrayA.length
        while (leftPointer <= rightPointer) {
            let i = Math.floor((leftPointer + rightPointer) / 2)
            let j = half - i
            const aLeft = (i > 0) ? arrayA[i-1] : Number.MIN_SAFE_INTEGER
            const aRight = (i < arrayA.length) ? arrayA[i] : Number.MAX_SAFE_INTEGER
            const bLeft = (j > 0) ? arrayB[j-1] : Number.MIN_SAFE_INTEGER
            const bRight = (j < arrayB.length) ? arrayB[j] : Number.MAX_SAFE_INTEGER

            if (aLeft <= bRight && bLeft <= aRight) {
                if (totalLength % 2 !== 0) return Math.max(aLeft, bLeft)
                return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2
            } else if (aLeft > bRight) {
                rightPointer = i - 1
            } else {
                leftPointer = i + 1
            }
        }
        return -1
    }
}
