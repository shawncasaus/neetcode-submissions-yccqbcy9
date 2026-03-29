class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        function isValidSquare(x, y) {
            const seen = new Set()
            let xRange = [0,0]
            let yRange = [0,0]
            
            // set xRange
            if (x === 1) {
                xRange = [0,2]
            } else if (x === 2) {
                xRange = [3,5]
            } else if (x == 3) {
                xRange = [6,8]
            }

            // set yRange
            if (y === 1) {
                yRange = [0,2]
            } else if (y === 2) {
                yRange = [3,5]
            } else if (y == 3) {
                yRange = [6,8]
            }

            for (let i = xRange[0]; i <= xRange[1]; i++) {
                const row = board[i]
                for (let j = yRange[0]; j <= yRange[1]; j++) {
                    if(seen.has(row[j])) {
                        return false
                    } else if (row[j] !== ".") {
                        seen.add(row[j])
                    }
                }
            }
            return true
        }

        function isValidRow(rowArray) {
            const seen = new Set()
            for (let i = 0; i < rowArray.length; i++) {
                if(seen.has(rowArray[i])) {
                    return false
                } else if (rowArray[i] !== ".") {
                    seen.add(rowArray[i])
                }
            }
            return true
        }

        function isValidColumn(columnIndex) {
            const seen = new Set()
            for (let i = 0; i < 9; i++) {
                if (seen.has(board[i][columnIndex])) {
                    return false
                } else if (board[i][columnIndex] !== ".") {
                    seen.add(board[i][columnIndex])
                }
            }
            return true
        }

        for (let i = 0; i < 9; i++) {
            if (!isValidRow(board[i])) return false
            if (!isValidColumn(i)) return false
        }
        for (let i = 1; i <= 3; i++) {
            for (let j = 1; j <= 3; j++) {
                if (!isValidSquare(i,j)) return false
            }
        }

        return true
    }
}
