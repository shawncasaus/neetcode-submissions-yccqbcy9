class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    maxSlidingWindow(nums, k) {
        let p1 = 0
        let p2 = 0
        const returnArray = []
        const deque = []

        while (p2 < nums.length) {
            // remove smaller values from back
            while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[p2]) {
                deque.pop()
            }

            // add current index
            deque.push(p2)

            // remove out-of-window index from front
            if (deque[0] < p1) {
                deque.shift()
            }

            // record answer once window size is k
            if (p2 - p1 + 1 === k) {
                returnArray.push(nums[deque[0]])
                p1++
            }

            p2++
        }

        return returnArray
    }
}
