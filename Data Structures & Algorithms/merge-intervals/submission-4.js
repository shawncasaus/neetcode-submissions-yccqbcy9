class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals = intervals.sort((a,b) => a[0] - b[0])
        const mergedIntervals = []

        for (let [currentA,currentB] of intervals) {
            if (mergedIntervals.length === 0) {
                mergedIntervals.push([currentA,currentB])
            } 
            else {
                let [mergedA, mergedB] = mergedIntervals[mergedIntervals.length -1]

                if (mergedB < currentA) {
                    mergedIntervals.push([currentA,currentB])
                } else {
                    let interval = mergedIntervals.pop()
                    interval[0] = mergedA
                    if (currentB < mergedB) {
                        interval[1] = mergedB
                    } else {
                        interval[1] = currentB
                    }
                    mergedIntervals.push(interval)
                }
            }
        }
        return mergedIntervals
    }
}
