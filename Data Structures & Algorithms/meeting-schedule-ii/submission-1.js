/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (intervals.length === 0) return 0
        let startTimes = []
        let endTimes = []
        for (let i = 0; i < intervals.length; i++) {
            startTimes.push(intervals[i].start)
            endTimes.push(intervals[i].end)
        }
        startTimes = startTimes.sort((a,b) => a-b)
        endTimes = endTimes.sort((a,b) => a-b)
        let p1 = 0
        let p2 = 0
        let days = 0
        let meetings = 0
        while (p1 < startTimes.length) {
            if (startTimes[p1] < endTimes[p2]) {
                meetings++
                p1++
            } else {
                meetings--
                p2++
            }
            days = Math.max(meetings, days)
        }
        return days
    }
}
