class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numSquares(n) {
        const squares = new Array(n+1).fill(n+1)
        squares[0] = 1

        for (let i = 1; i < squares.length; i++) {
            // if perfect square
            if (Number.isInteger(Math.sqrt(i))) {
                squares[i] = 1
            } else {
                let p1 = 0
                let p2 = i
                while (p1 <= p2) {
                    if ((p2 + p1) === i) {
                        squares[i] = Math.min(squares[i], squares[p2] + squares[p1])
                    }
                    p1++
                    p2--
                }
            }
        }

        return squares[n]
    }
}
