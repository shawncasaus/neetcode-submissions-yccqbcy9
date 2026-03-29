class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = position.map((p, i) => [p, speed[i]]);
        pairs.sort((a, b) => b[0] - a[0]);
        let fleets = []
        for (let i = 0; i < pairs.length; i++) {
            let timeToDestination = (target - pairs[i][0]) / pairs[i][1]
            if (fleets.length === 0) {
                fleets.push(timeToDestination)
            } else if(timeToDestination > fleets[fleets.length - 1]) {
                fleets.push(timeToDestination)
            }
        }
        return fleets.length
    }
}
