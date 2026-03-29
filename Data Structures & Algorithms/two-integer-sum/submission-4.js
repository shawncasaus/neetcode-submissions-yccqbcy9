class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        nums = nums.sort((a,b) => a - b)
        const mapIndexes = (nums) => {
            const map = new Map();
            nums.forEach((num, idx) => {
                if (!map.has(num)) {
                    map.set(num, []);
                }
                map.get(num).push(idx);
            });
            return map
        }
        const indexMap = mapIndexes(nums)
        let p1 = 0
        let p2 = nums.length - 1
        while (p1 < p2) {
            const sum = nums[p1] + nums[p2]
            if (sum < target) {
                p1++
            } else if (sum > target) {
                p2--
            } else {
                return [indexMap.get(nums[p1])[0],indexMap.get(nums[p2])[0]]
            }
        }
    }
}
