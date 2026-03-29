class Solution:
    def search(self, nums, target):
        left, right = 0, len(nums) - 1
        res = -1
        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] == target:
                res = mid
                break
            
            if nums[left] <= nums[mid]:
                if target < nums[left] or target > nums[mid]:
                    left = mid + 1
                else:
                    right = mid - 1
            else:
                if target > nums[right] or target < nums[mid]:
                    right = mid - 1
                else:
                    left = mid + 1
        return res

        