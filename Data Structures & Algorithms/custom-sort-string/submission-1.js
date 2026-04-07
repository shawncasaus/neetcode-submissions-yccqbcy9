class Solution {
    /**
     * @param {string} order
     * @param {string} s
     * @return {string}
     */
    customSortString(order, s) {
        const orderCount = new Map()
        let permutationString = ""
        let otherCharsString = ""


        for (let i = 0; i < order.length; i++) {
            orderCount.set(order[i], 0)
        }

        for (let i = 0; i < s.length; i++) {
            if (orderCount.has(s[i])) {
                let temp = orderCount.get(s[i])
                temp += 1
                orderCount.set(s[i], temp)
            }
        }

        orderCount.forEach((val, key) => {
            let p1 = 0

            while (p1 < val) {
                permutationString += key.toString()
                p1++
            }
        })

        for (let i = 0; i < s.length; i++) {
            if (!orderCount.has(s[i])) {
                otherCharsString += s[i]
            }
        }

        permutationString += otherCharsString

        return permutationString
    }
}
