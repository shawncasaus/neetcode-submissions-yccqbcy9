class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const result = [];
        let [newA, newB] = newInterval;
        let i = 0;

        // 1. add all intervals before newInterval
        while (i < intervals.length && intervals[i][1] < newA) {
            result.push(intervals[i]);
            i++;
        }

        // 2. merge all overlapping intervals
        while (i < intervals.length && intervals[i][0] <= newB) {
            newA = Math.min(newA, intervals[i][0]);
            newB = Math.max(newB, intervals[i][1]);
            i++;
        }

        // add merged interval
        result.push([newA, newB]);

        // 3. add all remaining intervals
        while (i < intervals.length) {
            result.push(intervals[i]);
            i++;
        }

        return result;
    }
}
