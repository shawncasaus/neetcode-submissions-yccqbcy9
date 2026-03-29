class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b) => a - b)
        const triplets = []

        // iterate through nums O(n)
        for (let i = 0; i < nums.length; i++) {
            // skip duplicates
            if (nums[i] === nums[i-1] && i > 0) continue;

            // use two pointer to iterate through rest of array from i O(n)
            let p1 = i + 1
            let p2 = nums.length - 1;
            while(p1 < p2) {
                const sum = nums[i] + nums[p1] + nums[p2]
                if(sum > 0) {
                    p2--
                } else if (sum < 0) {
                    p1++
                } else {
                    triplets.push([nums[i], nums[p1], nums[p2]])
                    p1++
                    p2--
                    while(nums[p2] === nums[p2+1]) p2--
                    while(nums[p1] === nums[p1-1]) p1++
                }
            }
        }
        return triplets
    }
}
