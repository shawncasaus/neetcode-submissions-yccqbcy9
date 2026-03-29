class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals = intervals.sort((a,b) => a[0] - b[0])

        let p1 = 1
        const res = []
        let [start, pivot] = intervals[0]
        while (p1 < intervals.length) {
            const [curStart, curEnd] = intervals[p1]
            if (curStart > pivot) {
                res.push([start, pivot])
                start = curStart
            }
            pivot = curEnd
            p1++
        }
        res.push([start, pivot])
        return res
    }
}
