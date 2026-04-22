class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        indicies = {}

        for i, n in enumerate(nums):
            diff = target - n
            if diff not in indicies:
                indicies[n] = i
            else:
                index = indicies[diff]
                return [index,i]
        return [-1,-1]